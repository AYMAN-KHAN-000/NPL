// theme-toggle.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
  
    // Load saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    }
  
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
      } else {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
      }
    });
  });
  