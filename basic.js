// Script for any dynamic functionality, like responsive menu
document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menu-button');
    var navigationMenu = document.getElementById('navigation-menu');

    menuButton.addEventListener('click', function() {
        navigationMenu.classList.toggle('active');
    });
});
