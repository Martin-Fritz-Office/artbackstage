/**
 * Honor Matrix Interactive Calculator
 * Based on German artist fee guidelines (Basishonorare mit Stufen)
 */

class HonorMatrixCalculator {
  constructor() {
    this.data = honorMatrixData;
    this.selectedDiscipline = null;
    this.selectedActivity = null;
    this.selectedCriteria = null;
    this.numArtists = 1;
    this.isGroup = false;
    this.currentLanguage = 'de';

    this.labels = {
      de: {
        discipline: 'Kunstsparte',
        activity: 'Konkrete Tätigkeit',
        criteria: 'Kriterium',
        numArtists: 'Anzahl der Künstler',
        groupType: 'Künstlertyp',
        single: 'Einzelkünstler',
        group: 'Gruppe',
        baseFee: 'Basishonorar',
        multiplier: 'Multiplikator',
        totalFee: 'Honorar gesamt',
        travelCosts: 'Reisekosten',
        notes: 'Hinweise',
        calculate: 'Berechnen',
        reset: 'Zurücksetzen',
        selectOption: '--- Wählen Sie ---'
      },
      en: {
        discipline: 'Discipline',
        activity: 'Activity',
        criteria: 'Criteria',
        numArtists: 'Number of Artists',
        groupType: 'Artist Type',
        single: 'Individual',
        group: 'Group',
        baseFee: 'Base Fee',
        multiplier: 'Multiplier',
        totalFee: 'Total Fee',
        travelCosts: 'Travel Costs',
        notes: 'Notes',
        calculate: 'Calculate',
        reset: 'Reset',
        selectOption: '--- Select ---'
      }
    };
  }

  setLanguage(lang) {
    this.currentLanguage = lang === 'en' ? 'en' : 'de';
  }

  getLabel(key) {
    return this.labels[this.currentLanguage][key] || key;
  }

  getDisciplines() {
    return Object.entries(this.data.disciplines).map(([key, value]) => ({
      key,
      name: value.name
    }));
  }

  getActivities(disciplineKey) {
    if (!this.data.disciplines[disciplineKey]) return [];
    return Object.entries(this.data.disciplines[disciplineKey].activities).map(([key, value]) => ({
      key,
      name: value.name,
      baseHonor: value.baseHonor,
      isGroup: key.includes('_gruppe'),
      groupRules: value.groupRules,
      rateType: value.rateType
    }));
  }

  getCriteria(disciplineKey, activityKey) {
    if (!this.data.disciplines[disciplineKey]?.activities[activityKey]) return [];
    const activity = this.data.disciplines[disciplineKey].activities[activityKey];
    return activity.criteria;
  }

  calculate(disciplineKey, activityKey, criteriaValue, numArtists = 1) {
    const activity = this.data.disciplines[disciplineKey]?.activities[activityKey];
    if (!activity) {
      console.error('Activity not found:', disciplineKey, activityKey);
      return null;
    }

    const baseFee = activity.baseHonor;

    // Find criterion - handle both number and string comparisons
    let criterion = activity.criteria.find(c => c.value === criteriaValue);

    // If not found with strict equality, try with loose equality or string comparison
    if (!criterion) {
      criterion = activity.criteria.find(c => c.value == criteriaValue || String(c.value) === String(criteriaValue));
    }

    if (!criterion) {
      console.error('Criterion not found. Criteria value:', criteriaValue, 'Available criteria:', activity.criteria.map(c => ({ value: c.value, type: typeof c.value })));
      return null;
    }

    let totalFee = baseFee * criterion.multiplier;
    let multiplier = criterion.multiplier;
    let perArtistFee = totalFee;
    let groupDiscount = 1;

    // Apply group rules if applicable
    if (activityKey.includes('_gruppe') && numArtists > 1) {
      if (numArtists <= 2) {
        groupDiscount = 1;
      } else if (numArtists <= 9) {
        groupDiscount = 1/3;
      } else {
        groupDiscount = 1/6;
      }
      perArtistFee = totalFee * groupDiscount;
      totalFee = perArtistFee * numArtists;
    }

    return {
      baseFee,
      multiplier,
      criterionLabel: criterion.label,
      totalFee: Math.round(totalFee),
      perArtistFee: Math.round(perArtistFee),
      numArtists,
      isGroup: activityKey.includes('_gruppe'),
      rateType: activity.rateType || 'performance',
      notes: this.getActivityNotes(disciplineKey, activityKey, activity),
      groupDiscount: groupDiscount !== 1 ? `1/${Math.round(1/groupDiscount)}` : null
    };
  }

