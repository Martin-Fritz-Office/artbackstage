/**
 * Honor Matrix Data from "Basishonorare mit Stufen" (December 2025)
 * German artist fee reference matrix for NRW (North Rhine-Westphalia)
 */

const honorMatrixData = {
  disciplines: {
    wort: {
      name: 'Wort (Literature)',
      activities: {
        autor_lesung_einzel: {
          name: 'Author - Reading (Individual)',
          baseHonor: 250,
          criteria: [
            { multiplier: 1, label: '1-50 spectators', value: 250 },
            { multiplier: 1.5, label: '50-100 spectators', value: 375 },
            { multiplier: 2, label: '100+ spectators', value: 500 }
          ]
        },
        autor_lesung_gruppe: {
          name: 'Author - Reading (Group)',
          baseHonor: 250,
          groupRules: '3-9 artists: 1/3 per person, 10+ artists: 1/6 per person',
          criteria: [
            { multiplier: 1, label: '1-50 spectators', value: 250 },
            { multiplier: 1.5, label: '50-100 spectators', value: 375 },
            { multiplier: 2, label: '100+ spectators', value: 500 }
          ]
        },
        sprecher_einzel: {
          name: 'Speaker (Individual)',
          baseHonor: 250,
          criteria: [
            { multiplier: 1, label: '1-50 spectators', value: 250 },
            { multiplier: 1.5, label: '50-100 spectators', value: 375 },
            { multiplier: 2, label: '100+ spectators', value: 500 }
          ]
        },
        sprecher_gruppe: {
          name: 'Speaker (Group)',
          baseHonor: 250,
          groupRules: '3-9 artists: 1/3 per person, 10+ artists: 1/6 per person',
          criteria: [
            { multiplier: 1, label: '1-50 spectators', value: 250 },
            { multiplier: 1.5, label: '50-100 spectators', value: 375 },
            { multiplier: 2, label: '100+ spectators', value: 500 }
          ]
        },
        uebersetzer_einzel: {
          name: 'Literary Translator (Individual)',
          baseHonor: 250,
          criteria: [
            { multiplier: 1, label: '1-50 spectators', value: 250 },
            { multiplier: 1.5, label: '50-100 spectators', value: 375 },
            { multiplier: 2, label: '100+ spectators', value: 500 }
          ]
        },
        uebersetzer_gruppe: {
          name: 'Literary Translator (Group)',
          baseHonor: 250,
          groupRules: '3-9 artists: 1/3 per person, 10+ artists: 1/6 per person',
          criteria: [
            { multiplier: 1, label: '1-50 spectators', value: 250 },
            { multiplier: 1.5, label: '50-100 spectators', value: 375 },
            { multiplier: 2, label: '100+ spectators', value: 500 }
          ]
        },
        moderation_einzel: {
          name: 'Moderation (Individual)',
          baseHonor: 250,
          criteria: [
            { multiplier: 1, label: '1-50 spectators', value: 250 },
            { multiplier: 1.5, label: '50-100 spectators', value: 375 },
            { multiplier: 2, label: '100+ spectators', value: 500 }
          ]
        },
        moderation_gruppe: {
          name: 'Moderation (Group)',
          baseHonor: 250,
          groupRules: '3-9 artists: 1/3 per person, 10+ artists: 1/6 per person',
          criteria: [
            { multiplier: 1, label: '1-50 spectators', value: 250 },
            { multiplier: 1.5, label: '50-100 spectators', value: 375 },
            { multiplier: 2, label: '100+ spectators', value: 500 }
          ]
        }
      }
    },
    bildende_kunst: {
      name: 'Bildende Kunst (Visual Arts)',
      activities: {
        ausstellung_einzel: {
          name: 'Exhibition (Individual)',
          baseHonor: 600,
          duration: '~4 weeks (only first 8 weeks paid)',
          criteria: [
            { multiplier: 1, label: 'Socio-cultural, third places, educational institutions', value: 600 },
            { multiplier: 1.5, label: 'Private/public museums & art associations <100k visitors/year, galleries', value: 900 },
            { multiplier: 2, label: 'Private/public museums & art associations >100k visitors/year', value: 1200 }
          ]
        },
        ausstellung_gruppe: {
          name: 'Exhibition (Group)',
          baseHonor: 600,
          duration: '~4 weeks (only first 8 weeks paid)',
          groupRules: '3-9 artists: 1/3 per person, 10+ artists: 1/6 per person',
          criteria: [
            { multiplier: 1, label: 'Socio-cultural, third places, educational institutions', value: 600 },
            { multiplier: 1.5, label: 'Private/public museums & art associations <100k visitors/year, galleries', value: 900 },
            { multiplier: 2, label: 'Private/public museums & art associations >100k visitors/year', value: 1200 }
          ]
        },
        performance_einzel: {
          name: 'Performance (Individual)',
          baseHonor: 250,
          criteria: [
            { multiplier: 1, label: 'Socio-cultural, third places, educational institutions', value: 250 },
            { multiplier: 1.5, label: 'Private/public museums & art associations <100k visitors/year, galleries', value: 375 },
            { multiplier: 2, label: 'Private/public museums & art associations >100k visitors/year', value: 500 }
          ]
        },
        performance_gruppe: {
          name: 'Performance (Group)',
          baseHonor: 250,
          groupRules: '3-9 artists: 1/3 per person, 10+ artists: 1/6 per person',
          criteria: [
            { multiplier: 1, label: 'Socio-cultural, third places, educational institutions', value: 250 },
            { multiplier: 1.5, label: 'Private/public museums & art associations <100k visitors/year, galleries', value: 375 },
            { multiplier: 2, label: 'Private/public museums & art associations >100k visitors/year', value: 500 }
          ]
        },
        film_screening_einzel: {
          name: 'Film/Video Screening (Individual)',
          baseHonor: 250,
          criteria: [
            { multiplier: 1, label: 'Socio-cultural, third places, educational institutions', value: 250 },
            { multiplier: 1.5, label: 'Private/public museums & art associations <100k visitors/year, galleries', value: 375 },
            { multiplier: 2, label: 'Private/public museums & art associations >100k visitors/year', value: 500 }
          ]
        },
        film_screening_gruppe: {
          name: 'Film/Video Screening (Group)',
          baseHonor: 250,
          groupRules: '3-9 artists: 1/3 per person, 10+ artists: 1/6 per person',
          criteria: [
            { multiplier: 1, label: 'Socio-cultural, third places, educational institutions', value: 250 },
            { multiplier: 1.5, label: 'Private/public museums & art associations <100k visitors/year, galleries', value: 375 },
            { multiplier: 2, label: 'Private/public museums & art associations >100k visitors/year', value: 500 }
          ]
        }
      }
    },
    musik: {
      name: 'Musik (Music)',
      activities: {
        popmusik_vorstellung: {
          name: 'Pop/Rock/Jazz Performance',
          baseHonor: 250,
          duration: 'full evening concert',
          criteria: [
            { multiplier: 1, label: 'up to 500 spectators', value: 250 },
            { multiplier: 1.5, label: '500-1,500 spectators', value: 375 },
            { multiplier: 2, label: '1,500+ spectators', value: 500 }
          ]
        },
        popmusik_probe: {
          name: 'Pop/Rock/Jazz Rehearsal',
          baseHonor: 180,
          duration: '~6 hours',
          criteria: [
            { multiplier: 1, label: 'up to 500 spectators', value: 180 },
            { multiplier: 1.5, label: '500-1,500 spectators', value: 270 },
            { multiplier: 2, label: '1,500+ spectators', value: 360 }
          ]
        },
        orchester_vorstellung: {
          name: 'Classical/Orchestra Performance',
          baseHonor: 250,
          duration: 'full evening concert',
          criteria: [
            { multiplier: 1, label: 'up to 500 spectators', value: 250 },
            { multiplier: 1.5, label: '500-1,500 spectators', value: 375 },
            { multiplier: 2, label: '1,500+ spectators', value: 500 }
          ]
        },
        orchester_probe: {
          name: 'Classical/Orchestra Rehearsal',
          baseHonor: 180,
          duration: '~6 hours',
          criteria: [
            { multiplier: 1, label: 'up to 500 spectators', value: 180 },
            { multiplier: 1.5, label: '500-1,500 spectators', value: 270 },
            { multiplier: 2, label: '1,500+ spectators', value: 360 }
          ]
        },
        solist_vorstellung: {
          name: 'Soloist Performance',
          baseHonor: 300,
          duration: 'full evening concert',
          criteria: [
            { multiplier: 1, label: 'up to 500 spectators', value: 300 },
            { multiplier: 1.5, label: '500-1,500 spectators', value: 450 },
            { multiplier: 2, label: '1,500+ spectators', value: 600 }
          ]
        },
        solist_probe: {
          name: 'Soloist Rehearsal',
          baseHonor: 250,
          duration: '~6 hours',
          criteria: [
            { multiplier: 1, label: 'up to 500 spectators', value: 250 },
            { multiplier: 1.5, label: '500-1,500 spectators', value: 375 },
            { multiplier: 2, label: '1,500+ spectators', value: 500 }
          ]
        },
        dirigent_vorstellung: {
          name: 'Conductor Performance',
          baseHonor: 300,
          duration: 'full evening concert',
          criteria: [
            { multiplier: 1, label: 'up to 500 spectators', value: 300 },
            { multiplier: 1.5, label: '500-1,500 spectators', value: 450 },
            { multiplier: 2, label: '1,500+ spectators', value: 600 }
          ]
        },
        dirigent_probe: {
          name: 'Conductor Rehearsal',
          baseHonor: 250,
          duration: '~6 hours',
          criteria: [
            { multiplier: 1, label: 'up to 500 spectators', value: 250 },
            { multiplier: 1.5, label: '500-1,500 spectators', value: 375 },
            { multiplier: 2, label: '1,500+ spectators', value: 500 }
          ]
        },
        chorleiter_vorstellung: {
          name: 'Choir Director Performance',
          baseHonor: 270,
          duration: 'full evening concert',
          criteria: [
            { multiplier: 1, label: 'up to 500 spectators', value: 270 },
            { multiplier: 1.5, label: '500-1,500 spectators', value: 405 },
            { multiplier: 2, label: '1,500+ spectators', value: 540 }
          ]
        },
        chorleiter_probe: {
          name: 'Choir Director Rehearsal',
          baseHonor: 200,
          duration: '~6 hours',
          criteria: [
            { multiplier: 1, label: 'up to 500 spectators', value: 200 },
            { multiplier: 1.5, label: '500-1,500 spectators', value: 300 },
            { multiplier: 2, label: '1,500+ spectators', value: 400 }
          ]
        }
      }
    },
    darstellende_kunst: {
      name: 'Darstellende Kunst (Performing Arts)',
      activities: {
        taenzer_vorstellung: {
          name: 'Dancer Performance',
          baseHonor: 250,
          duration: 'full evening show',
          criteria: [
            { multiplier: 1, label: 'up to 100 spectators', value: 250 },
            { multiplier: 1.5, label: '100+ spectators', value: 375 }
          ]
        },
        taenzer_probe: {
          name: 'Dancer Rehearsal',
          baseHonor: 180,
          duration: '~6 hours',
          criteria: [
            { multiplier: 1, label: 'up to 100 spectators', value: 180 },
            { multiplier: 1.5, label: '100+ spectators', value: 270 }
          ]
        },
        schauspieler_vorstellung: {
          name: 'Actor Performance',
          baseHonor: 250,
          duration: 'full evening show',
          criteria: [
            { multiplier: 1, label: 'up to 100 spectators', value: 250 },
            { multiplier: 1.5, label: '100+ spectators', value: 375 }
          ]
        },
        schauspieler_probe: {
          name: 'Actor Rehearsal',
          baseHonor: 180,
          duration: '~6 hours',
          criteria: [
            { multiplier: 1, label: 'up to 100 spectators', value: 180 },
            { multiplier: 1.5, label: '100+ spectators', value: 270 }
          ]
        },
        puppenspieler_vorstellung: {
          name: 'Puppet/Marionette Player Performance',
          baseHonor: 250,
          duration: 'full evening show',
          criteria: [
            { multiplier: 1, label: 'up to 100 spectators', value: 250 },
            { multiplier: 1.5, label: '100+ spectators', value: 375 }
          ]
        },
        puppenspieler_probe: {
          name: 'Puppet/Marionette Player Rehearsal',
          baseHonor: 180,
          duration: '~6 hours',
          criteria: [
            { multiplier: 1, label: 'up to 100 spectators', value: 180 },
            { multiplier: 1.5, label: '100+ spectators', value: 270 }
          ]
        },
        kabarett_vorstellung: {
          name: 'Cabaret/Comedy Performance',
          baseHonor: 250,
          duration: 'full evening show',
          criteria: [
            { multiplier: 1, label: 'up to 100 spectators', value: 250 },
            { multiplier: 1.5, label: '100+ spectators', value: 375 }
          ]
        },
        kabarett_probe: {
          name: 'Cabaret/Comedy Rehearsal',
          baseHonor: 180,
          duration: '~6 hours',
          criteria: [
            { multiplier: 1, label: 'up to 100 spectators', value: 180 },
            { multiplier: 1.5, label: '100+ spectators', value: 270 }
          ]
        },
        kindertheater_vorstellung: {
          name: 'Children\'s Theater Performance',
          baseHonor: 250,
          duration: 'full evening show',
          criteria: [
            { multiplier: 1, label: 'up to 200 spectators', value: 250 },
            { multiplier: 1.5, label: '200+ spectators', value: 375 }
          ]
        },
        kindertheater_probe: {
          name: 'Children\'s Theater Rehearsal',
          baseHonor: 180,
          duration: '~6 hours',
          criteria: [
            { multiplier: 1, label: 'up to 200 spectators', value: 180 },
            { multiplier: 1.5, label: '200+ spectators', value: 270 }
          ]
        },
        sprecher_theater_einzel: {
          name: 'Theater Speaker (Individual)',
          baseHonor: 250,
          duration: '~2 hours',
          criteria: [
            { multiplier: 1, label: 'up to 100 spectators', value: 250 },
            { multiplier: 1.5, label: '100+ spectators', value: 375 }
          ]
        },
        sprecher_theater_gruppe: {
          name: 'Theater Speaker (Group)',
          baseHonor: 250,
          duration: '~2 hours',
          groupRules: '3-9 artists: 1/3 per person, 10+ artists: 1/6 per person',
          criteria: [
            { multiplier: 1, label: 'up to 100 spectators', value: 250 },
            { multiplier: 1.5, label: '100+ spectators', value: 375 }
          ]
        },
        regisseur_vorstellung: {
          name: 'Director/Choreographer Performance',
          baseHonor: 300,
          duration: 'full evening show',
          criteria: [
            { multiplier: 1, label: 'up to 100 spectators', value: 300 },
            { multiplier: 1.5, label: '100+ spectators', value: 450 }
          ]
        },
        regisseur_probe: {
          name: 'Director/Choreographer Rehearsal',
          baseHonor: 250,
          duration: '~6 hours',
          criteria: [
            { multiplier: 1, label: 'up to 100 spectators', value: 250 },
            { multiplier: 1.5, label: '100+ spectators', value: 375 }
          ]
        }
      }
    },
    kulturelle_bildung: {
      name: 'Kulturelle Bildung/Kulturvermittlung (Cultural Education)',
      activities: {
        kulturvermittlung: {
          name: 'Cultural Mediation/Workshops (All Disciplines)',
          baseHonor: 55,
          rateType: 'hourly',
          duration: '60 minutes',
          note: 'Includes preparation and follow-up. Can be applied to: Literature, Visual Arts, Film, Music, Performing Arts',
          criteria: [
            { multiplier: 1, label: 'Standard rate', value: 55 }
          ]
        },
        fuehrung: {
          name: 'Guided Tour (All Disciplines)',
          baseHonor: 55,
          rateType: 'hourly',
          duration: '60 minutes',
          note: 'Includes preparation and follow-up.',
          criteria: [
            { multiplier: 1, label: 'Standard rate', value: 55 }
          ]
        }
      }
    }
  },

  groupRules: {
    standard: 'For 1-2 artists: full fee per person. For 3-9 artists: 1/3 fee per person. For 10+ artists: 1/6 fee per person.',
    largeEnsemble: 'From 5 musicians: fee can be limited to base honorar per person.'
  },

  notes: {
    source: 'Anlage zu Nummer 2.2, Stand: 23. Dezember 2025',
    region: 'North Rhine-Westphalia (NRW), Germany',
    minimumFees: 'The stated values are minimum fees (lower limit), not upper limits.',
    duration: 'Orientations: ~90 min for readings/talks, ~4 weeks for exhibitions, ~6 hours for rehearsals, full evening for performances.',
    travelCosts: 'Additional travel costs according to state travel cost regulations.'
  }
};

// Export for Node.js/CommonJS environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = honorMatrixData;
}
