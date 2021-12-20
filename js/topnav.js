// Declare the variables
const navbar = document.querySelector('.navbar');
const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');
const close = document.querySelectorAll('.ham').children;
const mobileImage = document.querySelector('.background-image');
const links = document.querySelectorAll('.link-sections');

// Mobile Menu Function
ham.addEventListener('click', () => {
  ham.classList.toggle('active');
  menu.classList.toggle('active');
  navbar.classList.toggle('active');
  mobileImage.style.backgroundImage = "url('images/mobile-menu-img.png')";
  close.forEach((child) => {
    child.classList.toggle('animated');
    child.classList.toggle('fadeIn');
  });
});
// create a code to close the mobile menu when click on any link
links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    navbar.classList.remove('active');
    mobileImage.style.backgroundImage = 'none';
    close.forEach((child) => {
      child.classList.remove('animated');
    });
  });
});