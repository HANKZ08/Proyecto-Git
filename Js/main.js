document.addEventListener('DOMContentLoaded', () => {
    const preguntas = document.querySelectorAll('.pregunta');

    preguntas.forEach(pregunta => {
        pregunta.addEventListener('click', () => {
            const respuesta = pregunta.nextElementSibling;
            respuesta.classList.toggle('activa');
        });
    });
});