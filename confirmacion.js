document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos del DOM
    const selectedCarImage = document.getElementById("selected-car-image");
    const selectedPrice = document.getElementById("selected-price");
    const userForm = document.getElementById("user-form");

    // Obtener datos del servicio seleccionado (puedes pasarlos como parámetros desde la página principal)
    const selectedService = {
        imageUrl: "img/mo1.png", // Reemplaza con la URL de la imagen del servicio seleccionado
        price: 20.00, // Reemplaza con el precio del servicio seleccionado
    };

    // Mostrar detalles del servicio seleccionado
    selectedCarImage.src = selectedService.imageUrl;
    selectedPrice.textContent = `Precio: $${selectedService.price.toFixed(2)}`;

    // Función para seleccionar otro servicio y regresar a la página principal
    window.selectAnotherService = function () {
        // Puedes redirigir a la página principal o realizar otras acciones aquí
        window.location.href = "index.html";
    };
});
