// Declare the variables
const navbar = document.querySelector('.navbar');
const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');
const close = document.querySelectorAll('.ham span');
// const mobileImage = document.querySelector('.mobile-image');
// const menuImage = document.querySelector('.menu-image');
const links = document.querySelectorAll('.link-sections');

// Mobile Menu Function
ham.addEventListener('click', () => {
  menu.classList.toggle('active');
  navbar.classList.toggle('active');
  // mobileImage.style.backgroundImage = 'none';
  // menuImage.style.backgroundImage = "url('images/mobile-menu-project1.png')";
  close.forEach((child) => {
    child.classList.toggle('animated');
  });
});

// create a code to close the mobile menu when click on any link
links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    navbar.classList.remove('active');
    // mobileImage.style.backgroundImage = 'none';
    close.forEach((child) => {
      child.classList.remove('animated');
    });
  });
});
