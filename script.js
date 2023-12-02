'use strict';

// 0- DATA
const openSignUp = document.querySelector('.btn-signup');
const registration = document.querySelector('.registration');
const closeSignUp = document.querySelector('.registration__btn');
const overlay = document.querySelector('.overlay');
const successMessage = document.querySelector('.success-message');
const createBtn = document.querySelector('.btn--form');
let singUpInput = document.forms['registerForm']['fname'].value;

const hidden = document.querySelector('.hidden');

// 1- sign-up form

const openRegistrationForm = function (e) {
  e.preventDefault();

  registration.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeRegistrationForm = function (e) {
  registration.classList.add('hidden');
  overlay.classList.add('hidden');
};

const inputValidation = function (e) {
  e.preventDefault();
  // if ((singUpInput = '')) {
  //   console.log('sdaas');
  //   return;
  // }
  successMessage.classList.remove('hidden');
  setTimeout(() => {
    successMessage.classList.add('hidden');
    location.reload();
  }, 2500);
};

openSignUp.addEventListener('click', openRegistrationForm);
closeSignUp.addEventListener('click', closeRegistrationForm);
overlay.addEventListener('click', closeRegistrationForm);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !registration.classList.contains('hidden'))
    closeRegistrationForm();
});
createBtn.addEventListener(
  'click',
  inputValidation
  // check if inputs are filled
  // set timeout
  // if yes clear inputs
  // display success message
  // close all and refresh browser
  // If no, do not display message
);

// account created message to the user

// 2- smooth scrolling
// 3- sticky nav
// 4- reveal sections
// 5- lazy loading
// 7- skeleton
