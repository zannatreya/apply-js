let num1 = 500;
let num2 = 50;
let num3 = 300;

if ((num1 < num2) && (num1 < num3)) {
    console.log(num1 + " is smallest");
}
else if ((num2 < num1) && (num2 < num3)) {
    console.log(num2 + " is smallest");
}
else {
    console.log(num3 + " is smallest");
}