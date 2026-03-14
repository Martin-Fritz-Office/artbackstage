<?php
// TEMP DEBUG FILE — DELETE FROM SERVER AFTER USE

$config = require __DIR__ . '/db_config.php';
$hash   = trim((string) ($config['admin_password_hash'] ?? ''));
$pw     = $_GET['pw'] ?? '';

echo '<pre>';
echo 'Hash length : ' . strlen($hash) . "\n";
echo 'Hash starts : ' . substr($hash, 0, 7) . "\n"; // safe to show prefix
echo 'Hash valid  : ' . (password_get_info($hash)['algo'] ? 'YES' : 'NO') . "\n";

if ($pw !== '') {
    echo 'Password OK : ' . (password_verify($pw, $hash) ? 'YES ✓' : 'NO ✗') . "\n";
} else {
    echo "\nAdd ?pw=yourpassword to the URL to test.\n";
}
echo '</pre>';
