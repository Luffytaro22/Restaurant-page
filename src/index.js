import './styles.css';
import homePage from '../modules/home.js';
import menuPage from '../modules/menu.js';
import contactPage from '../modules/contact.js';
import webIcon from './assets/puerta-torii.png';

// Append web icon
const link = document.createElement('link');
link.href = webIcon;
link.rel = 'icon';
document.head.appendChild(link);

const homeButton = document.querySelector('.nav-items:nth-child(1)');
const menuButton = document.querySelector('.nav-items:nth-child(2)');
const contactButton = document.querySelector('.nav-items:nth-child(3)');

homePage();

homeButton.addEventListener('click', () => {
  homePage();
  homeButton.classList.add('active');
  menuButton.classList.remove('active');
  contactButton.classList.remove('active');
});
menuButton.addEventListener('click', () => {
  menuPage();
  homeButton.classList.remove('active');
  menuButton.classList.add('active');
  contactButton.classList.remove('active');
});
contactButton.addEventListener('click', () => {
  contactPage();
  homeButton.classList.remove('active');
  menuButton.classList.remove('active');
  contactButton.classList.add('active');
});
