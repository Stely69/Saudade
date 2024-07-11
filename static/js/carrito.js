// Añade un artículo al carrito
function addToCart(item) {
    // Obtiene el carrito actual del localStorage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Añade el nuevo artículo al carrito
    cart.push(item);

    // Guarda el carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Obtiene los artículos del carrito
function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Muestra los artículos del carrito
function displayCartItems() {
    var cartItems = getCartItems();
    var cartElement = document.getElementById('cart');

    // Limpia el carrito
    cartElement.innerHTML = '';

    // Crea un nuevo elemento HTML para cada artículo en el carrito
    cartItems.forEach(function(item) {
        var itemElement = document.createElement('div');
        itemElement.textContent = item;
        cartElement.appendChild(itemElement);
    });
}

// Añade un evento de clic a cada botón "Agregar al carrito"
var addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var item = button.dataset.item;
        addToCart(item);
        displayCartItems();
    });
});