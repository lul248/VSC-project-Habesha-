
const menu = document.querySelector('nav ul');

const open = document.querySelector('.open_nav');
const close = document.querySelector('.close_nav');



open.addEventListener('click', () => {

   
    menu.style.display= "flex";
    open.style.display="none";
    close.style.display="block";

});
close.addEventListener('click', () => {

   
    close.style.display= "none";
    open.style.display="block";
    menu.style.display="none";
   
});

