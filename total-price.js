const products = [
    { name: 'laptop', price: 55000 },
    { name: 'shirt', price: 2000 },
    { name: 'mobile', price: 14000 },
    { name: 'watch', price: 3000 }
];
let totalPrice = 0;
for (const product of products) {
    totalPrice += product.price;
}
// console.log(totalPrice);

const cart = [
    { name: 'laptop', price: 55000, quantity: 2 },
    { name: 'shirt', price: 2000, quantity: 3 },
    { name: 'mobile', price: 14000, quantity: 1 },
    { name: 'watch', price: 3000, quantity: 4 }
];
let totalCart = 0;
for (const product of cart) {
    const productTotal = product.price * product.quantity;
    totalCart += productTotal;
}
console.log(totalCart);