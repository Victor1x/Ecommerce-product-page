import {setupLinkCartEvent } from './motal_cart.js'

const link_cart = document.querySelector(".link_cart")
setupLinkCartEvent(link_cart)

const toggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.navbar-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});