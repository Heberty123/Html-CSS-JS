const botaoMenu = document.querySelector('.menu_img')
const menu = document.querySelector('.menu_mobile');

menu.classList.toggle('menu_mobile-ativo');
function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    menu.classList.toggle('menu_mobile-ativo');

}

botaoMenu.addEventListener('click', toggleMenu);
botaoMenu.addEventListener('touchstart', toggleMenu);