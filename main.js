// 1.Your name (string)
const name = "Anne";
// 2. Your age (number)
const age = 35;
// 3. Whether you are a student (boolean)
const isStudent = true;
// 4. Your favorite colors (array)
const favoriteColors = ["blue", "green", "red"];
// 5. Today's date (Date object)
const today = new Date();

// Display each variable in the console
console.log("name:",name);
console.log("age:", age);
console.log("isStudent:", isStudent);
console.log("favoriteColors:", favoriteColors);
console.log("today:", today);

// My age in days
const ageInDays = 35 * 365; // Assuming no leap years for simplicity
console.log("My age in days:", ageInDays);

// My age in hours
const ageInHours = ageInDays * 24;
console.log("My age in hours:", ageInHours);

//The year I turn 100
const yearTurn100 = today.getFullYear() + (100 - 35);
console.log("The year I turn 100:", yearTurn100);

//Build: A function calculateTip(bill, tipPercent = 15) that returns the tip amount.
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}
console.log("Tip for $100 bill at 20% tip percent:", calculateTip(100, 20));
console.log("Tip for $100 bill at default 15% tip percent:", calculateTip(100));

//Print numbers 1-100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//Print only even numbers from 1-50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//print FizzBuzz (print "Fizz" for multiples of 3, "Buzz" for 5, "FizzBuzz" for both)
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

// print a pyramid of stars with 10 rows
    for (let j = 1; j <= 5; j++) {
        let stars = "";
        for (let k = 1; k <= j; k++) {
            stars += "*";
        }
        console.log(stars);
    }
}

//Build an interactive calculator that can perform addition, subtraction, multiplication, and division. The calculator should take two numbers and an operator as input and return the result.  
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}
    
// Test
console.log(calculate(10, "+", 5));  // 15
console.log(calculate(10, "-", 5));  // 5
console.log(calculate(10, "*", 5));  // 50
console.log(calculate(10, "/", 5));  // 2
console.log(calculate(10, "/", 0));  // Error message

