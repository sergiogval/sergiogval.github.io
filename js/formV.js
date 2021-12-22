const form = document.querySelector('#form');
const email = document.querySelector('#email');
const errorMsg = document.querySelector('#msg-error');
const ERROR_MESSAGE = 'Please use lowercase to share your email address.';

function isLowerCase(str) {
  return str === str.toLowerCase();
}

form.addEventListener('submit', (event) => {
  if (!isLowerCase(email.value)) {
    errorMsg.innerText = ERROR_MESSAGE;
    email.classList.add('email-input-error');
    event.preventDefault();
  } else {
    errorMsg.innerText = '';
    email.classList.add('email-input-error');
  }
});
