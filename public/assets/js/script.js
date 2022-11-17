'use strict';




/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    const windowHeight = window.innerHeight;
    const revealtop = reveals[i].getBoundingClientRect().top;
    const revealpoint = 150;

    if(revealtop < windowHeight - revealpoint){
      reveals[i].classList.add('active');
    }
  }
}


function getPics() {
  
  let imgs = document.querySelectorAll('.image-gallery img');
  let fullPage = document.querySelector('#fullpage');
  let body = document.getElementById('top');
  
  // OPEN FULLSCREEN IMAGE FUNCTION
  imgs.forEach(img => {
    img.addEventListener('click', function () {
      body.style.overflow = 'hidden';
      fullPage.style.display = 'block';
    }); 
  });

  // X BUTTON TO CLOSE FULLSCREEN IMAGE
  let closeBtn = document.getElementById('closebtn');
  closeBtn.addEventListener("click", function (){
    fullPage.style.display = 'none';
    body.style.overflow = 'visible';
  });

  // IMAGE CAROUSEL LIST
  const buttons = document.querySelectorAll("[data-carousel-btn]")

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
      const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")
      ;

      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;

      if(newIndex < 0) newIndex = slides.children.length - 1;
      if(newIndex >= slides.children.length) newIndex = 0;

      //DELETES PREVIOUS IMAGE AND SET NEXT ACTIVE
      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    });
  });

};
 




/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});