"use strict";

let num1 = 32;
let num2 = 13;
let operator = "add";
let cases = document.querySelectorAll(".case");
cases.forEach(element => {
    element.addEventListener("click", () => {
        operator = element.id;
        console.log(operator);
    });
});
console.log(cases);

function operate(a, b, op) {
    switch (op) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
        default:
            console.log("operate() failed");
            break;
    }
}

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
    return a / b;
}