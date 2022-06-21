const menuBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('burger-btn_active')
    menu.classList.toggle('menu_active')
})