  getActivityNotes(disciplineKey, activityKey, activity) {
    const notes = [];

    if (activity.duration) {
      notes.push(`Duration: ${activity.duration}`);
    }

    if (activity.groupRules) {
      notes.push(`Group rules: ${activity.groupRules}`);
    }

    if (activity.note) {
      notes.push(activity.note);
    }

    if (activityKey.includes('ausstellung')) {
      notes.push('Only the first 8 weeks are paid.');
    }

    notes.push(`Travel costs: According to ${this.currentLanguage === 'de' ? 'Landesreisekostengesetz' : 'state travel cost regulations'}`);

    return notes;
  }

  reset() {
    this.selectedDiscipline = null;
    this.selectedActivity = null;
    this.selectedCriteria = null;
    this.numArtists = 1;
    this.isGroup = false;
  }
}

// Initialize calculator
let calculator = null;

document.addEventListener('DOMContentLoaded', function() {
  console.log('[HonorMatrix] DOMContentLoaded event fired');
  calculator = new HonorMatrixCalculator();
  console.log('[HonorMatrix] Calculator created');

  // Detect language from page or default to German
  const htmlLang = document.documentElement.lang || 'de';
  calculator.setLanguage(htmlLang);
  console.log('[HonorMatrix] Language set to:', htmlLang);

  initializeForm();
  console.log('[HonorMatrix] Form initialized');
});

function initializeForm() {
  console.log('[HonorMatrix] initializeForm() called');
  const disciplineSelect = document.getElementById('discipline');
  const activitySelect = document.getElementById('activity');
  const criteriaSelect = document.getElementById('criteria');

  if (!disciplineSelect) {
    console.error('[HonorMatrix] ERROR: discipline select element not found!');
    return;
  }

  console.log('[HonorMatrix] Found all form elements');

  // Populate disciplines
  const disciplines = calculator.getDisciplines();
  console.log('[HonorMatrix] Loaded', disciplines.length, 'disciplines');
  disciplines.forEach(disc => {
    const option = document.createElement('option');
    option.value = disc.key;
    option.textContent = disc.name;
    disciplineSelect.appendChild(option);
  });

  // Handle discipline change
  disciplineSelect.addEventListener('change', function(e) {
    console.log('[HonorMatrix] Discipline changed:', e.target.value);
    activitySelect.innerHTML = '<option value="">' + calculator.getLabel('selectOption') + '</option>';
    criteriaSelect.innerHTML = '<option value="">' + calculator.getLabel('selectOption') + '</option>';
    document.getElementById('numArtists').value = '1';

    if (!e.target.value) return;

    const activities = calculator.getActivities(e.target.value);
    activities.forEach(act => {
      const option = document.createElement('option');
      option.value = act.key;
      option.textContent = act.name;
      option.dataset.baseHonor = act.baseHonor;
      option.dataset.isGroup = act.isGroup;
      activitySelect.appendChild(option);
    });
  });

  // Handle activity change
  activitySelect.addEventListener('change', function(e) {
    console.log('[HonorMatrix] Activity changed:', e.target.value);
    criteriaSelect.innerHTML = '<option value="">' + calculator.getLabel('selectOption') + '</option>';
    document.getElementById('numArtists').value = '1';

    if (!e.target.value || !disciplineSelect.value) {
      console.log('[HonorMatrix] Activity change: missing values, returning');
      return;
    }

    const criteria = calculator.getCriteria(disciplineSelect.value, e.target.value);
    criteria.forEach(crit => {
      const option = document.createElement('option');
      option.value = crit.value;
      option.textContent = crit.label;
      option.dataset.value = crit.value;
      criteriaSelect.appendChild(option);
    });

    // Update visibility of numArtists based on group
    const isGroup = e.target.options[e.target.selectedIndex].dataset.isGroup === 'true';
    const numArtistsGroup = document.getElementById('numArtistsGroup');
    if (numArtistsGroup) {
      numArtistsGroup.style.display = isGroup ? 'block' : 'none';
    }
  });
}

