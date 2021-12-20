const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');
const close = document.querySelectorAll('.ham span');
const logoclosed = document.querySelector('.logo-mobile1');
const logoclosed1 = document.querySelector('.logo-mobile2');
const mobileImage = document.querySelector('.projects');

ham.addEventListener('click', () => {
  menu.classList.toggle('active');
  logoclosed.classList.toggle('active');
  logoclosed1.classList.toggle('active');
  mobileImage.style.backgroundImage = "url('images/mobile-menu-img.png')";
  close.forEach((child) => {
    child.classList.toggle('animated');
  });
});

// create a code to close the mobile menu when click on any link
const links = document.querySelectorAll('.link-sections');
links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    logoclosed.classList.remove('active');
    logoclosed1.classList.remove('active');
    mobileImage.style.backgroundImage = "url('images/landing2.png')";
    close.forEach((child) => {
      child.classList.remove('animated');
    });
  });
});