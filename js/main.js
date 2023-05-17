const ctaButton = document.getElementById('cta-button');

ctaButton.addEventListener('click', function () {
  const plansSection = document.getElementById('plans');

  if (plansSection) {
    plansSection.scrollIntoView({ behavior: 'smooth' });
  }
});
