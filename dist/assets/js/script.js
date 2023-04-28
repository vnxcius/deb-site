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

function overflow() {// Get the element you want to modify
const container = document.getElementById('top');

// Listen for scroll events on the container
container.addEventListener('scroll', function() {
  // Check if the container has been scrolled horizontally
  if (container.scrollLeft > 0) {
    // Reset the overflow-x property to its default value
    container.style.overflowX = '';
  } else {
    // Set the overflow-x property to 'hidden' to disable horizontal scrolling
    container.style.overflowX = 'hidden';
  }
});}

window.addEventListener('scroll', overflow);

