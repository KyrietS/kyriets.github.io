// Side navigation
function nav_open() {
  var x = document.getElementById("navigation");
  x.style.display = "block";
}
  
function nav_close() {
  document.getElementById("navigation").style.display = "none";
}

var navbar = document.getElementById("navigation");
var stickyOffet = navbar.offsetTop;
window.addEventListener("scroll", function() {
    if (window.pageYOffset >= stickyOffet) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
});


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
