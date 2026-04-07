<?php
?><!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>BKF Honorarrechner – Künstlerhonorar Kalkulator</title>
  <link rel="stylesheet" href="style.css" />
  <script defer src="bkf_artist_fees_calculator.js"></script>
</head>
<body>
  <a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>
  <div class="page planning-wide freelance-page">
    <header class="header">
      <div>
        <h1>BKF Honorarrechner</h1>
        <p class="muted">Berechne dein Künstlerhonorar basierend auf den Empfehlungen des Billedkunstnernes Forbund (BKF) Dänemark.</p>
        <p class="small muted">Basiert auf den <a href="https://www.billedkunstnernes-forbund.dk/" target="_blank" rel="noopener noreferrer">BKF-Prislisten</a>. Die Preise sind Richtwerte in EUR (exkl. Mehrwertsteuer).</p>
      </div>
      <div class="header-actions">
        <div class="language-toggle">
          <button class="btn btn-outline active" data-lang="de">Deutsch</button>
          <button class="btn btn-outline" data-lang="en">English</button>
        </div>
        <a class="btn btn-outline" href="index.php">Startseite</a>
      </div>
    </header>

    <main id="main-content" class="grid planning-grid freelance-grid">
      <section class="card planning-card-wide freelance-card-wide">
        <div class="card-head">
          <h2>Honorarkategorie wählen</h2>
        </div>
        <div class="card-body">
          <div class="qgrid">
            <label class="q">
              <span>Kategorie</span>
              <select id="feeCategory"></select>
            </label>
          </div>
          <hr class="sep" />
          <div id="feeItems" class="sheet"></div>
        </div>
      </section>

      <section class="card planning-card-wide freelance-card-wide">
        <div class="card-head">
          <h2>Honorarberechnung</h2>
        </div>
        <div class="card-body">
          <div class="comparison-table-wrap">
            <table class="comparison-table" id="resultTable">
              <thead>
                <tr>
                  <th>Kategorie</th>
                  <th>Leistung</th>
                  <th>Betrag (€)</th>
                </tr>
              </thead>
              <tbody></tbody>
              <tfoot>
                <tr>
                  <th colspan="2">Gesamthonorar (exkl. MwSt.)</th>
                  <th id="grandTotal">0,00</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="footer">
            <button class="btn" id="downloadCsvBtn" type="button">CSV downloaden</button>
          </div>
          <p class="small muted">Diese Berechnung ist eine Orientierungshilfe. Die Richtwerte basieren auf den BKF-Empfehlungen für Künstler:innen und können je nach Projekt und Vereinbarung angepasst werden.</p>
        </div>
      </section>

      <section class="card planning-card-wide freelance-card-wide">
        <div class="card-head">
          <h2>Über diese Honorare</h2>
        </div>
        <div class="card-body">
          <h3>Stundenhonorar – Künstlerische Arbeit</h3>
          <p>Für direkte künstlerische Leistungen wie Konzeption, Produktion und künstlerische Beratung. Unterschiedliche Sätze je nach Berufserfahrung.</p>

          <h3>Stundenhonorar – Künstler als Berater:in</h3>
          <p>Für Beratungstätigkeiten auf künstlerischem Gebiet. Höher als künstlerische Arbeit, da spezialisierte Expertise gefordert ist.</p>

          <h3>Kunstaufgaben / Ausschmückungen</h3>
          <p>Für größere Kunstprojekte wird das Honorar als Prozentsatz des Projektbudgets berechnet. Je größer das Budget, desto niedriger der Prozentsatz.</p>

          <h3>Skizzenproposal</h3>
          <p>Pauschalgebühr für die Erstellung von Skizzenvorschlägen inkl. Beschreibung, Dimensionen, Materialien und Kostenüberschlag.</p>

          <h3>Performance</h3>
          <p>Mindesthonorar für Performance-Aufführungen. Basiert auf 1 Person, 10–20 Minuten, max. 50.000 EUR Produktionsbudget.</p>

          <h3>Weitere Aufgaben</h3>
          <p>Artist Talks, Vorträge, Panel-Teilnahmen und weitere Tätigkeiten haben eigene Pauschalen.</p>

          <h3>Unterricht (Freelance)</h3>
          <p>Für freiberufliche Unterrichtsvergütungen ohne Anstellung an einer Institution.</p>
        </div>
      </section>
    </main>
  </div>
<?php require_once __DIR__ . '/site_footer.php'; render_site_footer(); ?>
</body>
</html>
