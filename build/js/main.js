'use strict';
const navBtn = document.querySelector('.navigation__button');
const pageHeader = document.querySelector('.page-header');
const logo = document.querySelector('.navigation__logo');
const cartBtn = document.querySelector('.navigation__button-login');
const usrBlock = document.querySelector('.navigation__user-block');
const formHeader = document.querySelector('.navigation__search');
const navMenu = document.querySelector('.navigation__menu');
const navlink = document.querySelectorAll('.navigation__link');
const pageBody = document.querySelector('.page-body');
const nav = document.querySelector('.navigation')
const loginBtn = document.querySelector('.navigation__login');
const loginBtnClose = document.querySelector('.modal-login__close');
const loginModal = document.querySelector('.modal-login');
const overlay = document.querySelector('.overlay');
const yourEmail = document.querySelector('#email');
const yourEmailLabel = document.querySelector('.modal-login__label-email');
const passInput = document.querySelector('#password');
const passlabel = document.querySelector('.modal-login__label-password');
const questItem = document.querySelector('.questions__item');
const questItemDel = document.querySelector('.questions__item--del');
const questMet = document.querySelector('.questions__item--met');
const questFit = document.querySelector('.questions__item--fit');
const questLink = document.querySelector('.questions__link');
const questLinkDel = document.querySelector('.questions__link--deliver');
const questLinkMet = document.querySelector('.questions__link--method');
const questLinkFit = document.querySelector('.questions__link--fit');

questItem.addEventListener('click', function (evt) {
  questItem.classList.toggle('questions__item--active');
  questLink.classList.toggle('questions__link--toggledown');
})

questItemDel.addEventListener('click', function (evt) {
  questItemDel.classList.toggle('questions__item--active');
  questLinkDel.classList.toggle('questions__link--toggledown');
  questItem.classList.remove('questions__item--active');
  questLink.classList.remove('questions__link--toggledown');
  questMet.classList.remove('questions__item--active');
  questFit.classList.remove('questions__item--active');
})

questMet.addEventListener('click', function (evt) {
  questMet.classList.toggle('questions__item--active');
  questLinkMet.classList.toggle('questions__link--toggledown');
  questFit.classList.remove('questions__item--active');
  questItem.classList.remove('questions__item--active');
  questItem.classList.remove('questions__item--active');
})

questFit.addEventListener('click', function (evt) {
  questFit.classList.toggle('questions__item--active');
  questLinkFit.classList.toggle('questions__link--toggledown');
  questFit.classList.remove('questions__item--active');
  questItem.classList.remove('questions__item--active');
  questItem.classList.remove('questions__item--active');
})


passInput.addEventListener('keyup', function (evt) {
  passlabel.classList.add('modal-login--none');
  if (passInput.value == '') {
    passlabel.classList.remove('modal-login--none');
  }
})

yourEmail.addEventListener('keyup', function (evt) {
  yourEmailLabel.classList.add('modal-login--none');
  if (yourEmail.value == '') {
    yourEmailLabel.classList.remove('modal-login--none')
  }
})

navBtn.onclick = () => {
  pageHeader.classList.toggle('page-header--mobile');
  logo.classList.toggle('navigation__logo--tablet');
  navBtn.classList.toggle('navigation__button--tablet');
  cartBtn.classList.toggle('navigation__button-login--tablet');
  usrBlock.classList.toggle('navigation__user-block--mobile');
  formHeader.classList.toggle('navigation__search--mobile');
  navMenu.classList.toggle('navigation__menu--mobile');
  pageBody.classList.toggle('page-body--overflow');
  nav.classList.toggle('navigation--overflow');
  for(let i = 0; i < navlink.length; i++) {
    navlink[i].classList.toggle('navigation__link--mobile');
  }
}

loginBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  loginModal.classList.add('modal-login--open');
  overlay.classList.add('overlay__active');
  yourEmail.focus();
});

loginBtnClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  loginModal.classList.remove('modal-login--open');
  overlay.classList.remove('overlay__active');
})

overlay.addEventListener('click', function (evt) {
  loginModal.classList.remove('modal-login--open');
  overlay.classList.remove('overlay__active');
})

window.addEventListener('keydown', function (evt ) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    loginModal.classList.remove('modal-login--open');
    overlay.classList.remove('overlay__active');
  }
})


