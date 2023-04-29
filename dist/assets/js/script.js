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



