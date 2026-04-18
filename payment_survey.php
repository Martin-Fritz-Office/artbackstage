<?php
require_once __DIR__ . '/seo_meta.php';
?><!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <?php
    generate_seo_meta([
      'title' => 'Honorar-Feedback – artbackstage',
      'description' => 'Teile dein Honorar für deinen letzten Job und hilf uns, die Datenbank zu verbessern.',
      'lang' => 'de',
    ]);
  ?>
  <link rel="stylesheet" href="style.css" />
  <script defer src="payment_survey.js"></script>
</head>
<body>
  <a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>
  <div class="page">
    <header class="header">
      <div>
        <h1>Honorar-Feedback</h1>
        <p class="muted">Anonyme Umfrage über dein letztes Honorar. Deine Daten helfen anderen Kulturschaffenden.</p>
      </div>
      <div class="header-actions">
        <a class="btn btn-outline" href="index.php">Startseite</a>
        <a class="btn btn-outline" href="payment_survey_en.php">English</a>
      </div>
    </header>

    <main id="main-content" class="card tutorial-card">
      <div class="card-head">
        <h2>Wie viel hast du für deinen letzten Job verdient?</h2>
      </div>
      <div class="card-body">
        <form id="paymentSurveyForm">
          <div class="form-group">
            <label for="jobDescription">Beschreibung des Jobs</label>
            <input
              id="jobDescription"
              type="text"
              class="input-block"
              placeholder="z.B. Projektleitung, Recherche, Ausstellungsgestaltung"
              aria-label="Beschreibung des Jobs"
              maxlength="255"
            />
            <small class="muted">Optional: Kurze Beschreibung der Tätigkeit</small>
          </div>

          <div class="form-group">
            <label for="paymentAmount">Honorar (brutto in EUR)</label>
            <input
              id="paymentAmount"
              type="number"
              class="input-block"
              placeholder="z.B. 2500"
              aria-label="Honorar in EUR"
              min="0"
              step="0.01"
              required
            />
            <small class="muted">Erforderlich: Dein Honorar für diesen Job</small>
          </div>

          <div class="form-group">
            <label for="comment">Kommentar</label>
            <textarea
              id="comment"
              class="input-block"
              placeholder="z.B. Dauer, Kontext, besondere Umstände"
              aria-label="Kommentar"
              maxlength="1000"
              rows="4"
            ></textarea>
            <small class="muted">Optional: Weitere Informationen zum Job</small>
          </div>

          <div id="submitStatus" class="pill" aria-live="polite" hidden></div>

          <div class="form-actions">
            <button type="submit" class="btn" id="submitBtn">Absenden</button>
            <button type="reset" class="btn btn-outline">Zurücksetzen</button>
          </div>
        </form>

        <div id="successMessage" class="success-message" hidden>
          <p><strong>Vielen Dank!</strong> Deine Antwort wurde erfolgreich gespeichert.</p>
        </div>
      </div>
    </main>
  </div>
<?php require_once __DIR__ . '/site_footer.php'; render_site_footer(); ?>
</body>
</html>
