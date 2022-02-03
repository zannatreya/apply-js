// let num1 = 500;
// let num2 = 50;
// let num3 = 300;

// if ((num1 < num2) && (num1 < num3)) {
//     console.log(num1 + " is smallest");
// }
// else if ((num2 < num1) && (num2 < num3)) {
//     console.log(num2 + " is smallest");
// }
// else {
//     console.log(num3 + " is smallest");
// }

function findSmallestNumber(numbers) {
    var smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}
const numbers = [23, 43, 33, 54, 76, 3, 12, 98, 45, 65];
var smallest = findSmallestNumber(numbers);
console.log('smallest number is: ', smallest);
