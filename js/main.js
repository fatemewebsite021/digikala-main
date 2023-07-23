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



$(document).ready(function() {
    $('.amazing-suggest-container').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:5000,
        rtl: true,
        responsive: {
            0:{
                items: 1
            },
            450:{
                items: 2
            },
            992:{
                items: 3
            },

            1400: {
                items: 4
            },
            1600: {
                items: 5
            }
            
        }
    })


    $('.special-suggest-container').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout:5000,
        rtl: true,
        responsive: {
            0:{
                items: 1
            },
            450:{
                items:2
            },
            992: {
                items: 3
            },
            1200:{
                items: 4
            },
            1400:{
                items: 5
            },
            
        }
    })
});

/////////////////////

const targetElements = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
});

targetElements.forEach(element => {
  observer.observe(element);
});

//////////////////////
    // JavaScript code to handle the hover effect
    var images = document.querySelectorAll('.banner a img');

    images.forEach(function(img) {
      img.addEventListener('mouseover', function() {
        img.style.transform = 'rotate(3deg) scale(1.25)';
      });
    
      img.addEventListener('mouseout', function() {
        img.style.transform = 'none';
      });
    });
    