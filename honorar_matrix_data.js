/**
 * Honor Matrix Data from "Basishonorare mit Stufen" (December 2025)
 * German artist fee reference matrix for NRW (North Rhine-Westphalia)
 */

const honorMatrixData = {
  disciplines: {
    wort: {
      name: 'Wort',
      activities: {
        autor_lesung_einzel: {
          name: 'Autor/ Autorin - Lesung Einzel',
          baseHonor: 250,
          criteria: [
            { multiplier: 1, label: '1-50 Zuschauende', value: 250 },
            { multiplier: 1.5, label: '50-100 Zuschauende', value: 375 },
            { multiplier: 2, label: 'mehr als 100 Zuschauende', value: 500 }
          ]
        },
        autor_lesung_gruppe: {
          name: 'Autor/ Autorin - Lesung Gruppen',
          baseHonor: 250,
          groupRules: '3-9 Künstlerinnen/Künstler: 1/3 des Honorars pro Person, Ab 10 Künstlerinnen/Künstler: 1/6 des Honorars pro Person',
          criteria: [
            { multiplier: 1, label: '1-50 Zuschauende', value: 250 },
            { multiplier: 1.5, label: '50-100 Zuschauende', value: 375 },
            { multiplier: 2, label: 'mehr als 100 Zuschauende', value: 500 }
          ]
        },
        sprecher_einzel: {
          name: 'Sprecher/ Sprecherin - Einzel',
          baseHonor: 250,
          criteria: [
            { multiplier: 1, label: '1-50 Zuschauende', value: 250 },
            { multiplier: 1.5, label: '50-100 Zuschauende', value: 375 },
            { multiplier: 2, label: 'mehr als 100 Zuschauende', value: 500 }
          ]
        },
        sprecher_gruppe: {
          name: 'Sprecher/ Sprecherin - Gruppen',
          baseHonor: 250,
          groupRules: '3-9 Künstlerinnen/Künstler: 1/3 des Honorars pro Person, Ab 10 Künstlerinnen/Künstler: 1/6 des Honorars pro Person',
          criteria: [
            { multiplier: 1, label: '1-50 Zuschauende', value: 250 },
            { multiplier: 1.5, label: '50-100 Zuschauende', value: 375 },
            { multiplier: 2, label: 'mehr als 100 Zuschauende', value: 500 }
          ]
        },
        uebersetzer_einzel: {
          name: 'Literarischer Übersetzer/ Literarische Übersetzerin - Einzel',
          baseHonor: 250,
          criteria: [
            { multiplier: 1, label: '1-50 Zuschauende', value: 250 },
            { multiplier: 1.5, label: '50-100 Zuschauende', value: 375 },
            { multiplier: 2, label: 'mehr als 100 Zuschauende', value: 500 }
          ]
        },
        uebersetzer_gruppe: {
          name: 'Literarischer Übersetzer/ Literarische Übersetzerin - Gruppen',
          baseHonor: 250,
          groupRules: '3-9 Künstlerinnen/Künstler: 1/3 des Honorars pro Person, Ab 10 Künstlerinnen/Künstler: 1/6 des Honorars pro Person',
          criteria: [
            { multiplier: 1, label: '1-50 Zuschauende', value: 250 },
            { multiplier: 1.5, label: '50-100 Zuschauende', value: 375 },
            { multiplier: 2, label: 'mehr als 100 Zuschauende', value: 500 }
          ]
        },
        moderation_einzel: {
          name: 'Die Lesung begleitende Moderation - Einzel',
          baseHonor: 250,
          criteria: [
            { multiplier: 1, label: '1-50 Zuschauende', value: 250 },
            { multiplier: 1.5, label: '50-100 Zuschauende', value: 375 },
            { multiplier: 2, label: 'mehr als 100 Zuschauende', value: 500 }
          ]
        },
        moderation_gruppe: {
          name: 'Die Lesung begleitende Moderation - Gruppen',
          baseHonor: 250,
          groupRules: '3-9 Künstlerinnen/Künstler: 1/3 des Honorars pro Person, Ab 10 Künstlerinnen/Künstler: 1/6 des Honorars pro Person',
          criteria: [
            { multiplier: 1, label: '1-50 Zuschauende', value: 250 },
            { multiplier: 1.5, label: '50-100 Zuschauende', value: 375 },
            { multiplier: 2, label: 'mehr als 100 Zuschauende', value: 500 }
          ]
        }
      }
    },
    bildende_kunst: {
      name: 'Bildende Kunst',
      activities: {
        ausstellung_einzel: {
          name: 'Ausstellungsvergütung - Einzel',
          baseHonor: 600,
          duration: 'ca. 4 Wochen (Zu vergüten sind lediglich die ersten 8 Wochen der Ausstellung)',
          criteria: [
            { multiplier: 1, label: 'Soziokultur, Dritte Orte, Bildungseinrichtungen', value: 600 },
            { multiplier: 1.5, label: 'Private und Öffentlich-getragene Museen und Kunstvereine mit Besucherzahlen unter 100.000 Besuchern pro Jahr, Galerien', value: 900 },
            { multiplier: 2, label: 'Private und Öffentlich-getragene Museen und Kunstvereine mit Besucherzahlen über 100.000 Besuchern pro Jahr', value: 1200 }
          ]
        },
        ausstellung_gruppe: {
          name: 'Ausstellungsvergütung - Gruppen',
          baseHonor: 600,
          duration: 'ca. 4 Wochen (Zu vergüten sind lediglich die ersten 8 Wochen der Ausstellung)',
          groupRules: '3-9 Künstlerinnen/Künstler: 1/3 des Honorars pro Person, Ab 10 Künstlerinnen/Künstler: 1/6 des Honorars pro Person',
          criteria: [
            { multiplier: 1, label: 'Soziokultur, Dritte Orte, Bildungseinrichtungen', value: 600 },
            { multiplier: 1.5, label: 'Private und Öffentlich-getragene Museen und Kunstvereine mit Besucherzahlen unter 100.000 Besuchern pro Jahr, Galerien', value: 900 },
            { multiplier: 2, label: 'Private und Öffentlich-getragene Museen und Kunstvereine mit Besucherzahlen über 100.000 Besuchern pro Jahr', value: 1200 }
          ]
        },
        performance_einzel: {
          name: 'Performance - Einzel',
          baseHonor: 250,
          criteria: [
            { multiplier: 1, label: 'Soziokultur, Dritte Orte, Bildungseinrichtungen', value: 250 },
            { multiplier: 1.5, label: 'Private und Öffentlich-getragene Museen und Kunstvereine mit Besucherzahlen unter 100.000 Besuchern pro Jahr, Galerien', value: 375 },
            { multiplier: 2, label: 'Private und Öffentlich-getragene Museen und Kunstvereine mit Besucherzahlen über 100.000 Besuchern pro Jahr', value: 500 }
          ]
        },
        performance_gruppe: {
          name: 'Performance - Gruppen',
          baseHonor: 250,
          groupRules: '3-9 Künstlerinnen/Künstler: 1/3 des Honorars pro Person, Ab 10 Künstlerinnen/Künstler: 1/6 des Honorars pro Person',
          criteria: [
            { multiplier: 1, label: 'Soziokultur, Dritte Orte, Bildungseinrichtungen', value: 250 },
            { multiplier: 1.5, label: 'Private und Öffentlich-getragene Museen und Kunstvereine mit Besucherzahlen unter 100.000 Besuchern pro Jahr, Galerien', value: 375 },
            { multiplier: 2, label: 'Private und Öffentlich-getragene Museen und Kunstvereine mit Besucherzahlen über 100.000 Besuchern pro Jahr', value: 500 }
          ]
        },
        film_screening_einzel: {
          name: 'Film- und Videoscreening - Einzel',
          baseHonor: 250,
          criteria: [
            { multiplier: 1, label: 'Soziokultur, Dritte Orte, Bildungseinrichtungen', value: 250 },
            { multiplier: 1.5, label: 'Private und Öffentlich-getragene Museen und Kunstvereine mit Besucherzahlen unter 100.000 Besuchern pro Jahr, Galerien', value: 375 },
            { multiplier: 2, label: 'Private und Öffentlich-getragene Museen und Kunstvereine mit Besucherzahlen über 100.000 Besuchern pro Jahr', value: 500 }
          ]
        },
        film_screening_gruppe: {
          name: 'Film- und Videoscreening - Gruppen',
          baseHonor: 250,
          groupRules: '3-9 Künstlerinnen/Künstler: 1/3 des Honorars pro Person, Ab 10 Künstlerinnen/Künstler: 1/6 des Honorars pro Person',
          criteria: [
            { multiplier: 1, label: 'Soziokultur, Dritte Orte, Bildungseinrichtungen', value: 250 },
            { multiplier: 1.5, label: 'Private und Öffentlich-getragene Museen und Kunstvereine mit Besucherzahlen unter 100.000 Besuchern pro Jahr, Galerien', value: 375 },
            { multiplier: 2, label: 'Private und Öffentlich-getragene Museen und Kunstvereine mit Besucherzahlen über 100.000 Besuchern pro Jahr', value: 500 }
          ]
        }
      }
    },
    musik: {
      name: 'Musik',
      activities: {
        popmusik_vorstellung: {
          name: 'Tanz- und Popmusiker/ Tanz- und Popmusikerin - Vorstellung',
          baseHonor: 250,
          duration: 'abendfüllendes Konzert',
          criteria: [
            { multiplier: 1, label: 'bis 500 Zuschauende', value: 250 },
            { multiplier: 1.5, label: '500-1.500 Zuschauende', value: 375 },
            { multiplier: 2, label: 'über 1.500 Zuschauende', value: 500 }
          ]
        },
        popmusik_probe: {
          name: 'Tanz- und Popmusiker/ Tanz- und Popmusikerin - dazugehörige Durchlaufproben',
          baseHonor: 180,
          duration: 'ca. 6 Stunden',
          criteria: [
            { multiplier: 1, label: 'bis 500 Zuschauende', value: 180 },
            { multiplier: 1.5, label: '500-1.500 Zuschauende', value: 270 },
            { multiplier: 2, label: 'über 1.500 Zuschauende', value: 360 }
          ]
        },
        orchester_vorstellung: {
          name: 'Musiker/ Musikerin (Orchester-, Kammer-, Bühnenmusik) - Vorstellung',
          baseHonor: 250,
          duration: 'abendfüllendes Konzert',
          criteria: [
            { multiplier: 1, label: 'bis 500 Zuschauende', value: 250 },
            { multiplier: 1.5, label: '500-1.500 Zuschauende', value: 375 },
            { multiplier: 2, label: 'über 1.500 Zuschauende', value: 500 }
          ]
        },
        orchester_probe: {
          name: 'Musiker/ Musikerin (Orchester-, Kammer-, Bühnenmusik) - dazugehörige Durchlaufproben',
          baseHonor: 180,
          duration: 'ca. 6 Stunden',
          criteria: [
            { multiplier: 1, label: 'bis 500 Zuschauende', value: 180 },
            { multiplier: 1.5, label: '500-1.500 Zuschauende', value: 270 },
            { multiplier: 2, label: 'über 1.500 Zuschauende', value: 360 }
          ]
        },
        solist_vorstellung: {
          name: 'Solist/ Solistin; Einzelkünstler/ Einzelkünstlerin - Vorstellung',
          baseHonor: 300,
          duration: 'abendfüllendes Konzert',
          criteria: [
            { multiplier: 1, label: 'bis 500 Zuschauende', value: 300 },
            { multiplier: 1.5, label: '500-1.500 Zuschauende', value: 450 },
            { multiplier: 2, label: 'über 1.500 Zuschauende', value: 600 }
          ]
        },
        solist_probe: {
          name: 'Solist/ Solistin; Einzelkünstler/ Einzelkünstlerin - dazugehörige Durchlaufproben',
          baseHonor: 250,
          duration: 'ca. 6 Stunden',
          criteria: [
            { multiplier: 1, label: 'bis 500 Zuschauende', value: 250 },
            { multiplier: 1.5, label: '500-1.500 Zuschauende', value: 375 },
            { multiplier: 2, label: 'über 1.500 Zuschauende', value: 500 }
          ]
        },
        dirigent_vorstellung: {
          name: 'Dirigent/ Dirigentin - Vorstellung',
          baseHonor: 300,
          duration: 'abendfüllendes Konzert',
          criteria: [
            { multiplier: 1, label: 'bis 500 Zuschauende', value: 300 },
            { multiplier: 1.5, label: '500-1.500 Zuschauende', value: 450 },
            { multiplier: 2, label: 'über 1.500 Zuschauende', value: 600 }
          ]
        },
        dirigent_probe: {
          name: 'Dirigent/ Dirigentin - dazugehörige Durchlaufproben',
          baseHonor: 250,
          duration: 'ca. 6 Stunden',
          criteria: [
            { multiplier: 1, label: 'bis 500 Zuschauende', value: 250 },
            { multiplier: 1.5, label: '500-1.500 Zuschauende', value: 375 },
            { multiplier: 2, label: 'über 1.500 Zuschauende', value: 500 }
          ]
        },
        chorleiter_vorstellung: {
          name: 'Chorleiter/ Chorleiterin, Musik. Leiter/ Leiterin - Vorstellung',
          baseHonor: 270,
          duration: 'abendfüllendes Konzert',
          criteria: [
            { multiplier: 1, label: 'bis 500 Zuschauende', value: 270 },
            { multiplier: 1.5, label: '500-1.500 Zuschauende', value: 405 },
            { multiplier: 2, label: 'über 1.500 Zuschauende', value: 540 }
          ]
        },
        chorleiter_probe: {
          name: 'Chorleiter/ Chorleiterin, Musik. Leiter/ Leiterin - dazugehörige Durchlaufproben',
          baseHonor: 200,
          duration: 'ca. 6 Stunden',
          criteria: [
            { multiplier: 1, label: 'bis 500 Zuschauende', value: 200 },
            { multiplier: 1.5, label: '500-1.500 Zuschauende', value: 300 },
            { multiplier: 2, label: 'über 1.500 Zuschauende', value: 400 }
          ]
        }
      }
    },
    darstellende_kunst: {
      name: 'Darstellende Kunst',
      activities: {
        taenzer_vorstellung: {
          name: 'Tänzer/ Tänzerin (Ballett, Tanztheater, Musical, Show, Bühne) - Vorstellung',
          baseHonor: 250,
          duration: 'abendfüllende Vorstellung',
          criteria: [
            { multiplier: 1, label: 'bis 100 Zuschauende', value: 250 },
            { multiplier: 1.5, label: 'mehr als 100 Zuschauende', value: 375 }
          ]
        },
        taenzer_probe: {
          name: 'Tänzer/ Tänzerin (Ballett, Tanztheater, Musical, Show, Bühne) - dazugehörige Durchlaufproben',
          baseHonor: 180,
          duration: 'ca. 6 Stunden',
          criteria: [
            { multiplier: 1, label: 'bis 100 Zuschauende', value: 180 },
            { multiplier: 1.5, label: 'mehr als 100 Zuschauende', value: 270 }
          ]
        },
        schauspieler_vorstellung: {
          name: 'Schauspieler/ Schauspielerin (Bühne), Performer/ Performerin - Vorstellung',
          baseHonor: 250,
          duration: 'abendfüllende Vorstellung',
          criteria: [
            { multiplier: 1, label: 'bis 100 Zuschauende', value: 250 },
            { multiplier: 1.5, label: 'mehr als 100 Zuschauende', value: 375 }
          ]
        },
        schauspieler_probe: {
          name: 'Schauspieler/ Schauspielerin (Bühne), Performer/ Performerin - dazugehörige Durchlaufproben',
          baseHonor: 180,
          duration: 'ca. 6 Stunden',
          criteria: [
            { multiplier: 1, label: 'bis 100 Zuschauende', value: 180 },
            { multiplier: 1.5, label: 'mehr als 100 Zuschauende', value: 270 }
          ]
        },
        puppenspieler_vorstellung: {
          name: 'Puppen-, Marionetten-, Figurenspieler/ -spielerin - Vorstellung',
          baseHonor: 250,
          duration: 'abendfüllende Vorstellung',
          criteria: [
            { multiplier: 1, label: 'bis 100 Zuschauende', value: 250 },
            { multiplier: 1.5, label: 'mehr als 100 Zuschauende', value: 375 }
          ]
        },
        puppenspieler_probe: {
          name: 'Puppen-, Marionetten-, Figurenspieler/ -spielerin - dazugehörige Durchlaufproben',
          baseHonor: 180,
          duration: 'ca. 6 Stunden',
          criteria: [
            { multiplier: 1, label: 'bis 100 Zuschauende', value: 180 },
            { multiplier: 1.5, label: 'mehr als 100 Zuschauende', value: 270 }
          ]
        },
        kabarett_vorstellung: {
          name: 'Kabarettist/ Kabarettistin, Comedian, Artist/ Artistin, Clown/ Clownin, Zauberer/ Zauberin - Vorstellung',
          baseHonor: 250,
          duration: 'abendfüllende Vorstellung',
          criteria: [
            { multiplier: 1, label: 'bis 100 Zuschauende', value: 250 },
            { multiplier: 1.5, label: 'mehr als 100 Zuschauende', value: 375 }
          ]
        },
        kabarett_probe: {
          name: 'Kabarettist/ Kabarettistin, Comedian, Artist/ Artistin, Clown/ Clownin, Zauberer/ Zauberin - dazugehörige Durchlaufproben',
          baseHonor: 180,
          duration: 'ca. 6 Stunden',
          criteria: [
            { multiplier: 1, label: 'bis 100 Zuschauende', value: 180 },
            { multiplier: 1.5, label: 'mehr als 100 Zuschauende', value: 270 }
          ]
        },
        kindertheater_vorstellung: {
          name: 'Kinder- und Jugendtheater - Vorstellung',
          baseHonor: 250,
          duration: 'abendfüllende Vorstellung',
          criteria: [
            { multiplier: 1, label: 'bis 200 Zuschauende', value: 250 },
            { multiplier: 1.5, label: 'mehr als 200 Zuschauende', value: 375 }
          ]
        },
        kindertheater_probe: {
          name: 'Kinder- und Jugendtheater - dazugehörige Durchlaufproben',
          baseHonor: 180,
          duration: 'ca. 6 Stunden',
          criteria: [
            { multiplier: 1, label: 'bis 200 Zuschauende', value: 180 },
            { multiplier: 1.5, label: 'mehr als 200 Zuschauende', value: 270 }
          ]
        },
        sprecher_theater_einzel: {
          name: 'Sprecher/ Sprecherin (Theater) - Einzel',
          baseHonor: 250,
          duration: 'ca. 2 Stunden',
          criteria: [
            { multiplier: 1, label: 'bis 100 Zuschauende', value: 250 },
            { multiplier: 1.5, label: 'mehr als 100 Zuschauende', value: 375 }
          ]
        },
        sprecher_theater_gruppe: {
          name: 'Sprecher/ Sprecherin (Theater) - Gruppen',
          baseHonor: 250,
          duration: 'ca. 2 Stunden',
          groupRules: '3-9 Künstlerinnen/Künstler: 1/3 des Honorars pro Person, Ab 10 Künstlerinnen/Künstler: 1/6 des Honorars pro Person',
          criteria: [
            { multiplier: 1, label: 'bis 100 Zuschauende', value: 250 },
            { multiplier: 1.5, label: 'mehr als 100 Zuschauende', value: 375 }
          ]
        },
        regisseur_vorstellung: {
          name: 'Regisseur/ Regisseurin, Choreograph/ Choreographin, Ballett-/ Tanzmeister/ meisterin - Vorstellungsbegleitung',
          baseHonor: 300,
          duration: 'abendfüllende Vorstellung',
          criteria: [
            { multiplier: 1, label: 'bis 100 Zuschauende', value: 300 },
            { multiplier: 1.5, label: 'mehr als 100 Zuschauende', value: 450 }
          ]
        },
        regisseur_probe: {
          name: 'Regisseur/ Regisseurin, Choreograph/ Choreographin, Ballett-/ Tanzmeister/ meisterin - Durchlaufproben',
          baseHonor: 250,
          duration: 'ca. 6 Stunden',
          criteria: [
            { multiplier: 1, label: 'bis 100 Zuschauende', value: 250 },
            { multiplier: 1.5, label: 'mehr als 100 Zuschauende', value: 375 }
          ]
        }
      }
    },
    kulturelle_bildung: {
      name: 'Kulturelle Bildung/ Kulturvermittlung',
      activities: {
        kulturvermittlung: {
          name: 'Kulturvermittlung (alle Sparten)',
          baseHonor: 55,
          rateType: 'Stundensatz',
          duration: '60 Minuten',
          note: 'Vor- und Nachbereitung sind vom Honorar umfasst. Kann angewendet werden auf: Literatur, Bildende Kunst, Filmkultur, Musik, Darstellende Kunst',
          criteria: [
            { multiplier: 1, label: 'Standardsatz', value: 55 }
          ]
        },
        fuehrung: {
          name: 'Führung (spartenübergreifend)',
          baseHonor: 55,
          rateType: 'Stundensatz',
          duration: '60 Minuten',
          note: 'Vor- und Nachbereitung sind vom Honorar umfasst.',
          criteria: [
            { multiplier: 1, label: 'Standardsatz', value: 55 }
          ]
        }
      }
    }
  },

  groupRules: {
    standard: 'Für 1-2 Künstlerinnen/Künstler: volles Honorar pro Person. Für 3-9 Künstlerinnen/Künstler: 1/3 des Honorars pro Person. Für 10+ Künstlerinnen/Künstler: 1/6 des Honorars pro Person.',
    largeEnsemble: 'Ab 5 Musikerinnen/Musikern: das Honorar pro Künstlerin/Künstler kann auf das Basishonorar beschränkt werden.'
  },

  notes: {
    source: 'Anlage zu Nummer 2.2, Stand: 23. Dezember 2025',
    region: 'Nordrhein-Westfalen (NRW), Deutschland',
    minimumFees: 'Bei den angegebenen Werten handelt es sich um Mindesthonorare (Untergrenze), keine Begrenzung nach oben.',
    duration: 'Orientierungen: ca. 90 Min. für Lesungen/Vorträge, ca. 4 Wochen für Ausstellungen, ca. 6 Stunden für Proben, abendfüllend für Aufführungen.',
    travelCosts: 'Zusätzliche Reisekosten nach Landesreisekostengesetz.'
  }
};

// Export for Node.js/CommonJS environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = honorMatrixData;
}
