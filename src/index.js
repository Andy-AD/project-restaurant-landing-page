import './style.css';
import homeContentDiv from './modules/home.js';

const contentDiv = document.getElementById('content');
let homeBtn = document.getElementById('home-button');

function loadPage(page) {

    contentDiv.remove(contentDiv.firstChild);
    let element = page;

    return element;
}

homeBtn.addEventListener('click', openHomePage);

contentDiv.appendChild(component());

function openHomePage() {
    loadPage(homeContentDiv());
}



