(function() {
    function toggleMenu() {
        var navigationMenu = document.getElementById('navigation-menu');
        if (navigationMenu) {
            navigationMenu.classList.toggle('active');
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var menuButton = document.getElementById('menu-button');
        if (menuButton) {
            menuButton.addEventListener('click', toggleMenu, false);
        }
    }, false);
})();
