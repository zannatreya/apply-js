// const greetings = 'Hello, how are you?';

// function reverseString(text) {
//     let reverse = '';
//     for (const letter of text) {
//         reverse = letter + reverse;
//     }
// }
// const reversed = reverseString(greetings);
// console.log(reversed);


//diffrnt way
// function reverseString(string) {
//     console.log(string);
//     var newString = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         newString += string[i];
//     }
//     return newString;
// }
// var string = "heloo!!! hi";
// var reverse = reverseString(string);
// console.log(reverse);


//diffrnt way
function reverse(str) {
    console.log(str);
    return str.split("").reverse().join("");
}
console.log(reverse("hello !!"));

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
reverseString("hello");