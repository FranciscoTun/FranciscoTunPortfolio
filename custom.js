window.addEventListener('scroll', function() {
    const banner = document.querySelector('.banner-section');
    const scrollPosition = window.scrollY;
    const bannerHeight = banner.offsetHeight;
    
    // Definir los colores de inicio y fin
    const startColor = [117, 158, 240];  // #759ef0
    const endColor = [11, 17, 93];       // #0b115d
    
    // Calcular el porcentaje de desplazamiento
    const scrollPercent = Math.min(scrollPosition / bannerHeight, 1);
    
    // Interpolar los colores
    const newColor = startColor.map((start, i) => {
        return Math.round(start + (endColor[i] - start) * scrollPercent);
    });

    // Convertir el color a formato RGB
    const newColorString = `rgb(${newColor.join(',')})`;

    // Aplicar el nuevo color al fondo
    banner.style.backgroundColor = newColorString;
});
