let navbar          = document.getElementById("navbar");
let navbarCollapse  = document.getElementById("navbarSupportedContent");
let bottomNav       = document.getElementById("navbar-bottom");

function myFunction(x) {
    if (x.matches) { 
      navbarCollapse.appendChild(bottomNav);
    } else {
      navbar.appendChild(bottomNav);
    }
  }
  
  var x = window.matchMedia("(max-width: 992px)")
  myFunction(x) 
  x.addEventListener("change" , myFunction)