function calculateFee() {
  console.log('[HonorMatrix] calculateFee() called');
  const disciplineSelect = document.getElementById('discipline');
  const activitySelect = document.getElementById('activity');
  const criteriaSelect = document.getElementById('criteria');
  const numArtistsInput = document.getElementById('numArtists');
  const resultsDiv = document.getElementById('results');

  console.log('[HonorMatrix] Elements found:', {
    discipline: !!disciplineSelect,
    activity: !!activitySelect,
    criteria: !!criteriaSelect,
    numArtists: !!numArtistsInput,
    results: !!resultsDiv
  });

  // Validation
  if (!disciplineSelect || !activitySelect || !criteriaSelect || !resultsDiv) {
    console.error('[HonorMatrix] Required DOM elements not found');
    alert(calculator.currentLanguage === 'de' ? 'Fehler: Formularelemente nicht gefunden.' : 'Error: Form elements not found.');
    return;
  }

  if (!disciplineSelect.value || !activitySelect.value || !criteriaSelect.value) {
    console.warn('[HonorMatrix] Missing form values');
    alert(calculator.currentLanguage === 'de' ? 'Bitte wählen Sie alle erforderlichen Optionen.' : 'Please select all required options.');
    return;
  }

  console.log('[HonorMatrix] Form values:', {
    discipline: disciplineSelect.value,
    activity: activitySelect.value,
    criteria: criteriaSelect.value
  });

  const numArtists = parseInt(numArtistsInput.value) || 1;

  // Parse criteria value - ensure it's a number
  const criteriaValueStr = criteriaSelect.value;
  const criteriaValue = parseInt(criteriaValueStr);

  console.log('[HonorMatrix] Parsed criteria:', {
    original: criteriaValueStr,
    parsed: criteriaValue,
    isNaN: isNaN(criteriaValue)
  });

  if (isNaN(criteriaValue)) {
    console.error('[HonorMatrix] Invalid criteria value:', criteriaValueStr);
    alert(calculator.currentLanguage === 'de' ? 'Ungültige Kriteriumauswahl.' : 'Invalid criteria selection.');
    return;
  }

  console.log('[HonorMatrix] Calling calculator.calculate with:', {
    discipline: disciplineSelect.value,
    activity: activitySelect.value,
    criteriaValue: criteriaValue,
    numArtists: numArtists
  });

  const result = calculator.calculate(
    disciplineSelect.value,
    activitySelect.value,
    criteriaValue,
    numArtists
  );

  console.log('[HonorMatrix] Calculation result:', result);

  if (!result) {
    console.error('Calculation returned null for:', {
      discipline: disciplineSelect.value,
      activity: activitySelect.value,
      criteria: criteriaValue
    });
    alert(calculator.currentLanguage === 'de' ? 'Berechnung fehlgeschlagen.' : 'Calculation failed.');
    return;
  }

  // Display results
  const selectedActivityText = activitySelect.options[activitySelect.selectedIndex];
  if (!selectedActivityText) {
    console.error('Unable to get selected activity text');
    alert(calculator.currentLanguage === 'de' ? 'Fehler beim Abrufen der Aktivität.' : 'Error retrieving activity.');
    return;
  }

  displayResults(result, resultsDiv, selectedActivityText.text);
}

