// const sum = (a, b) => {
//     return a + b;
// };
// console.log(sum(1,4));

// return true if the number is less than true using arrow function

const prompt = require('prompt-sync')();

const a = parseInt(prompt("enter first number"))
const b = parseInt(prompt("enter second number"))

const sum = (a, b) => {
    let c = a + b;

    if (c <= 100) {
        console.log(a, b + " is less than 100");
        return true;
    } else {
        console.log(a, b + " is not less than 100")
        return false;
    }

};
console.log(sum(a, b));
