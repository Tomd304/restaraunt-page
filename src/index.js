import {createHomepage} from './homepage';
import {createMenu} from './menu';
import {createContact} from './contact';

let homeButton = document.querySelector('#homeBtn')
let menuButton = document.querySelector('#menuBtn')
let contactButton = document.querySelector('#contactBtn')

createHomepage();
homeButton.style.textDecoration = 'underline'

homeButton.addEventListener('click', () => {
    createHomepage()
    homeButton.style.textDecoration = 'underline'
    menuButton.style.textDecoration = ''
    contactButton.style.textDecoration = ''
});

menuButton.addEventListener('click', () => {
    createMenu()
    homeButton.style.textDecoration = ''
    menuButton.style.textDecoration = 'underline'
    contactButton.style.textDecoration = ''
});

contactButton.addEventListener('click', () => {
    createContact()
    homeButton.style.textDecoration = ''
    menuButton.style.textDecoration = ''
    contactButton.style.textDecoration = 'underline'
});

