/* Toggle Button */
let mobileNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
});