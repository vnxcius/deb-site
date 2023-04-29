function setActiveNavItem() {
  const nav = document.getElementById('nav');
  const fromTop = window.scrollY;

  if (fromTop > 0) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}


window.addEventListener('scroll', setActiveNavItem);



const img = document.querySelectorAll('.img');

img.forEach(img => {
  img.addEventListener('click', function () {

    // Create a div element to display the fullscreen image
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.classList.add('fullscreen');

    // Create an img element for the fullscreen image
    const fullscreenImg = document.createElement('img');
    fullscreenImg.src = this.src;
    fullscreenImg.alt = this.alt;
    fullscreenDiv.appendChild(fullscreenImg);

    // Add the fullscreen div to the document body
    document.body.appendChild(fullscreenDiv);

    // Stop scrolling
    document.body.style.overflowY = 'hidden';

    // Add a click event listener to the fullscreen div to remove it when clicked
    fullscreenDiv.addEventListener('click', function () {
      document.body.removeChild(this);
      document.body.style.overflowY = 'visible';

    });
  });
});



