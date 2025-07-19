document.addEventListener("DOMContentLoaded", () => {
  // Dark mode toggle setup
  const toggle = document.getElementById("theme-toggle");

  // Apply saved theme on load
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // If toggle is a checkbox, update its checked state (ignore if button)
  if (toggle && "checked" in toggle) toggle.checked = savedTheme === "dark";

  // Toggle theme on click
  if (toggle) {
    toggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);

      // Update checked state if toggle is checkbox
      if ("checked" in toggle) toggle.checked = newTheme === "dark";
    });
  }

  // Initialize GLightbox if available
  if (typeof GLightbox === "function") {
    GLightbox({
      selector: ".glightbox",
      loop: true,
      touchNavigation: true,
    });
  }
});
