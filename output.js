"use strict";
function createProduct(name, price, pId) {
    let inCart = false;
    let isOrdered = false;
    function addToCart() {
        inCart = true;
    }
    function buyProduct() {
        if (inCart) {
            isOrdered = true;
            return `Product ${name} is ordered at ${price}`;
        }
        else {
            return 'No product in cart';
        }
    }
    return {
        name,
        price,
        pId,
        addToCart,
        buyProduct,
        getInCart: () => inCart,
        getIsOrdered: () => isOrdered
    };
}
// Usage
const product1 = createProduct('Samsung', 100000, 101);
product1.addToCart();
console.log(product1.buyProduct());
const product2 = createProduct('iPhone', 100000, 102);
product2.addToCart();
console.log(product2.buyProduct());
