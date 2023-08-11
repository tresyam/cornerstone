const cart = [];
let products = [];

function displayProducts() {
    const productListing = document.getElementById('product-list');
    productListing.innerHTML = '';

    products.forEach(product => {
        productListing.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '<h2>Cart</h2>';
    let total = 0;

    cart.forEach(product => {
        total += product.price;
        cartElement.innerHTML += `
            <div class="cart-item">
                <p>${product.name} - $${product.price.toFixed(2)}</p>
            </div>
        `;
    });

    cartElement.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
}

// Fetch product data from JSON
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts();
    })
    .catch(error => console.error('Error fetching products:', error));

// Admin login (dummy implementation)
function adminLogin() {
    const adminLoginElement = document.getElementById('admin-login');
    adminLoginElement.innerHTML = `
        <h2>Admin Login</h2>
        <form>
            <input type="text" placeholder="Username">
            <input type="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
    `;
    // Fetch product data from JSON
fetch('products.json')
.then(response => response.json())
.then(data => {
    products = data;
    displayProducts();
})
.catch(error => console.error('Error fetching products:', error));

function displayProducts() {
const productListing = document.getElementById('product-list');
productListing.innerHTML = '';

products.forEach(product => {
    productListing.innerHTML += `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
});
}

}
