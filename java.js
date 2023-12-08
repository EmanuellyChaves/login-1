const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.registrar-login');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});