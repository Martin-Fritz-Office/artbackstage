<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store, max-age=0');
header('Referrer-Policy: no-referrer');

const MAX_PAYLOAD_BYTES = 50000;
const MAX_DESCRIPTION_LENGTH = 255;
const MAX_COMMENT_LENGTH = 1000;

/**
 * @param array<string, mixed> $extra
 */
function fail(int $statusCode, string $code, string $message, array $extra = []): void
{
    http_response_code($statusCode);
    echo json_encode(array_merge([
        'ok' => false,
        'error' => $message,
        'code' => $code,
    ], $extra));
    exit;
}

function logApiError(string $code, Throwable $e): void
{
    error_log(sprintf('[submit_payment_survey] code=%s message=%s', $code, $e->getMessage()));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    fail(405, 'method_not_allowed', 'Method not allowed');
}

$configPath = __DIR__ . '/db_config.php';
if (!is_file($configPath)) {
    fail(500, 'missing_db_config', 'Missing db_config.php');
}

$config = require $configPath;
if (!is_array($config)) {
    fail(500, 'invalid_db_config', 'Invalid db config');
}

$raw = file_get_contents('php://input');
if ($raw === false) {
    fail(400, 'invalid_payload', 'Invalid request body');
}

if (strlen($raw) > MAX_PAYLOAD_BYTES) {
    fail(413, 'payload_too_large', 'Payload exceeds maximum size', ['maxBytes' => MAX_PAYLOAD_BYTES]);
}

$data = json_decode($raw, true);
if (!is_array($data)) {
    fail(400, 'invalid_json', 'Invalid JSON payload');
}

$locale = isset($data['locale']) ? strtolower(trim((string) $data['locale'])) : 'de';
if (!in_array($locale, ['de', 'en'], true)) {
    fail(400, 'invalid_locale', 'Locale must be one of: de, en');
}

$jobDescription = trim((string) ($data['jobDescription'] ?? ''));
if (mb_strlen($jobDescription) > MAX_DESCRIPTION_LENGTH) {
    fail(400, 'description_too_long', 'Job description exceeds maximum length');
}

if (!array_key_exists('paymentAmount', $data) || !is_numeric($data['paymentAmount'])) {
    fail(400, 'invalid_payment_amount', 'Payment amount must be numeric');
}

$paymentAmount = (float) $data['paymentAmount'];
if (!is_finite($paymentAmount)) {
    fail(400, 'invalid_payment_amount', 'Payment amount must be finite');
}

if ($paymentAmount < 0) {
    fail(400, 'invalid_payment_amount', 'Payment amount must be >= 0');
}

$comment = trim((string) ($data['comment'] ?? ''));
if (mb_strlen($comment) > MAX_COMMENT_LENGTH) {
    fail(400, 'comment_too_long', 'Comment exceeds maximum length');
}

$dsn = sprintf(
    'mysql:host=%s;port=%d;dbname=%s;charset=utf8mb4',
    $config['host'] ?? '127.0.0.1',
    (int) ($config['port'] ?? 3306),
    $config['database'] ?? ''
);

try {
    $pdo = new PDO($dsn, (string) ($config['user'] ?? ''), (string) ($config['password'] ?? ''), [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);

    $stmt = $pdo->prepare(
        'INSERT INTO payment_survey_submissions (locale, job_description, payment_amount, comment)
         VALUES (:locale, :job_description, :payment_amount, :comment)'
    );

    $stmt->execute([
        ':locale' => $locale,
        ':job_description' => $jobDescription,
        ':payment_amount' => $paymentAmount,
        ':comment' => $comment,
    ]);

    echo json_encode([
        'ok' => true,
        'id' => (int) $pdo->lastInsertId(),
    ]);
} catch (Throwable $e) {
    logApiError('database_error', $e);
    fail(500, 'database_error', 'Database error');
}
