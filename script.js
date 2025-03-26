"use strict";

let onFirstNum = true;
let num1 = 0;
let num2 = 0;
let operator = "add";
let display = document.querySelector(".numbersDisplay");
let evaluateBtn = document.querySelector("#eval");
let showOperator = document.querySelector(".showOperator");

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", reset);

let cases = document.querySelectorAll(".case");
cases.forEach(element => {
    element.addEventListener("click", () => {
        if(onFirstNum == false && num2 !== 0) {
            evaluate();
            operator = element.id;
            refreshNumberDisplay();
            return;
        }
        operator = element.id;
        onFirstNum = false;
        refreshNumberDisplay();
    });
});

let digits = document.querySelectorAll(".digit");
digits.forEach(element => {
    element.addEventListener("click", () => {
        if(onFirstNum) {
            getFirstNumber(element);
        } else {
            getSecondNumber(element);
        }
    });
});

evaluateBtn.addEventListener("click", evaluate);

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
            alert("operate() failed");
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

function refreshNumberDisplay() {
    if(onFirstNum) {
        display.textContent = num1;
    } else {
        refreshOperatorDisplay(operator);
        display.textContent = `${num1} ${showOperator.textContent} ${num2}`;
    }
}

function refreshOperatorDisplay(op) {
    if(op == "add") {
        showOperator.textContent = "+";
    } else if(op == "subtract") {
        showOperator.textContent = "-";
    } else if(op == "multiply") {
        showOperator.textContent = "*"
    } else if(op == "divide") {
        showOperator.textContent = "/"
    } else {
        alert("refreshOperatorDisplay failed")
    }
}

function getFirstNumber(element) {
    num1 == 0 ? num1 = element.id : num1 += element.id;
    refreshNumberDisplay();
}

function getSecondNumber(element) {
    num2 == 0 ? num2 = element.id : num2 += element.id;
    refreshNumberDisplay();
}

function evaluate() {
    if(num2 == 0) {
        return;
    }
    num1 = operate(+num1, +num2, operator);
    num2 = 0;
    if(num1 === Infinity) {
        num1 = 0;
    }

    if(!isInt(num1)) {
        num1 = num1.toFixed(1);
    }
    display.textContent = num1;
}

function reset() {
    onFirstNum = true;
    num1 = 0;
    num2 = 0;
    refreshNumberDisplay();
}

function isInt(n) {
    return n % 1 === 0;
}