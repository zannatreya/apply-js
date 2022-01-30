// function isLeapYear(year) {
//     if(year % 4 == 0) {
//         return "leap year";
//     }
//     return "not leap year";
// }

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0));
}


// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 == 0) {
//                 return ("Leap year.");
//             } else {
//                 return ("Not leap year.");
//             }
//         } else {
//             return ("Leap year.");
//         }
//     } else {
//         return ("Not leap year.");
//     }
// }

const year = 2024;
const leapYear = isLeapYear(year);
console.log(leapYear);