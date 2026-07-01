document.querySelectorAll('.feature-card').forEach((card) => {
  card.addEventListener('click', () => {
    const target = card.dataset.target;
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const reportForm = document.getElementById('report-form');
const reportMessage = document.getElementById('report-message');

reportForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(reportForm);
  const summary = formData.get('summary')?.toString().trim() || 'No details provided';

  reportMessage.textContent = `Thanks for sharing this. Your report has been saved for review. We will help you with: ${summary}`;
  reportMessage.style.display = 'block';
  reportForm.reset();
});

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name')?.toString().trim() || 'a student';

  contactMessage.textContent = `Thanks, ${name}. Your message has been sent to the school support team.`;
  contactMessage.style.display = 'block';
  contactForm.reset();
});
