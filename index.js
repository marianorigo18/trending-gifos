const fila = document.querySelector('.contenedor__slider');
let btnLeft = document.querySelector('.button__slider--left');
let btnRight = document.querySelector('.button__slider--right');

btnRight.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

btnLeft.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});