// var fact = 1;
// for (var i = 1; i <= 5; i++) {
//     var fact = fact * i;
// }
// console.log(fact);

// function getFactorial(num) {
//     var fact = 1;
//     for (var i = 1; i <= num; i++) {
//         var fact = fact * i;
//     }
//     return fact;
// }
// var fact = getFactorial(5);
// console.log(fact);

function getFactorial(num) {
    var fact = 1;
    var i = 1;
    while (i <= num) {
        fact = fact * i;
        i++;
    }
    return fact;
}
var fact = getFactorial(5);
console.log(fact);