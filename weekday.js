const prompt = require('prompt-sync')({sigint: true});

let yourNumber = Number(prompt("Enter a number: "));
let printResult = true;
let result = "";


if (yourNumber === 1){
     result = "Monday";
 } else if (yourNumber === 2){
     result = "Tuesday";
 } else if (yourNumber === 3){
     result = "Wednesday";
 } else if (yourNumber === 4){
     result = "Thursday";
 } else if (yourNumber === 5){
     result = "Friday";
 } else if (yourNumber === 6){
     result = "Saturday";
 } else if (yourNumber === 7){
     result = "Sunday";
 } else {
    console.log("error");
    printResult = false;
  }
if (printResult === true){
    console.log(result);
}






