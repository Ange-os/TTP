
const socialLinks = document.querySelectorAll('.social-icons a');
socialLinks.forEach(link => {
    link.addEventListener('click', shareOnSocialMedia);
});

function shareOnSocialMedia(e) {
    e.preventDefault();
    const url = this.href; 
    window.open(url, '_blank', 'width=600,height=400');
}



document.getElementById("btnEnviarWhatsApp").addEventListener("click", () => {
    const mensaje = document.getElementById('mensaje')

    let numero = "2664025070"; // Ingresa el número de teléfono aquí
    let texto = mensaje.value

            // Generar el enlace de WhatsApp
    var url = "https://api.whatsapp.com/send?phone=" + numero + "&text=" + encodeURIComponent(texto);

            // Abrir WhatsApp en una nueva pestaña
    window.open(url);
})

document.addEventListener('DOMContentLoaded', function() {
    var videoPortada = document.querySelector('.galeria-videos .video-portada');
    
        videoPortada.addEventListener('touchstart', function() {
        videoPortada.classList.add('hover');
        });
    
        videoPortada.addEventListener('touchend', function() {
        videoPortada.classList.remove('hover');
        });
    });