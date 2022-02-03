const phones = [
    { name: 'samsung s4', price: 23000, camera: 10, storage: 12 },
    { name: 'saomi m5', price: 33000, camera: 11, storage: 10 },
    { name: 'realme r3', price: 21000, camera: 12, storage: 11 },
    { name: 'nokia n2', price: 45000, camera: 14, storage: 5 },
    { name: 'walton primo', price: 2000, camera: 15, storage: 2 }
];
let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);