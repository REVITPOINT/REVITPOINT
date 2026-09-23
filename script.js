
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
}
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

const quickForm = document.getElementById('quickForm');
if (quickForm) {
  quickForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const company = document.getElementById('company').value.trim();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const waste = document.getElementById('waste').value.trim();
    const amount = document.getElementById('amount').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent('Zapytanie – REVIT POINT');
    const body = encodeURIComponent(`Dzień dobry,

przesyłam zapytanie dotyczące możliwości współpracy.

Firma: ${company}
Imię i nazwisko: ${name}
Telefon: ${phone}
E-mail: ${email}
Kod odpadu: ${waste}
Ilość: ${amount}

Wiadomość:
${message}

Pozdrawiam`);

    window.location.href = `mailto:biuro@revitpoint.pl?subject=${subject}&body=${body}`;
  });
}
