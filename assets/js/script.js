// Theme toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  html.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
});

// Portfolio toggle
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');

    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    document.querySelectorAll('.portfolio-section').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(target).classList.add('active');
  });
});
