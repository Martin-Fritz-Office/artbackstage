<?php
?><!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>BKF Fee Calculator – Artist Honorarium Calculator</title>
  <link rel="stylesheet" href="style.css" />
  <script defer src="bkf_artist_fees_calculator.js"></script>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <div class="page planning-wide freelance-page">
    <header class="header">
      <div>
        <h1>BKF Fee Calculator</h1>
        <p class="muted">Calculate your artist honorarium based on the recommendations of Billedkunstnernes Forbund (BKF) Denmark.</p>
        <p class="small muted">Based on <a href="https://bkf.dk/en/raad-og-jura/vejledende-priser-2/" target="_blank" rel="noopener noreferrer">BKF fee guidelines</a>. Prices are indicative values in EUR (excl. VAT).</p>
      </div>
      <div class="header-actions">
        <div class="language-toggle">
          <button class="btn btn-outline" data-lang="de">Deutsch</button>
          <button class="btn btn-outline active" data-lang="en">English</button>
        </div>
        <a class="btn btn-outline" href="index_en.php">Home</a>
      </div>
    </header>

    <main id="main-content" class="grid planning-grid freelance-grid">
      <section class="card planning-card-wide freelance-card-wide">
        <div class="card-head">
          <h2>Select Fee Category</h2>
        </div>
        <div class="card-body">
          <div class="qgrid">
            <label class="q">
              <span>Category</span>
              <select id="feeCategory"></select>
            </label>
          </div>
          <hr class="sep" />
          <div id="feeItems" class="sheet"></div>
        </div>
      </section>

      <section class="card planning-card-wide freelance-card-wide">
        <div class="card-head">
          <h2>Fee Calculation</h2>
        </div>
        <div class="card-body">
          <div class="comparison-table-wrap">
            <table class="comparison-table" id="resultTable">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Service</th>
                  <th>Amount (€)</th>
                </tr>
              </thead>
              <tbody></tbody>
              <tfoot>
                <tr>
                  <th colspan="2">Total Honorarium (excl. VAT)</th>
                  <th id="grandTotal">0.00</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="footer">
            <button class="btn" id="downloadCsvBtn" type="button">Download CSV</button>
          </div>
          <p class="small muted">This calculation is a reference guide. The indicated values are based on BKF recommendations for artists and can be adjusted according to specific project requirements and agreements.</p>
        </div>
      </section>

      <section class="card planning-card-wide freelance-card-wide">
        <div class="card-head">
          <h2>About These Fees</h2>
        </div>
        <div class="card-body">
          <h3>Hourly Rate – Artistic Work</h3>
          <p>For direct artistic services such as conception, production, and artistic consultation. Different rates based on professional experience.</p>

          <h3>Hourly Rate – Artist as Consultant</h3>
          <p>For consultancy services in artistic matters. Higher than regular artistic work as specialized expertise is required.</p>

          <h3>Art Tasks / Decorations</h3>
          <p>For larger art projects, the honorarium is calculated as a percentage of the project budget. The larger the budget, the lower the percentage.</p>

          <h3>Sketch Proposal</h3>
          <p>Flat fee for the creation of sketch proposals including location description, dimensions, materials, and cost estimate.</p>

          <h3>Performance</h3>
          <p>Minimum honorarium for performance presentations. Based on 1 person, 10–20 minutes, max. €50,000 production budget.</p>

          <h3>Other Tasks</h3>
          <p>Artist talks, lectures, panel participations, and other activities have their own flat rates.</p>

          <h3>Teaching (Freelance)</h3>
          <p>For freelance teaching compensation not attached to institutional employment.</p>
        </div>
      </section>
    </main>
  </div>
<?php require_once __DIR__ . '/site_footer.php'; render_site_footer(); ?>
</body>
</html>
