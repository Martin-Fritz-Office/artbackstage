<?php
require_once __DIR__ . '/seo_meta.php';
?><!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <?php
    generate_seo_meta([
      'title' => 'Payment Feedback – artbackstage',
      'description' => 'Share your payment for your last job and help us improve our database.',
      'lang' => 'en',
    ]);
  ?>
  <link rel="stylesheet" href="style.css" />
  <script defer src="payment_survey.js"></script>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <div class="page">
    <header class="header">
      <div>
        <h1>Payment Feedback</h1>
        <p class="muted">Anonymous survey about your last job payment. Your data helps other cultural professionals.</p>
      </div>
      <div class="header-actions">
        <a class="btn btn-outline" href="index_en.php">Home</a>
        <a class="btn btn-outline" href="payment_survey.php">Deutsch</a>
      </div>
    </header>

    <main id="main-content" class="card tutorial-card">
      <div class="card-head">
        <h2>How much did you earn for your last job?</h2>
      </div>
      <div class="card-body">
        <form id="paymentSurveyForm">
          <div class="form-group">
            <label for="jobDescription">Job Description</label>
            <input
              id="jobDescription"
              type="text"
              class="input-block"
              placeholder="e.g. Project management, Research, Exhibition design"
              aria-label="Job description"
              maxlength="255"
            />
            <small class="muted">Optional: Brief description of the activity</small>
          </div>

          <div class="form-group">
            <label for="paymentAmount">Payment (gross)</label>
            <div style="display: flex; gap: 0.5rem;">
              <input
                id="paymentAmount"
                type="number"
                class="input-block"
                placeholder="e.g. 2500"
                aria-label="Payment"
                min="0"
                step="0.01"
                required
                style="flex: 1;"
              />
              <select
                id="currency"
                class="input-inline"
                aria-label="Currency"
                required
              >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="CHF">CHF</option>
                <option value="JPY">JPY</option>
                <option value="CAD">CAD</option>
                <option value="AUD">AUD</option>
                <option value="SEK">SEK</option>
                <option value="NOK">NOK</option>
                <option value="DKK">DKK</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <small class="muted">Required: Your payment and currency</small>
          </div>

          <div class="form-group">
            <label for="comment">Comment</label>
            <textarea
              id="comment"
              class="input-block"
              placeholder="e.g. Duration, context, special circumstances"
              aria-label="Comment"
              maxlength="1000"
              rows="4"
            ></textarea>
            <small class="muted">Optional: Additional information about the job</small>
          </div>

          <div id="submitStatus" class="pill" aria-live="polite" hidden></div>

          <div class="form-actions">
            <button type="submit" class="btn" id="submitBtn">Submit</button>
            <button type="reset" class="btn btn-outline">Reset</button>
          </div>
        </form>

        <div id="successMessage" class="success-message" hidden>
          <p><strong>Thank you!</strong> Your response has been saved successfully.</p>
        </div>
      </div>
    </main>
  </div>
<?php require_once __DIR__ . '/site_footer.php'; render_site_footer(); ?>
</body>
</html>