function displayResults(result, resultsDiv, activityName) {
  console.log('[HonorMatrix] displayResults() called with:', {
    result: result,
    resultsDivId: resultsDiv.id,
    resultsDivExists: !!resultsDiv,
    activityName: activityName
  });

  try {
    const currency = '€';
    const isDe = calculator.currentLanguage === 'de';

    let html = `<div class="result-section">
      <h3>${isDe ? 'Berechnungsergebnis' : 'Calculation Result'}</h3>
      <div class="result-details">
        <div class="result-row">
          <span class="result-label">${isDe ? 'Tätigkeit' : 'Activity'}:</span>
          <span class="result-value">${activityName}</span>
        </div>
        <div class="result-row">
          <span class="result-label">${isDe ? 'Basishonorar' : 'Base Fee'}:</span>
          <span class="result-value">${result.baseFee}${currency}</span>
        </div>
        <div class="result-row">
          <span class="result-label">${isDe ? 'Kriterium' : 'Criterion'}:</span>
          <span class="result-value">${result.criterionLabel}</span>
        </div>
        <div class="result-row">
          <span class="result-label">${isDe ? 'Multiplikator' : 'Multiplier'}:</span>
          <span class="result-value">${result.multiplier}</span>
        </div>`;

    if (result.isGroup && result.numArtists > 1) {
      html += `<div class="result-row">
          <span class="result-label">${isDe ? 'Künstler' : 'Artists'}:</span>
          <span class="result-value">${result.numArtists}</span>
        </div>
        <div class="result-row">
          <span class="result-label">${isDe ? 'Gruppenrabatt' : 'Group Discount'}:</span>
          <span class="result-value">${result.groupDiscount}</span>
        </div>
        <div class="result-row">
          <span class="result-label">${isDe ? 'Pro Künstler' : 'Per Artist'}:</span>
          <span class="result-value highlight">${result.perArtistFee}${currency}</span>
        </div>`;
    }

    html += `<div class="result-row total">
          <span class="result-label">${isDe ? 'Honorar gesamt' : 'Total Fee'}:</span>
          <span class="result-value">${result.totalFee}${currency}</span>
        </div>
      </div>`;

    if (result.notes && result.notes.length > 0) {
      html += `<div class="notes-section">
        <h4>${isDe ? 'Hinweise' : 'Notes'}:</h4>
        <ul>
          ${result.notes.map(note => `<li>${note}</li>`).join('')}
        </ul>
      </div>`;
    }

    html += `<div class="info-box">
        <p><strong>${isDe ? 'Disclaimer' : 'Disclaimer'}:</strong> ${isDe ?
          'Diese Berechnung basiert auf der Honorarmatrix des Landes NRW (Stand: 23. Dezember 2025). Die angegebenen Beträge sind Mindesthonorare, keine Obergrenzen. Weitere Kostenpositionen können zusätzlich verhandelt werden.' :
          'This calculation is based on the NRW honor matrix (Status: December 23, 2025). The stated amounts are minimum fees, not upper limits. Additional cost positions can be negotiated separately.'
        }</p>
      </div>
    </div>`;

    console.log('[HonorMatrix] Setting innerHTML, length:', html.length);
    resultsDiv.innerHTML = html;
    console.log('[HonorMatrix] innerHTML set successfully');
    console.log('[HonorMatrix] Results div now contains:', resultsDiv.innerHTML.substring(0, 100) + '...');

    // Ensure the results are visible and scroll into view
    if (resultsDiv.offsetHeight === 0) {
      console.warn('[HonorMatrix] Results div has zero height after setting innerHTML');
    } else {
      console.log('[HonorMatrix] Results div height:', resultsDiv.offsetHeight);
    }

    // Use setTimeout to ensure rendering is complete before scrolling
    console.log('[HonorMatrix] Setting up setTimeout for scroll (100ms)');
    setTimeout(() => {
      console.log('[HonorMatrix] setTimeout callback executing, calling scrollIntoView');
      resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.log('[HonorMatrix] scrollIntoView called');
    }, 100);

    console.log('[HonorMatrix] Results displayed successfully');
  } catch (error) {
    console.error('[HonorMatrix] Error in displayResults:', error);
    console.error('[HonorMatrix] Error stack:', error.stack);
    resultsDiv.innerHTML = '<div class="result-section"><h3>Error</h3><p>' + (calculator.currentLanguage === 'de' ? 'Fehler beim Anzeigen der Ergebnisse' : 'Error displaying results') + '</p></div>';
  }
}

function resetForm() {
  document.getElementById('discipline').value = '';
  document.getElementById('activity').innerHTML = '<option value="">' + calculator.getLabel('selectOption') + '</option>';
  document.getElementById('criteria').innerHTML = '<option value="">' + calculator.getLabel('selectOption') + '</option>';
  document.getElementById('numArtists').value = '1';
  document.getElementById('results').innerHTML = '';

  const numArtistsGroup = document.getElementById('numArtistsGroup');
  if (numArtistsGroup) {
    numArtistsGroup.style.display = 'none';
  }
}
