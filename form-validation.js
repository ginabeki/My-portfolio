const form = document.getElementById('form');
const email = document.getElementById('email');
const errorInfo = document.getElementById('error');

function validateEmail() {
  const errorMessages = [];
  const validRegex =
    /^[a-z-0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z-0-9-]+(?:\.[a-z-0-9-]+)*$/;
  if (!email.value.match(validRegex)) {
    errorMessages.push('Not sent, invalid email');
    errorInfo.innerHTML = `
      <span style='color:red; border:1px solid red; padding: 8px;'>${errorMessages.join(
        ', '
      )}</span>
    `;
    return false;
  }
  errorMessages.push('Email sent successfully');
  errorInfo.innerHTML = `
      <span style='color:green; border:1px solid green; padding: 8px;'>${errorMessages.join(
        ', '
      )}</span>
    `;
  return true;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateEmail();
});
