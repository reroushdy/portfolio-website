// Simple contact form handler (frontend only)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  status.textContent = `Thanks, ${name}! Your message has been sent (demo only).`;
  form.reset();
});
