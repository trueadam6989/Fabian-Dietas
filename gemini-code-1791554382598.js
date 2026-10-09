// Esperar a que el DOM cargue por completo
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleInfoBtn');
    const extraInfo = document.getElementById('extraInfo');

    if (toggleBtn && extraInfo) {
        toggleBtn.addEventListener('click', () => {
            // Alternar la clase 'show' para desplegar u ocultar la información
            extraInfo.classList.toggle('show');

            // Cambiar dinámicamente el texto del botón según el estado
            if (extraInfo.classList.contains('show')) {
                toggleBtn.textContent = 'Ocultar Contexto Histórico';
            } else {
                toggleBtn.textContent = 'Mostrar Contexto Histórico';
            }
        });
    }
});