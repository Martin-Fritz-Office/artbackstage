<?php
/**
 * Honor Matrix Calculator - German Version
 * Interactive fee calculator based on German artist fee guidelines
 */

require_once 'seo_meta.php';

$headerTitle = 'Honorarmatrix-Rechner';
$headerSubtitle = 'Berechnen Sie faire Künstlerhonorare basierend auf der deutschen Honorarmatrix';
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Honorarmatrix-Rechner - artbackstage</title>
    <meta name="description" content="Interaktiver Rechner für Künstlerhonorare basierend auf der deutschen Honorarmatrix (Basishonorare mit Stufen). Berechnen Sie faire Gebühren für verschiedene künstlerische Tätigkeiten.">
    <meta name="keywords" content="Honorarmatrix, Künstlerhonorar, Fee Calculator, Basishonorare, NRW">
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
                <h1>Honorarmatrix-Rechner</h1>
                <p>Berechnen Sie faire Künstlerhonorare basierend auf der deutschen Honorarmatrix (Basishonorare mit Stufen, Stand: 23. Dezember 2025).</p>

                <form id="honorarForm" onsubmit="event.preventDefault(); calculateFee();">
                    <div class="form-group">
                        <label for="discipline">Kunstsparte</label>
                        <select id="discipline" required>
                            <option value="">--- Wählen Sie eine Kunstsparte ---</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="activity">Konkrete Tätigkeit</label>
                        <select id="activity" required>
                            <option value="">--- Wählen Sie zuerst eine Kunstsparte ---</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="criteria">Kriterium</label>
                        <select id="criteria" required>
                            <option value="">--- Wählen Sie zuerst eine Tätigkeit ---</option>
                        </select>
                    </div>

                    <div class="form-group hidden" id="numArtistsGroup">
                        <label for="numArtists">Anzahl der Künstler</label>
                        <input type="number" id="numArtists" min="1" max="100" value="1">
                        <small>Bei Gruppen wird der Honorarsatz pro Person automatisch berechnet (1/3 für 3-9 Künstler, 1/6 für 10+ Künstler).</small>
                    </div>

                    <div class="button-group">
                        <button type="submit" class="btn btn-primary">Berechnen</button>
                        <button type="reset" class="btn btn-secondary" onclick="resetForm();">Zurücksetzen</button>
                    </div>
                </form>
            </div>

            <div id="results"></div>

            <div class="calculator-section">
                <h2>Über diese Honorarmatrix</h2>
                <p>Die Honorarmatrix ist ein Empfehlungskatalog des Landes Nordrhein-Westfalen (NRW) für faire Künstlerhonorare. Sie basiert auf professionellen Richtlinien und berücksichtigt verschiedene Faktoren wie:</p>
                <ul>
                    <li><strong>Kunstsparte:</strong> Unterschiedliche künstlerische Disziplinen (Literatur, Bildende Kunst, Musik, etc.)</li>
                    <li><strong>Tätigkeit:</strong> Konkrete künstlerische Leistungen (Lesung, Ausstellung, Konzert, etc.)</li>
                    <li><strong>Variable Kriterien:</strong> Multiplikatoren basierend auf Veranstaltungsgröße und wirtschaftlicher Kraft des Auftraggebers</li>
                    <li><strong>Gruppengröße:</strong> Vergünstigung für Gruppen bei erhöhter Künstlerzahl</li>
                </ul>

                <h3>Wichtige Hinweise</h3>
                <ul>
                    <li><strong>Mindesthonorare:</strong> Die angegebenen Beträge sind Mindesthonorare, <u>keine Obergrenzen</u>. Höhere Honorare sind immer möglich.</li>
                    <li><strong>Zusatzkosten:</strong> Reisekosten und andere Kostenpositionen werden zusätzlich verhandelt und sind nicht in dieser Berechnung enthalten.</li>
                    <li><strong>Variable Kriterien:</strong> NRW empfiehlt die Anwendung der variablen Kriterien. Die endgültige Entscheidung liegt bei den Auftraggebern.</li>
                    <li><strong>Dauer:</strong> Die Honorare orientieren sich an typischen Veranstaltungsdauern (ca. 90 Minuten für Lesungen, ganzer Abend für Konzerte, etc.).</li>
                </ul>

                <h3>Quelle</h3>
                <p><strong>Anlage zu Nummer 2.2, "Matrix Basishonorare mit Stufen"</strong><br>
                Stand: 23. Dezember 2025</p>
                <p>Verantwortlich: Ministerium für Kultur und Wissenschaft des Landes Nordrhein-Westfalen (MKW)</p>

                <p><strong>Offizielle Ressourcen:</strong></p>
                <ul>
                    <li><a href="https://www.mkw.nrw/themen/kultur/kunst-und-kulturfoerderung/honoraruntergrenzen" target="_blank" rel="noopener noreferrer">MKW - Honoraruntergrenzen und Künstlerförderung</a></li>
                    <li><a href="data/honorarmatrix_stand_dezember_2025.pdf" target="_blank" rel="noopener noreferrer">PDF: Honorarmatrix Stand Dezember 2025 (555 KB)</a></li>
                </ul>
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
