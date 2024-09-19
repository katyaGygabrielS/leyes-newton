// Función para mostrar/ocultar el menú
function toggleMenu() {
    const menu = document.getElementById('menu');
    const main = document.querySelector('main');

    if (menu.style.left === '0px') {
        menu.style.left = '-240px'; // Esconde el menú
        main.style.marginLeft = '20px'; // Restaura el contenido principal
    } else {
        menu.style.left = '0px'; // Muestra el menú
        main.style.marginLeft = '240px'; // Ajusta el contenido principal
    }
}
