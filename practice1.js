// //add 3 numbers
// function addNumber(x, y, z) {
//     return x + y + z;
// }
// let total = addNumber(5, 6, 7);
// console.log('total number is: ', total);

// //show 1 to 100 number 
// // let num = 100;
// // for (let i = 1; i <= num; i++) {
// //     console.log(i);
// // }

// //odd number between 50 to 80

// function oddNumber(number) {
//     for (let i = 50; i <= number; i++) {
//         if (i % 2 != 0) {
//             console.log(i);
//         }

//     }
// }
// console.log(oddNumber(80));

// // function oddNumber(number) {
// //     for (let i = 51; i <= number; i += 2) {
// //         console.log(i);
// //     }
// // }
// // console.log(oddNumber(80));

// //celsius to farenheight

// // cels = (fahr - 32.0) * 5.0/9.0; //Fahr to cels
// // fahr = (cels * 9.0/5.0) + 32.0; //Cels to fahr 

// function fToC(cels) {
//     return fahr = (cels * 9.0 / 5.0) + 32.0;
// }
// console.log(fToC(37));

// function farenheightToCelsius(faren) {
//     let celc = 5.0 / 9.0 * (faren - 32);
//     return celc;
// }
// let temp = 98.6;
// console.log(farenheightToCelsius(temp));

//grade system

function gradeCheck(marks) {
    let marksNumber = marks;
    if (marks < 0 || marks > 100) {
        return "Wrong Entry";
    }
    else if (marks < 50) {
        console.log("Grade F");
    }
    else if (marks >= 50 && marks < 60) {
        console.log("Grade D");
    }
    else if (marks >= 60 && marks < 70) {
        console.log("Grade C");
    }
    else if (marks >= 70 && marks < 80) {
        console.log("Grade B");
    }
    else if (marks >= 80 && marks < 90) {
        console.log("Grade A");
    }
    else {
        console.log("Grade A+");
    }
}

let myMarks = 51;
var myGrade = gradeCheck(myMarks);
console.log(gradeCheck);

//check interest

function checkInterest(principle, time, rate) {
    let simpleInterest = (principle * time * rate) / 100;
    return simpleInterest;
}
console.log(checkInterest(15, 12, 12));