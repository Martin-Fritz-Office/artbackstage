(function () {
  "use strict";

  const form = document.getElementById("paymentSurveyForm");
  const submitBtn = document.getElementById("submitBtn");
  const submitStatus = document.getElementById("submitStatus");
  const successMessage = document.getElementById("successMessage");
  const jobDescription = document.getElementById("jobDescription");
  const paymentAmount = document.getElementById("paymentAmount");
  const comment = document.getElementById("comment");

  async function submitForm(event) {
    event.preventDefault();

    if (!paymentAmount.value.trim()) {
      showStatus("Bitte gib einen Betrag ein", "error");
      return;
    }

    const amount = parseFloat(paymentAmount.value);
    if (isNaN(amount) || amount < 0) {
      showStatus("Bitte gib einen gültigen Betrag ein", "error");
      return;
    }

    submitBtn.disabled = true;
    showStatus("Wird gespeichert...", "loading");

    try {
      const response = await fetch("submit_payment_survey.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobDescription: jobDescription.value.trim(),
          paymentAmount: amount,
          comment: comment.value.trim(),
          locale: document.body.dataset.lang || "de",
        }),
      });

      const data = await response.json();

      if (data.ok) {
        form.hidden = true;
        successMessage.hidden = false;
        submitStatus.hidden = true;
      } else {
        showStatus(data.error || "Fehler beim Speichern", "error");
        submitBtn.disabled = false;
      }
    } catch (error) {
      console.error("Submission error:", error);
      showStatus("Fehler beim Speichern: " + error.message, "error");
      submitBtn.disabled = false;
    }
  }

  function showStatus(message, type) {
    submitStatus.textContent = message;
    submitStatus.className = "pill pill-" + type;
    submitStatus.hidden = false;
  }

  if (form) {
    form.addEventListener("submit", submitForm);
  }
})();
