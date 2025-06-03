const form = document.getElementById('contactForm');
const inputs = form.querySelectorAll('input, textarea');

function showError(input, message) {
  const errorEl = input.parentElement.querySelector('.error-message');
  errorEl.textContent = message;
  input.classList.add('invalid');
}

function clearError(input) {
  const errorEl = input.parentElement.querySelector('.error-message');
  errorEl.textContent = '';
  input.classList.remove('invalid');
}

function isValidEmail(email) {
  // Simple regex for basic email format
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

inputs.forEach(input => {
  input.addEventListener('blur', () => {
    const value = input.value.trim();

    if (!value) {
      showError(input, 'Required');
    } else if (input.type === 'email' && !isValidEmail(value)) {
      showError(input, 'Please enter a valid email address');
    } else {
      clearError(input);
    }
  });
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;

  inputs.forEach(input => {
    const value = input.value.trim();

    if (!value) {
      showError(input, 'Required');
      valid = false;
    } else if (input.type === 'email' && !isValidEmail(value)) {
      showError(input, 'Please enter a valid email address');
      valid = false;
    } else {
      clearError(input);
    }
  });

  if (!valid) return;

  document.getElementById('confirmation').classList.remove('hidden');

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  form.reset();
});
