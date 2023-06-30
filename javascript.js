"use strict";



//

let firstOperand = 12;
let secondOperand = 4;
let operator = "/";

function operate(a, b, op) {
    if (op == "+") {
        return add(a, b);
    } else if (op == "-") {
        return subtract(a, b);
    } else if (op == "*") {
        return multiply(a, b);
    } else if (op == "/") {
        return divide(a, b);
    } else {
        return console.log("operate broken");
    }
}

console.log(operate(firstOperand, secondOperand, operator));

//

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