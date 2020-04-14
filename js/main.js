// Pasek nawigacyjny

// Zapobieganie schowaniu menu przy próbie wciśniecia w jedną z opcji
document.querySelectorAll('.w3-dropdown-content').forEach(function(content) {
    content.addEventListener('mouseenter', () => window.dropdownActive=true);
    content.addEventListener('mouseleave', () => window.dropdownActive=false);
});
// Podmenu Kategorie
const dropdownCategories = document.getElementById('dropdown-categories');
const dropdownCategoriesButton = document.getElementById('dropdown-categories-button');
dropdownCategoriesButton.addEventListener('click', () => dropdownCategories.classList.toggle('w3-show'));
dropdownCategoriesButton.addEventListener('blur', () => {
    if (!window.dropdownActive) {
        dropdownCategories.classList.remove('w3-show');
    }
});	
// Szukajka
const dropdownSearch = document.getElementById('dropdown-search');
const dropdownSearchInput = document.getElementById('dropdown-search-input');
const dropdownSearchInfo = document.getElementById('dropdown-search-info');
dropdownSearchInput.addEventListener('focus', () => dropdownSearch.classList.add('w3-show'));
dropdownSearchInput.addEventListener('blur', () => {
    if (!window.dropdownActive) {
        dropdownSearch.classList.remove('w3-show');
    }
});	
dropdownSearchInfo.addEventListener('mousedown', () => dropdownSearch.classList.remove('w3-show'));

// Menu boczne na telefonie
function nav_open() {
    const nav = document.getElementById("navigation");
    nav.style.display = "block";
}
  
function nav_close() {
    const nav = document.getElementById("navigation");
    nav.style.display = "none";
}

// Automatyczne przyklejanie się paska menu
var navbar = document.getElementById("navigation");
var stickyOffet = navbar.offsetTop;
window.addEventListener("scroll", function() {
    if (window.pageYOffset >= stickyOffet) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
});

// Automatyczne chowanie się paska menu
var prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function() {
    var mobileNavbar = document.getElementById("mobile-navbar");
    var navbar = document.getElementById("navigation");

    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        mobileNavbar.style.top = "0";
    } else if (currentScrollPos >= stickyOffet) {
        navbar.style.top = "-50px";
        mobileNavbar.style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
});
