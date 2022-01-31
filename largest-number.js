let num1 = 500;
let num2 = 700;
let num3 = 600;

if ((num1 > num2) && (num1 > num3)) {
    console.log(num1 + " is largest");
}
else if ((num2 > num1) && (num2 > num3)) {
    console.log(num2 + " is largest");
}
else {
    console.log(num3 + " is largest");
}