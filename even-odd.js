
// function evenOrOdd(numbers) {
//     if (numbers % 2 == 0) {
//         return "even";
//     }
//     else {
//         return "odd";

//     }
// }
// const number = evenOrOdd(6);
// console.log(number);


function printEven(num) {
    for (let i = 1; i < num; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
printEven(8);

function printOdd(num) {
    for (let i = 1; i < num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printOdd(9);
// function isEven(number) {
//     if (number % 2 == 0) {
//         return true;
//     }
//     return false;
// }
// const myNumber = 1641;
// const isMyNumberEven = isEven(myNumber);
// console.log('is my number even ', isMyNumberEven);