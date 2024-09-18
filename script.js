// Función para mostrar el menú
function toggleMenu() {
    const menu = document.getElementById('menu');
    const main = document.querySelector('main');

    if (menu.style.left === '0px') {
        menu.style.left = '-220px';
        main.style.marginLeft = '20px';
    } else {
        menu.style.left = '0px';
        main.style.marginLeft = '220px';
    }
}
