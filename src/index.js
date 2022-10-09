import './style.css';
import homeContentDiv from './modules/home.js';
import menuContentDiv from './modules/menu.js';

(function () {
    const contentDiv = document.getElementById('content');
    const homeBtn = document.getElementById('home-button');
    const menuBtn = document.getElementById('menu-button');

    homeBtn.addEventListener('click', openHomePage);
    menuBtn.addEventListener('click', openMenuPage);

    loadPage(homeContentDiv());

    function loadPage(page) {
        clearContentDiv();
        contentDiv.appendChild(page);
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





