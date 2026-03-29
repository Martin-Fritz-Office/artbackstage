<?php
/**
 * Honor Matrix Calculator - English Version
 * Interactive fee calculator based on German artist fee guidelines
 */

require_once 'seo_meta.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Honor Matrix Calculator - artbackstage</title>
    <meta name="description" content="Interactive calculator for artist fees based on the German honor matrix (base fees with levels). Calculate fair compensation for various artistic activities.">
    <meta name="keywords" content="Honor Matrix, Artist Fee, Fee Calculator, Base Fees, NRW">
    <link rel="stylesheet" href="style.css">
    <style>
        .calculator-container {
            max-width: 900px;
            margin: 2rem auto;
            padding: 2rem;
            background: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .calculator-section {
            margin-bottom: 2rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: #333;
        }

        .form-group select,
        .form-group input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
            background-color: white;
            color: #333;
        }

        .form-group select:focus,
        .form-group input:focus {
            outline: none;
            border-color: #0066cc;
            box-shadow: 0 0 5px rgba(0, 102, 204, 0.3);
        }

        .button-group {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }

        .btn {
            padding: 0.75rem 2rem;
            font-size: 1rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s;
        }

        .btn-primary {
            background-color: #0066cc;
            color: white;
        }

        .btn-primary:hover {
            background-color: #0052a3;
        }

        .btn-secondary {
            background-color: #666;
            color: white;
        }

        .btn-secondary:hover {
            background-color: #555;
        }

        .result-section {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            margin-top: 2rem;
            border-left: 4px solid #0066cc;
        }

        .result-section h3 {
            color: #0066cc;
            margin-top: 0;
        }

        .result-details {
            background: #f5f5f5;
            padding: 1.5rem;
            border-radius: 4px;
            margin: 1rem 0;
        }

        .result-row {
            display: flex;
            justify-content: space-between;
            padding: 0.75rem 0;
            border-bottom: 1px solid #e0e0e0;
        }

        .result-row:last-child {
            border-bottom: none;
        }

        .result-row.total {
            font-size: 1.25rem;
            font-weight: bold;
            color: #0066cc;
            background: white;
            padding: 1rem;
            border-radius: 4px;
            margin-top: 1rem;
        }

        .result-label {
            font-weight: bold;
            color: #333;
        }

        .result-value {
            text-align: right;
            color: #666;
        }

        .result-value.highlight {
            color: #0066cc;
            font-weight: bold;
        }

        .notes-section {
            background: #f0f7ff;
            padding: 1.5rem;
            border-radius: 4px;
            margin-top: 1.5rem;
            border-left: 4px solid #0066cc;
        }

        .notes-section h4 {
            margin-top: 0;
            color: #0066cc;
        }

        .notes-section ul {
            margin: 0;
            padding-left: 1.5rem;
        }

        .notes-section li {
            margin-bottom: 0.5rem;
            color: #555;
        }

        .info-box {
            background: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 4px;
            padding: 1rem;
            margin-top: 1rem;
            color: #856404;
        }

        .info-box p {
            margin: 0;
            font-size: 0.95rem;
        }

        .hidden {
            display: none;
        }

        @media (max-width: 600px) {
            .calculator-container {
                padding: 1rem;
            }

            .button-group {
                flex-direction: column;
            }

            .btn {
                width: 100%;
            }

            .result-row {
                flex-direction: column;
            }

            .result-value {
                text-align: left;
                margin-top: 0.25rem;
            }
        }
    </style>
</head>
<body>
    <div id="page-header">
        <?php require_once 'templates/header.php'; ?>
    </div>

    <main>
        <div class="calculator-container">
            <div class="calculator-section">
                <h1>Honor Matrix Calculator</h1>
                <p>Calculate fair artist fees based on the German honor matrix (base fees with levels, as of December 23, 2025).</p>

                <form id="honorarForm" onsubmit="event.preventDefault(); calculateFee();">
                    <div class="form-group">
                        <label for="discipline">Discipline</label>
                        <select id="discipline" required>
                            <option value="">--- Select a discipline ---</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="activity">Activity</label>
                        <select id="activity" required>
                            <option value="">--- Select a discipline first ---</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="criteria">Criteria</label>
                        <select id="criteria" required>
                            <option value="">--- Select an activity first ---</option>
                        </select>
                    </div>

                    <div class="form-group hidden" id="numArtistsGroup">
                        <label for="numArtists">Number of Artists</label>
                        <input type="number" id="numArtists" min="1" max="100" value="1">
                        <small>For groups, the fee per artist is automatically calculated (1/3 for 3-9 artists, 1/6 for 10+ artists).</small>
                    </div>

                    <div class="button-group">
                        <button type="submit" class="btn btn-primary">Calculate</button>
                        <button type="reset" class="btn btn-secondary" onclick="resetForm();">Reset</button>
                    </div>
                </form>
            </div>

            <div id="results"></div>

            <div class="calculator-section">
                <h2>About This Honor Matrix</h2>
                <p>The Honor Matrix is a recommended fee catalog from the state of North Rhine-Westphalia (NRW) in Germany for fair artist compensation. It is based on professional guidelines and takes into account various factors such as:</p>
                <ul>
                    <li><strong>Discipline:</strong> Different artistic fields (literature, visual arts, music, performing arts, etc.)</li>
                    <li><strong>Activity:</strong> Specific artistic services (readings, exhibitions, concerts, performances, etc.)</li>
                    <li><strong>Variable Criteria:</strong> Multipliers based on event size and financial strength of the organizer</li>
                    <li><strong>Group Size:</strong> Discounts for groups with multiple artists</li>
                </ul>

                <h3>Important Notes</h3>
                <ul>
                    <li><strong>Minimum Fees:</strong> The stated amounts are <u>minimum fees, not upper limits</u>. Higher fees are always possible.</li>
                    <li><strong>Additional Costs:</strong> Travel costs and other expense items are negotiated separately and are not included in this calculation.</li>
                    <li><strong>Variable Criteria:</strong> NRW recommends applying variable criteria. The final decision rests with the organizers.</li>
                    <li><strong>Duration:</strong> Fees are based on typical event durations (approx. 90 minutes for readings, full evening for concerts, etc.).</li>
                </ul>

                <h3>Source</h3>
                <p>Annex to Item 2.2, "Matrix Base Fees with Levels", Status: December 23, 2025</p>
                <p>Responsible: Ministry of Culture and Science of the State of North Rhine-Westphalia</p>
            </div>
        </div>
    </main>

    <footer>
        <?php require_once 'site_footer.php'; ?>
    </footer>

    <script src="honorar_matrix_data.js"></script>
    <script src="honorar_matrix_calculator.js"></script>
</body>
</html>
