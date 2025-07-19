document.addEventListener("DOMContentLoaded", () => {
  // Dark mode toggle setup
  const toggle = document.getElementById("theme-toggle");

  // Apply saved theme on load
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  if (toggle) toggle.checked = savedTheme === "dark";

  // Toggle theme on button click
  if (toggle) {
    toggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }

  // Initialize GLightbox if available
  if (typeof GLightbox === "function") {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });
  }
});
