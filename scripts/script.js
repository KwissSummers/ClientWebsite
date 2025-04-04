// script.js

// jQuery DOM Ready (for future use)
$(document).ready(function () {
  // Future homepage scripts here
});

// Toggle Devlog Posts (Expand/Collapse)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".devlog-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const fullPost = button.nextElementSibling;
      fullPost.hidden = !fullPost.hidden;
      button.textContent = fullPost.hidden ? "Read More" : "Show Less";
    });
  });
});

// Contact Form Validation & Popup
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const popup = document.getElementById("contact-thanks");

  form?.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    form.reset();
    popup.classList.add("show");
    popup.setAttribute("aria-live", "polite");
    popup.style.opacity = "1";

    setTimeout(() => {
      popup.style.opacity = "0";
      popup.classList.remove("show");
    }, 4000);
  });
});

// Smooth Scroll for Internal Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Highlight Active Navbar Tab
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-tabs a").forEach(link => {
    if (window.location.pathname.includes(link.getAttribute("href"))) {
      link.classList.add("active-tab");
    }
  });
});