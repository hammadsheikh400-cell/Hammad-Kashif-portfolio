// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio site loaded successfully!');

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});