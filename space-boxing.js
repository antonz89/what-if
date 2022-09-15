const prompt = require('prompt-sync')({sigint: true});

let yourWeight = Number(prompt("Enter your Earth weight: "));
console.log("Select a planet you're traveling to: 1 - Venus, 2 - Mars, 3 - Jupiter, 4 - Saturn, 5 - Uranus, 6 - Neptune:")
let planetNum = Number(prompt("> "));
let x = true; //error check

if (planetNum === 1){
    yourWeight = 0.78 * yourWeight + " lbs on Venus.";
} else if (planetNum === 2){
    yourWeight = 0.39 * yourWeight + " lbs on Mars.";
} else if (planetNum === 3){
    yourWeight = 2.65 * yourWeight + " lbs on Jupiter.";
} else if (planetNum === 4){
    yourWeight = 1.17 * yourWeight + " lbs on Saturn.";
} else if (planetNum === 5){
    yourWeight = 1.05 * yourWeight + " lbs on Uranus.";
} else if (planetNum === 6){
    yourWeight = 1.23 * yourWeight + " lbs on Neptune.";
} else {
    console.log("error")
    x = false;
}

if (x === true){
    console.log(yourWeight);
}
