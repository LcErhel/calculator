"use strict";

let firstOperand;
let secondOperand;
let operator;

function operate(operation, a, b) {
    return operation(a, b);
}

console.log(operate(add, 12, 11));


function add (a, b) {
    return a + b;
}

function substract (a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

