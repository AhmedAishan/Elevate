'use strict';

// 0- DATA
const openSignUp = document.querySelector('.btn-signup');
const registration = document.querySelector('.registration');
const closeSignUp = document.querySelector('.registration__btn');
const overlay = document.querySelector('.overlay');
const successMessage = document.querySelector('.success-message');
const createBtn = document.querySelector('.btn--form');
let singUpInput = document.forms['registerForm']['fname'].value;
const navList = document.querySelector('.nav__list');
const footerPages = document.querySelector('.footer__pages');
const allSections = document.querySelectorAll('.section');

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

// account created message to the user
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

// 2- smooth scrolling
// a- for nav
navList.addEventListener('click', function (e) {
  e.preventDefault();

  // Matching stratergy - making sure that the event only triggers when the e.target has the class 'nav__link'
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); // Selecting only the part where we actually mention where to scroll ex: #home
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); //Now we are passing the above value into this (passing the value of where to scroll)
  }
});

// b- smooth scrolling for footer Pages
footerPages.addEventListener('click', function (e) {
  e.preventDefault();

  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

// 4- reveal sections
const revealSections = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// 5- lazy loading
// 7- skeleton
