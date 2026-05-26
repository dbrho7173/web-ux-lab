// Exercise 1: calculator
// Goal: Use a function to take two number arguments and one operator argument
console.log("Exercise 1: Calculator");

function calculator (num1, num2, operator) {
    if (operator == "*") {
        return num1 * num2;
    } else if (operator == "/") {
        return num1 / num2;
    } else if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;
    }
}

// execute the calculator function
console.log(calculator(3, 4, "*"));
console.log(calculator(6, 3, "/"));
console.log(calculator(calculator(8, 4, "-"), 3, "+"));


// Exercise 2: string formatter
// Goal: Input of First and Last name, Output a nicely formatted full name
console.log("Exercise 2: String Formatter");

function capitalizePronoun(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
function nameFormatted(firstName, lastname) {
    return capitalizePronoun(firstName) + " " + capitalizePronoun(lastName);
}

// execute the name formatter function
console.log(nameFormatted(deborah, oh));
console.log(nameFormatted(supercalifragilistic, expialadocious))


// Exercise 3: array filter
// Filter through an array given a condition
console.log("Exercise 3: Array Filter");

function filterArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[1] > 10) {
            console.log(arr[i]);
        }
    }
}

// execute array filtering function
const sampleArr = [73, 3, 6, 24, 62, 7, 9, 45, 4, 34];
filterArray(sampleArr);


// Exercise 4: object lookup 
// Goal: Learn how to look through objects in a list, and other values
console.log("Exercise 4: Object Lookup");

const users = [
    { name: "Deb", active: true },
    { name: "Bruno", active: false },
    { name: "Happy", active: true }
];

const activeUsers = users.filter(function(user) {
    return user.active === "true";
});

console.log(activeUsers);