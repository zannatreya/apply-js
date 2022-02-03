// let num1 = 500;
// let num2 = 700;
// let num3 = 600;

// if ((num1 > num2) && (num1 > num3)) {
//     console.log(num1 + " is largest");
// }
// else if ((num2 > num1) && (num2 > num3)) {
//     console.log(num2 + " is largest");
// }
// else {
//     console.log(num3 + " is largest");
// // }
// function findLargest(num1, num2, num3) {
//     if ((num1 > num2) && (num1 > num3)) {
//         console.log(num1 + " is largest");
//         return num1;
//     }
//     else if ((num2 > num1) && (num2 > num3)) {
//         console.log(num2 + " is largest");
//         return num2;
//     }
//     else {
//         console.log(num3 + " is largest");
//         return num3;
//     }
// }
// var largest = findLargest(32, 65, 43);
// console.log("number is: " + largest);

// var numbers = [34, 12, 23, 22, 32, 45, 65, 33];
// function bigNumber(numArray) {
//     numArray.sort(function (a, b) { return a - b });
//     console.log(numArray);
//     return numArray[0];
// }
// var findLarge = bigNumber(numbers)
// console.log(findLarge);

function findLargest(numbers) {
    var largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const numbers = [23, 43, 33, 54, 76, 34, 12, 98, 45, 65];
var largest = findLargest(numbers);
console.log('largest number is: ', largest);


