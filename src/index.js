import './styles.css';
import homePage from '../modules/home.js';
import menuPage from '../modules/menu.js';
import contactPage from '../modules/contact.js';

const homeButton = document.querySelector('.nav-items:nth-child(1)');
const menuButton = document.querySelector('.nav-items:nth-child(2)');
const contactButton = document.querySelector('.nav-items:nth-child(3)');

homePage();

homeButton.addEventListener('click', homePage);
menuButton.addEventListener('click', menuPage);
contactButton.addEventListener('click', contactPage);
