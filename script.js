document.addEventListener('DOMContentLoaded', () => {

    // 1. EFECTO SMOOTH SCROLL PARA EL BOTÓN DEL HERO
    const scrollBtn = document.querySelector('.btn-scroll');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // 2. SISTEMA INTERACTIVO DE ACORDEÓN PARA LAS PREGUNTAS FRECUENTES (FAQ)
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const content = this.nextElementSibling;
            
            // Verificar si el elemento clickeado ya está activo
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los otros acordeones abiertos opcionalmente
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.accordion-content').style.maxHeight = null;
            });

            // Si no estaba activo, abrirlo
            if (!isActive) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // 3. EVENTO CLIC FICTICIO EN EL CONTENEDOR DE VIDEO
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => {
            alert('¡Simulación de Video! Aquí Diego podrá meter un embed de YouTube, Vimeo o Loom mostrando su Skool por dentro.');
        });
    }
});
