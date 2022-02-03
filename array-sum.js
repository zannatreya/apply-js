const numbers = [23, 43, 54, 46, 76, 85, 32, 22, 12, 98];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const elements = numbers[i];
    sum = sum + elements;
}
console.log(sum);

function arrayTotal(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const elements = number[i];
        sum = sum + elements;
    }
    return sum;
}
let total = arrayTotal([23, 43, 56]);
console.log(total, Math.round(12.97));



//I koibar ace
var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter == 'w') {
        count++;
    }
}
console.log(count);

//





