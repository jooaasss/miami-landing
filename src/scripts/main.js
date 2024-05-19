'use strict';

const body = document.querySelector('.page__body');
const menuButton = document.querySelector('.icon--menu');
const closeButton = document.querySelector('.icon--close');

function toggleMenu() {
  if (body.classList.contains('page__body--menu-opened')) {
    body.classList.remove('page__body--menu-opened');
  } else {
    body.classList.add('page__body--menu-opened');
  }
}

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
