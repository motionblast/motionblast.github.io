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

  // Toggle photo/video galleries
  const showPhotosBtn = document.getElementById("showPhotos");
  const showVideosBtn = document.getElementById("showVideos");
  const photoGallery = document.getElementById("photoGallery");
  const videoGallery = document.getElementById("videoGallery");

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

  // Dynamic copyright year update
  const yearElem = document.getElementById("currentYear");
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
});
