import './style.css';
import homeContentDiv from './modules/home.js';
import menuContentDiv from './modules/menu.js';
import contactContentDiv from './modules/contact.js'

(function () {
    const contentDiv = document.getElementById('content');
    const homeBtn = document.getElementById('home-button');
    const menuBtn = document.getElementById('menu-button');
    const contactBtn = document.getElementById('contact-button');

    homeBtn.addEventListener('click', openHomePage);
    menuBtn.addEventListener('click', openMenuPage);
    contactBtn.addEventListener('click', openContactPage);

    loadPage(homeContentDiv());

    function loadPage(page) {
        clearContentDiv();
        contentDiv.appendChild(page);
    }

    function openContactPage() {
        loadPage(contactContentDiv());
    }

    function openHomePage() {
        loadPage(homeContentDiv());
    }

    function openMenuPage() {
        loadPage(menuContentDiv());
    }

    function clearContentDiv() {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }
})()





