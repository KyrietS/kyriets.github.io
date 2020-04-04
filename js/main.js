// Side navigation
function nav_open() {
    var x = document.getElementById("navigation");
    x.style.display = "block";
  }
  
  function nav_close() {
    document.getElementById("navigation").style.display = "none";
  }


  // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

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

// // Get the navbar
// var navbar = document.getElementById("navigation");
// var mobileNavbar = document.getElementById("mobile-navbar");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky")
//     } else {
//       navbar.classList.remove("sticky");
//     }
//   }

//   var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     navbar.style.top = "0";
//     this.navbar.classList.add("sticky");
//   } else {
//     navbar.style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }