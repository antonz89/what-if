const prompt = require('prompt-sync')({sigint: true});

let yourNumber = Number(prompt("Enter your number: "));

//  3*5 = 15, yourNumber%15 divisible by 3 and 5
if (yourNumber % 15 === 0){
     console.log("fizzbuzz")
} else if (yourNumber % 5 === 0){
    console.log("buzz");
} else if (yourNumber % 3 === 0){
    console.log("fizz");
} else{
    console.log("Not divisible by 3 or 5");
}

// or 
// if (yourNumber % 3 === 0 && yourNumber % 5 === 0){    
//     console.log("fizzbuzz");


