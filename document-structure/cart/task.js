const products = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

function updateCartProduct(productId, quantity) {
    const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
    
    if (cartProduct) {
        const countElement = cartProduct.querySelector('.cart__product-count');
        const currentCount = parseInt(countElement.textContent);
        countElement.textContent = currentCount + quantity;
    } else {
        const product = document.querySelector(`.product[data-id="${productId}"]`);
        const productImage = product.querySelector('.product__image').src;
        const productQuantity = product.querySelector('.product__quantity-value').textContent;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart__product';
        cartItem.setAttribute('data-id', productId);
        
        cartItem.innerHTML = `
            <img class="cart__product-image" src="${productImage}">
            <div class="cart__product-count">${productQuantity}</div>
        `;
        
        cart.appendChild(cartItem);
    }
}

products.forEach(product => {
    const productId = product.dataset.id;
    const decButton = product.querySelector('.product__quantity-control_dec');
    const incButton = product.querySelector('.product__quantity-control_inc');
    const quantityValue = product.querySelector('.product__quantity-value');
    const addButton = product.querySelector('.product__add');
    
    decButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityValue.textContent);
        if (currentValue > 1) {
            quantityValue.textContent = currentValue - 1;
        }
    });
    
    incButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityValue.textContent);
        quantityValue.textContent = currentValue + 1;
    });
    
    addButton.addEventListener('click', () => {
        const quantity = parseInt(quantityValue.textContent);
        updateCartProduct(productId, quantity);
        
        const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
        if (cartProduct) {
            cartProduct.style.transform = 'scale(1.05)';
            setTimeout(() => {
                cartProduct.style.transform = 'scale(1)';
            }, 200);
        }
    });
});