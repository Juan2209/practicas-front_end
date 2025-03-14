const hamburuesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('navegacion a');
const fecha = document.querySelector('.fecha');
console.log(enlaces);

document.addEventListener('DOMContentLoaded', () => {
    mostrarMenu();
    cerrarMenu();
    fechaAcutal();
});
function mostrarMenu() {
    hamburuesa.addEventListener('click', () => {
        navegacion.classList.toggle('ocultar');
    });
}
function cerrarMenu() {
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            cambioSeccion();

            if (e.target.tagName === 'A') {
                navegacion.classList.add('ocultar');
            }
        });
    });
}
function cambioSeccion() {
    cambioSeccion.scrollIntoView({ behavior: 'smooth' });
}
function fechaAcutal() {
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}