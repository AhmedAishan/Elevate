'use strict';

// 0- DATA
const openSignUp = document.querySelector('.btn--signup');
const registration = document.querySelector('.registration');
const closeSignUp = document.querySelector('.registration__btn');
const overlay = document.querySelector('.overlay');
const successMessage = document.querySelector('.success-message');
const img = document.querySelector('img[data-src]');

// form input elements
const createBtn = document.querySelector('.btn--form');
const currentUserName = document.querySelector('.user-name');
const inputUser = document.querySelector('.reg-input-user');
const inputEmail = document.querySelector('.reg-input-email');
const inputPassword = document.querySelector('.reg-input-password');

const navList = document.querySelector('.nav__list');
const footerPages = document.querySelector('.footer__pages');
const allSections = document.querySelectorAll('.section');

// hidden class
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
  // check if inputs are filled
  if (
    inputUser.value.length === 0 ||
    inputEmail.value.length === 0 ||
    inputPassword.value.length === 0
  )
    return;
  currentUserName.textContent = inputUser.value;
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
createBtn.addEventListener('click', inputValidation);

// 2- smooth scrolling
// a- for nav
navList.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  // Matching stratergy - making sure that the event only triggers when the e.target has the class 'nav__link'
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); // Selecting only the part where we actually mention where to scroll ex: #home
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); //Now we are passing the above value into this (passing the value of where to scroll)
  }
});

// b- smooth scrolling for footer Pages
footerPages.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

// 4- reveal sections
const revealSections = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  //enrty.target = current element that is being intersected
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
const lazyLoadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  // This is to remove the blur effect on image only after the high res img is ready
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('blur-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(lazyLoadImg, {
  root: null,
  threshold: 0.1,
  rootMargin: '200px',
});

imgObserver.observe(img);
