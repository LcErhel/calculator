"use strict";

let onFirstNum = true;
let num1 = 0;
let num2 = 0;
let operator = "add";
let display = document.querySelector(".numbersDisplay");
let evaluate = document.querySelector("#eval");
let showOperator = document.querySelector(".showOperator");

let cases = document.querySelectorAll(".case");
console.log(cases);
cases.forEach(element => {
    element.addEventListener("click", () => {
        operator = element.id;
        onFirstNum = false;
        refreshOperatorDisplay()
        console.log(operator);
    });
});

let digits = document.querySelectorAll(".digit");
digits.forEach(element => {
    element.addEventListener("click", () => {
        // num1 == 0 ? num1 = element.id : num1 += element.id;
        if(onFirstNum) {
            getFirstNumber(element);
        } else {
            getSecondNumber(element);
        }
    });
});
console.log(digits);

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

evaluate.addEventListener("click", () => {
    num1 = operate(+num1, +num2, operator);
    num2 = 0;
    display.textContent = num1;
    console.log("check");
});

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

function refreshOperatorDisplay() {
    showOperator.textContent = operator;
}

function getFirstNumber(element) {
    num1 == 0 ? num1 = element.id : num1 += element.id;
    display.textContent = num1;
}

function getSecondNumber(element) {
    num2 == 0 ? num2 = element.id : num2 += element.id;
    display.textContent = `${num1} || ${num2}`;
}