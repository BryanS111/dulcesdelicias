
let cart = [];
let total = 0;


function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}


function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.informacion button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('p:first-child').textContent;
            const priceText = product.querySelector('.precio').textContent;
            const price = parseFloat(priceText.replace('$', '').replace(',', ''));
            addToCart(productName, price);




document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.informacion button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('p:first-child').textContent;
            const priceText = product.querySelector('.precio').textContent;
            const price = parseFloat(priceText.replace('$', '').replace(',', ''));
            addToCart(productName, price);
        });
    });
});

function addToCart(productName, price) {
    const cartItems = document.getElementById('cart-items');

    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - $${price.toFixed(2)}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.style.marginLeft = '10px'; 
    deleteButton.addEventListener('click', () => {
        cartItem.remove();
        updateCartTotal();
    });

    cartItem.appendChild(deleteButton);

    cartItems.appendChild(cartItem);
    updateCartTotal();
}

function updateCartTotal() {
    const cartItems = document.querySelectorAll('#cart-items li');
    let total = 0;

    cartItems.forEach(item => {
        const priceText = item.textContent.split(' - $')[1];
        const price = parseFloat(priceText);
        total += price;
    });

    document.getElementById('cart-total').textContent = total.toFixed(2);
}






        });
    });
});
