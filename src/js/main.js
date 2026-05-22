import "bootstrap";
import "../scss/main.scss";

const form = document.querySelector("#leadForm");
const message = document.querySelector("#formMessage");

if (form && message) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    message.textContent = "Sending...";
    message.className = "form-message";

    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();

      if (!response.ok) {
        message.textContent = result.message || "Please check the form and try again.";
        message.classList.add("is-error");
        return;
      }

      form.reset();
      message.textContent = result.message || "Thank you. Your inquiry was submitted.";
      message.classList.add("is-success");
    } catch {
      message.textContent = "The form could not be submitted right now. Please try again shortly.";
      message.classList.add("is-error");
    }
  });
}

const mediaDialog = document.querySelector("#mediaDialog");
const openMedia = document.querySelector("[data-open-media]");
const closeMedia = document.querySelector("[data-close-media]");

if (mediaDialog && openMedia && closeMedia) {
  openMedia.addEventListener("click", () => {
    if (typeof mediaDialog.showModal === "function") {
      mediaDialog.showModal();
      return;
    }

    mediaDialog.setAttribute("open", "");
  });

  closeMedia.addEventListener("click", () => {
    mediaDialog.close();
  });

  mediaDialog.addEventListener("click", (event) => {
    if (event.target === mediaDialog) {
      mediaDialog.close();
    }
  });
}
