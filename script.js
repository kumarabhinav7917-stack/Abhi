// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Contact form handler
function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = 'Thank you! We will get back to you soon.';
  e.target.reset();
  setTimeout(() => { status.textContent = ''; }, 5000);
}
