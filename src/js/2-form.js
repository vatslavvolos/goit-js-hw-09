const form = document.querySelector('.feedback-form');
const handlerClick = event => {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const usersData = {
    email,
    message,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(usersData));
};
const userDaten = JSON.parse(localStorage.getItem('feedback-form-state'));
form.addEventListener('input', handlerClick);

const loadHandler = event => {
  if (localStorage.getItem('feedback-form-state')) {
    form.elements.email.value = userDaten.email;
    form.elements.message.value = userDaten.message;
  }
};
window.addEventListener('load', loadHandler);
form.addEventListener('submit', event => {
  if (
    form.elements.email.value.trim() === '' ||
    form.elements.message.value.trim() === ''
  ) {
    return alert(`you need to fill all`);
  }
  event.preventDefault();
  const userEmail = form.elements.email.value.trim();
  const userMessage = form.elements.message.value.trim();
  const User = { email: `${userEmail}`, message: `${userMessage}` };
  console.log(User);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
console.log(localStorage);
const input = document.querySelector('input');
input.style.height = 40 + 'px';
