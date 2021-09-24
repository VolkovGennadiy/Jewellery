'use strict';
const navBtn = document.querySelector('.navigation__button');
const pageHeader = document.querySelector('.page-header');
const logo = document.querySelector('.naviagation__logo');

navBtn.onclick = () => {
  pageHeader.classList.toggle('page-header--mobile');
  logo.classList.toggle('naviagation__logo--tablet');
  navBtn.classList.toggle('navigation__button--tablet');
}