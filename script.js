'use strict';

console.log('Project Elevate started');

// 0- DATA
const openSignUp = document.querySelector('.btn-signup');
const registration = document.querySelector('.registration');
const closeSignUp = document.querySelector('.registration__btn');
const overlay = document.querySelector('.overlay');

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

openSignUp.addEventListener('click', openRegistrationForm);
closeSignUp.addEventListener('click', closeRegistrationForm);
overlay.addEventListener('click', closeRegistrationForm);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !registration.classList.contains('hidden'))
    closeRegistrationForm();
});

// account created message to the user

// 2- smooth scrolling
// 3- sticky nav
// 4- reveal sections
// 5- lazy loading
// 7- skeleton
