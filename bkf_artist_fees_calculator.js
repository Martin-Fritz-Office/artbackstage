(function(){
  // Fee data organized by category
  const feeCategories = {
    hourly: {
      label_de: 'Stundenhonorar - Künstlerische Arbeit',
      label_en: 'Hourly Rate - Artistic Work',
      items: [
        { id: 'h1', name_de: '0–5 Jahre Erfahrung', name_en: '0–5 years experience', rate: 110 },
        { id: 'h2', name_de: '6–15 Jahre Erfahrung', name_en: '6–15 years experience', rate: 125 },
        { id: 'h3', name_de: 'Ab 16 Jahren Erfahrung', name_en: '16+ years experience', rate: 140 }
      ]
    },
    consulting: {
      label_de: 'Stundenhonorar - Künstler als Berater:in',
      label_en: 'Hourly Rate - Artist as Consultant',
      items: [
        { id: 'c1', name_de: '0–5 Jahre Erfahrung', name_en: '0–5 years experience', rate: 140 },
        { id: 'c2', name_de: '6–15 Jahre Erfahrung', name_en: '6–15 years experience', rate: 175 },
        { id: 'c3', name_de: 'Ab 16 Jahren Erfahrung', name_en: '16+ years experience', rate: 210 }
      ]
    },
    artworks: {
      label_de: 'Kunstaufgaben / Ausschmückungen',
      label_en: 'Art Tasks / Decorations',
      items: [
        { id: 'a1', name_de: 'Budget unter 13.500 €', name_en: 'Budget under €13,500', percentage: 40, minBudget: 0, maxBudget: 13500 },
        { id: 'a2', name_de: 'Budget 13.500 – 33.750 €', name_en: 'Budget €13,500–€33,750', percentage: 37, minBudget: 13500, maxBudget: 33750 },
        { id: 'a3', name_de: 'Budget 33.750 – 67.500 €', name_en: 'Budget €33,750–€67,500', percentage: 33, minBudget: 33750, maxBudget: 67500 },
        { id: 'a4', name_de: 'Budget 67.500 – 675.000 €', name_en: 'Budget €67,500–€675,000', percentage: 25, minBudget: 67500, maxBudget: 675000 },
        { id: 'a5', name_de: 'Budget über 675.000 €', name_en: 'Budget over €675,000', percentage: 20, minBudget: 675000, maxBudget: Infinity }
      ]
    },
    sketches: {
      label_de: 'Skizzenproposal',
      label_en: 'Sketch Proposal',
      items: [
        { id: 's1', name_de: 'Skizzenproposal (pauschal)', name_en: 'Sketch proposal (flat rate)', minFee: 7000, maxFee: 11000 }
      ]
    },
    performances: {
      label_de: 'Performance',
      label_en: 'Performance',
      items: [
        { id: 'p1', name_de: 'Performance (1 Person, 10–20 Min)', name_en: 'Performance (1 person, 10–20 min)', fee: 1100 }
      ]
    },
    other: {
      label_de: 'Weitere Aufgaben',
      label_en: 'Other Tasks',
      items: [
        { id: 'o1', name_de: 'Artist Talk (30–45 Min)', name_en: 'Artist Talk (30–45 min)', fee: 550 },
        { id: 'o2', name_de: 'Vortrag (60–90 Min)', name_en: 'Lecture (60–90 min)', fee: 1100 },
        { id: 'o3', name_de: 'Panel-Teilnahme', name_en: 'Panel Participation', fee: 425 },
        { id: 'o4', name_de: 'Jury / Censor (Stundenhonorar)', name_en: 'Jury / Censor (hourly rate)', fee: 0, note_de: 'siehe Stundenhonorar', note_en: 'see hourly rates' }
      ]
    },
    teaching: {
      label_de: 'Unterricht (Freelance)',
      label_en: 'Teaching (Freelance)',
      items: [
        { id: 't1', name_de: 'Unterricht 1 Stunde (inkl. Vorbereitung)', name_en: '1-hour lesson (incl. preparation)', fee: 100, perHour: true },
        { id: 't2', name_de: 'Unterricht 1 Tag (inkl. Vorbereitung)', name_en: '1-day teaching (incl. preparation)', fee: 8500, perDay: true },
        { id: 't3', name_de: 'Unterricht 1 Woche (inkl. Vorbereitung)', name_en: '1-week teaching (incl. preparation)', fee: 36000, perWeek: true }
      ]
    }
  };

  let currentLanguage = 'de';
  const state = {};

  // Initialize state for all fee items
  Object.entries(feeCategories).forEach(([category, data]) => {
    data.items.forEach((item) => {
      state[item.id] = {
        selected: false,
        quantity: 1,
        customValue: 0
      };
    });
  });

  const categoryContainer = document.getElementById('feeCategory');
  const itemsContainer = document.getElementById('feeItems');
  const resultTable = document.querySelector('#resultTable tbody');
  const grandTotalCell = document.getElementById('grandTotal');
  const downloadBtn = document.getElementById('downloadCsvBtn');

  const labels = {
    de: {
      category: 'Kategorie',
      item: 'Leistung',
      quantity: 'Menge/Stunden',
      customValue: 'Benutzerdefinierter Betrag (€)',
      rate: 'Betrag (€)',
      total: 'Gesamt (€)',
      budget: 'Budget (€)',
      percentage: 'Anteil (%)',
      fee: 'Gebühr (€)',
      select_category: 'Kategorie wählen',
      all_categories: 'Alle Kategorien',
      no_items: 'Noch keine Leistungen ausgewählt.',
      no_categories: 'Noch keine Kategorien ausgewählt.',
      download_csv: 'CSV downloaden',
      german: 'Deutsch',
      english: 'English',
      language: 'Sprache',
      back: 'Zurück',
      select_fee_category: 'Honorarkategorie wählen',
      fee_calculation: 'Honorarberechnung',
      total_honorarium: 'Gesamthonorar (exkl. MwSt.)',
      about_fees: 'Über diese Honorare'
    },
    en: {
      category: 'Category',
      item: 'Service',
      quantity: 'Quantity/Hours',
      customValue: 'Custom Amount (€)',
      rate: 'Amount (€)',
      total: 'Total (€)',
      budget: 'Budget (€)',
      percentage: 'Percentage (%)',
      fee: 'Fee (€)',
      select_category: 'Select Category',
      all_categories: 'All Categories',
      no_items: 'No services selected yet.',
      no_categories: 'No categories selected yet.',
      download_csv: 'Download CSV',
      german: 'Deutsch',
      english: 'English',
      language: 'Language',
      back: 'Back',
      select_fee_category: 'Select Fee Category',
      fee_calculation: 'Fee Calculation',
      total_honorarium: 'Total Honorarium (excl. VAT)',
      about_fees: 'About These Fees'
    }
  };

  function t(key) {
    return labels[currentLanguage][key] || key;
  }

  function getLabel(obj, suffix) {
    const key = `label_${suffix || currentLanguage}`;
    return obj[key] || obj.name || '';
  }

  function getName(obj) {
    const key = `name_${currentLanguage}`;
    return obj[key] || obj.name || '';
  }

  function euro(value) {
    return Number(value || 0).toLocaleString(currentLanguage === 'de' ? 'de-DE' : 'en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function renderCategorySelect() {
    const options = [`<option value="">${t('select_category')}</option>`];
    Object.entries(feeCategories).forEach(([key, data]) => {
      options.push(`<option value="${key}">${getLabel(data)}</option>`);
    });
    categoryContainer.innerHTML = options.join('');
  }

  function renderFeeItems(categoryKey) {
    if (!categoryKey) {
      itemsContainer.innerHTML = `<p class="muted">${t('no_categories')}</p>`;
      return;
    }

    const category = feeCategories[categoryKey];
    itemsContainer.innerHTML = category.items.map((item) => {
      const itemState = state[item.id];
      const checked = itemState.selected ? 'checked' : '';
      const disabled = itemState.selected ? '' : 'disabled';

      let detailsHtml = '';

      if (item.rate !== undefined) {
        // Hourly rate
        detailsHtml = `
          <div class="qgrid fee-params">
            <label class="q">
              <span>${t('quantity')}</span>
              <input type="number" min="0" step="0.5" data-quantity-id="${item.id}" value="${itemState.quantity}" ${disabled} inputmode="decimal" />
            </label>
            <label class="q">
              <span>${t('rate')} (€)</span>
              <input type="number" value="${item.rate}" disabled />
            </label>
          </div>
        `;
      } else if (item.percentage !== undefined) {
        // Percentage-based (artwork)
        detailsHtml = `
          <div class="qgrid fee-params">
            <label class="q">
              <span>${t('budget')} (€)</span>
              <input type="number" min="0" step="100" data-budget-id="${item.id}" value="${itemState.customValue || ''}" ${disabled} inputmode="numeric" placeholder="z.B. 50000" />
            </label>
            <label class="q">
              <span>${t('percentage')}</span>
              <input type="number" value="${item.percentage}" disabled />
            </label>
          </div>
        `;
      } else if (item.minFee !== undefined) {
        // Range-based (sketches)
        detailsHtml = `
          <div class="qgrid fee-params">
            <label class="q">
              <span>${t('fee')} (€ ${euro(item.minFee)}–${euro(item.maxFee)})</span>
              <input type="number" min="${item.minFee}" max="${item.maxFee}" step="100" data-fee-id="${item.id}" value="${itemState.customValue || Math.round((item.minFee + item.maxFee) / 2)}" ${disabled} inputmode="numeric" />
            </label>
          </div>
        `;
      } else if (item.perHour) {
        // Per-hour teaching
        detailsHtml = `
          <div class="qgrid fee-params">
            <label class="q">
              <span>${t('quantity')} (hours)</span>
              <input type="number" min="0" step="0.5" data-hours-id="${item.id}" value="${itemState.quantity}" ${disabled} inputmode="decimal" />
            </label>
            <label class="q">
              <span>${t('rate')} (€/h)</span>
              <input type="number" value="${item.fee}" disabled />
            </label>
          </div>
        `;
      } else if (item.perDay || item.perWeek) {
        // Fixed fee (day/week)
        detailsHtml = `
          <div class="qgrid fee-params">
            <label class="q">
              <span>${t('quantity')}</span>
              <input type="number" min="0" step="1" data-quantity-id="${item.id}" value="${itemState.quantity}" ${disabled} inputmode="numeric" />
            </label>
            <label class="q">
              <span>${t('fee')} (€)</span>
              <input type="number" value="${item.fee}" disabled />
            </label>
          </div>
        `;
      } else {
        // Simple flat fee
        detailsHtml = `
          <div class="qgrid fee-params">
            <label class="q">
              <span>${t('fee')} (€)</span>
              <input type="number" value="${item.fee}" disabled />
            </label>
          </div>
        `;
      }

      return `
        <div class="q-section fee-item-row">
          <label class="q fee-item-title">
            <span>
              <input type="checkbox" data-id="${item.id}" class="fee-toggle" ${checked} />
              <strong>${getName(item)}</strong>
            </span>
          </label>
          ${detailsHtml}
        </div>
      `;
    }).join('');
  }

  function calculateItemTotal(item) {
    const itemState = state[item.id];
    if (!itemState.selected) return 0;

    if (item.rate !== undefined) {
      return itemState.quantity * item.rate;
    } else if (item.percentage !== undefined) {
      const budget = itemState.customValue || 0;
      return (budget * item.percentage) / 100;
    } else if (item.minFee !== undefined) {
      return itemState.customValue || Math.round((item.minFee + item.maxFee) / 2);
    } else if (item.perHour) {
      return itemState.quantity * item.fee;
    } else if (item.perDay || item.perWeek) {
      return itemState.quantity * item.fee;
    } else {
      return item.fee || 0;
    }
  }

  function renderResults() {
    let selectedItems = [];
    let grandTotal = 0;

    Object.entries(feeCategories).forEach(([categoryKey, category]) => {
      category.items.forEach((item) => {
        if (state[item.id].selected) {
          const total = calculateItemTotal(item);
          selectedItems.push({
            category: getLabel(category),
            item: getName(item),
            total
          });
          grandTotal += total;
        }
      });
    });

    resultTable.innerHTML = selectedItems.length
      ? selectedItems.map((row) => `
        <tr>
          <td>${row.category}</td>
          <td>${row.item}</td>
          <td>${euro(row.total)}</td>
        </tr>
      `).join('')
      : `<tr><td colspan="3" class="muted">${t('no_items')}</td></tr>`;

    grandTotalCell.textContent = euro(grandTotal);
  }

  function parseInputNumber(value) {
    const numeric = Number(value);
    return Number.isFinite(numeric) && numeric >= 0 ? numeric : 0;
  }

  function handleItemChange(event) {
    const toggle = event.target.closest('.fee-toggle');
    if (toggle) {
      const itemId = toggle.getAttribute('data-id');
      state[itemId].selected = toggle.checked;
      if (!toggle.checked) {
        state[itemId].quantity = 1;
        state[itemId].customValue = 0;
      }
      renderFeeItems(categoryContainer.value);
      renderResults();
      return;
    }

    const quantityId = event.target.getAttribute('data-quantity-id');
    if (quantityId) {
      state[quantityId].quantity = parseInputNumber(event.target.value);
      renderResults();
      return;
    }

    const budgetId = event.target.getAttribute('data-budget-id');
    if (budgetId) {
      state[budgetId].customValue = parseInputNumber(event.target.value);
      renderResults();
      return;
    }

    const feeId = event.target.getAttribute('data-fee-id');
    if (feeId) {
      const item = Object.values(feeCategories).flatMap(c => c.items).find(i => i.id === feeId);
      const value = parseInputNumber(event.target.value);
      state[feeId].customValue = Math.min(item.maxFee, Math.max(item.minFee, value));
      if (event.type === 'change') {
        event.target.value = state[feeId].customValue;
      }
      renderResults();
      return;
    }

    const hoursId = event.target.getAttribute('data-hours-id');
    if (hoursId) {
      state[hoursId].quantity = parseInputNumber(event.target.value);
      renderResults();
      return;
    }
  }

  function setLanguage(lang) {
    currentLanguage = lang;
    renderCategorySelect();
    renderFeeItems(categoryContainer.value);
    renderResults();
    document.documentElement.lang = lang;
  }

  function buildCsv() {
    const header = [t('category'), t('item'), t('total')];
    const rows = [];
    let grandTotal = 0;

    Object.entries(feeCategories).forEach(([categoryKey, category]) => {
      category.items.forEach((item) => {
        if (state[item.id].selected) {
          const total = calculateItemTotal(item);
          rows.push([
            getLabel(category),
            getName(item),
            total.toFixed(2)
          ]);
          grandTotal += total;
        }
      });
    });

    rows.push(['', 'SUMME', grandTotal.toFixed(2)]);

    return [header].concat(rows)
      .map((cols) => cols.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(';'))
      .join('\n');
  }

  function downloadCsv() {
    const csv = buildCsv();
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bkf_honorar_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  // Event listeners
  categoryContainer.addEventListener('change', (e) => {
    renderFeeItems(e.target.value);
    renderResults();
  });

  itemsContainer.addEventListener('input', handleItemChange);
  itemsContainer.addEventListener('change', handleItemChange);
  downloadBtn.addEventListener('click', downloadCsv);

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const lang = e.target.getAttribute('data-lang');
      if (lang) {
        setLanguage(lang);
        document.querySelectorAll('[data-lang]').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
      }
    });
  });

  // Initialize
  setLanguage('de');
  renderCategorySelect();
  renderFeeItems('');
  renderResults();
})();
