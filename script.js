// script.js

// Shopping cart functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log('Product added to cart:', product);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    console.log('Product removed from cart:', productId);
}

function viewCart() {
    console.log('Current cart:', cart);
}

// Product filtering functionality
let products = [
    { id: 1, name: 'Product A', category: 'Electronics' },
    { id: 2, name: 'Product B', category: 'Clothing' },
    { id: 3, name: 'Product C', category: 'Home' },
];

function filterProducts(category) {
    return products.filter(product => product.category === category);
}

// Interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-to-cart-btn');
    const productSelect = document.getElementById('product-select');

    addButton.addEventListener('click', () => {
        const selectedProduct = products.find(product => product.id === parseInt(productSelect.value));
        addToCart(selectedProduct);
    });

    // Example usage of filtering
    const filteredProducts = filterProducts('Electronics');
    console.log('Filtered Products:', filteredProducts);
});

// Export functions for testing
module.exports = { addToCart, removeFromCart, viewCart, filterProducts };