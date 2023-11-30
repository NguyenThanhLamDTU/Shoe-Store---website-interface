$(document).ready(function () {
    // Sample product data (you can replace this with your actual product data)
    const products = [
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 19.99 },
        { id: 3, name: 'Product 3', price: 7.49 },
    ];

    // Initialize cart
    const cart = [];

    // Function to update the cart summary
    function updateCart() {
        const cartItems = $('#cart-items');
        const cartTotal = $('#cart-total');
        let total = 0;

        cartItems.empty();

        cart.forEach(item => {
            total += item.price;
            cartItems.append(`<li>${item.name} - $${item.price.toFixed(2)}</li>`);
        });

        cartTotal.text(`$${total.toFixed(2)}`);
    }

    // Function to add a product to the cart
    function addToCart(product) {
        cart.push(product);
        updateCart();
    }

    // Populate product list
    const productContainer = $('.product-list');
    products.forEach(product => {
        const productCard = $(`<div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">$${product.price.toFixed(2)}</p>
                <button class="btn btn-primary add-to-cart">Add to Cart</button>
            </div>
        </div>`);

        productCard.find('.add-to-cart').click(() => addToCart(product));
        productContainer.append(productCard);
    });

    // Checkout button click event
    $('#checkout-btn').click(() => {
        // Implement your checkout logic here
        alert('Checkout logic goes here.');
    });
});
