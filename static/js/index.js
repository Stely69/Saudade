// Esta función se encarga de redirigir a otra página
function redirectPage() {
    window.location.href = '{{ url_for("index") }}'; // Esto es un marcador de posición, debe ser reemplazado con la URL adecuada
}

// Esta función se ejecuta después de un cierto tiempo (3 segundos en este caso)
setTimeout(function(){
    // Agrega una clase CSS para animar una transición de fade-out suave
    document.body.classList.add('fade-out');
    // Luego de 1 segundo (1000 milisegundos), llama a la función redirectPage para redirigir
    setTimeout(redirectPage, 1000);
}, 3000); // Espera 3 segundos antes de ejecutar el código dentro de setTimeout
