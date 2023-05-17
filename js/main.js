const ctaButton = document.getElementById('cta-button');

ctaButton.addEventListener('click', function () {
  const plansSection = document.getElementById('plans');

  if (plansSection) {
    plansSection.scrollIntoView({ behavior: 'smooth' });
  }
});

const nextButton = document.getElementById('next-arrow');
const previosButton = document.getElementById('previous-arrow');
const coinsTable = document.getElementById('coins-table');
const commissionsTable = document.getElementById('commissions-table');

nextButton.addEventListener('click', function () {
  toggleElementsVisibility({
    on: [
      { element: commissionsTable, className: '--hide' },
      { element: previosButton, className: '--off' },
    ],
    off: [
      { element: coinsTable, className: '--hide' },
      { element: nextButton, className: '--off' },
    ],
  });
});

previosButton.addEventListener('click', function () {
  toggleElementsVisibility({
    on: [
      { element: coinsTable, className: '--hide' },
      { element: nextButton, className: '--off' },
    ],
    off: [
      { element: commissionsTable, className: '--hide' },
      { element: previosButton, className: '--off' },
    ],
  });
});

function toggleElementsVisibility({ off, on }) {
  const elementsToDisplay = on;
  const elementsToHidde = off;

  elementsToDisplay?.forEach(({ element, className }) => {
    element.classList.remove(className);
  });

  elementsToHidde?.forEach(({ element, className }) => {
    element.classList.add(className);
  });
}
