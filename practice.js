// leap year

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0));
}

const year = 2020;
const leapYear = isLeapYear(year);
console.log(leapYear);

//odd even

function isOddOrEven(num) {
    if (num % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
const number = 2021;
const num = isOddOrEven(number);
console.log('the number is: ', num);

//inch to feet

function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}
const inches = 24;
const feet = inchToFeet(inches);
console.log('the feet is: ', feet);

//mile to km

function mileToKm(miles) {
    var km = miles * 1.60934;
    return km;
}
const miles = 20;
const km = mileToKm(miles);
console.log('the km is: ', km);

//factorial
var factorial = 1;
function getFactorial(num) {
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var num1 = 3;
var factorial = getFactorial(num1);
console.log('factorial is: ', factorial);