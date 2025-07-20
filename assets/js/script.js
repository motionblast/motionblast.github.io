document.addEventListener("DOMContentLoaded", () => {
  /* ========== Theme Toggle ========== */
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  function updateThemeIcon(theme) {
    if (theme === "dark") {
      // Currently dark → show Sun icon to indicate switch to light mode
      themeIcon.innerHTML = `
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      `;
      themeToggle.setAttribute("aria-pressed", "true");
    } else {
      // Currently light → show Moon icon to indicate switch to dark mode
      themeIcon.innerHTML = `
        <path d="M21 12.79A9 9 0 0112.21 3a7 7 0 108.79 8.79z"/>
      `;
      themeToggle.setAttribute("aria-pressed", "false");
    }
  }

  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const nextTheme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    updateThemeIcon(nextTheme);
  });

  /* ========== Hamburger Menu Toggle ========== */
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  /* ========== GLightbox Initialization ========== */
  if (typeof GLightbox === "function") {
    GLightbox({ selector: ".glightbox" });
  }

  /* ========== Portfolio Photo/Video Toggle ========== */
  const showPhotosBtn = document.getElementById("showPhotos");
  const showVideosBtn = document.getElementById("showVideos");
  const photoGallery  = document.getElementById("photoGallery");
  const videoGallery  = document.getElementById("videoGallery");

  if (showPhotosBtn && showVideosBtn && photoGallery && videoGallery) {
    showPhotosBtn.addEventListener("click", () => {
      photoGallery.style.display = "flex";
      videoGallery.style.display = "none";
      showPhotosBtn.classList.add("active");
      showVideosBtn.classList.remove("active");
    });

    showVideosBtn.addEventListener("click", () => {
      photoGallery.style.display = "none";
      videoGallery.style.display = "flex";
      showVideosBtn.classList.add("active");
      showPhotosBtn.classList.remove("active");
    });
  }

  /* ========== Dynamic Copyright Year ========== */
  const yearElem = document.getElementById("currentYear");
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
});
