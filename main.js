// Ottieni riferenze agli elementi HTML
const cart = document.getElementById('cart');
const products = document.getElementById('products');
const clearCartButton = document.getElementById('clear-cart');
const total = document.getElementById('total');

// Inizializza il carrello come un array
const cartItems = [];

// Aggiungi un evento di clic a tutti i pulsanti "Aggiungi al Carrello"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Aggiungi un evento di clic per svuotare il carrello
clearCartButton.addEventListener('click', clearCart);

function addToCart(event) {
    const product = event.target.parentElement;
    const productName = product.getAttribute('data-name');
    const productPrice = parseFloat(product.getAttribute('data-price'));

    // Aggiungi il prodotto al carrello
    cartItems.push({ name: productName, price: productPrice });

    // Aggiorna l'elenco del carrello e il totale
    displayCart();
}

function clearCart() {
    // Svuota il carrello e aggiorna l'elenco
    cartItems.length = 0;
    displayCart();
}

function displayCart() {
    cart.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cart.appendChild(listItem);
        totalPrice += item.price;
    });

    total.textContent = totalPrice.toFixed(2);
}
