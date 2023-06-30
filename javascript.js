"use strict";

let clearBtn = document.querySelector("#clear")
clearBtn.addEventListener("click", () => {
    clear();
});

let input = document.querySelector(".input");

//

let numbers = document.getElementsByClassName("number");

for (let number of numbers) {
    number.addEventListener("click", () => {
        input.innerHTML += number.textContent;
    });
}

//

let operators = document.getElementsByClassName("operator");

for(let operator of operators) {
    operator.addEventListener("click", () => {
        if (oper !== null) {
            bOperand = Number(input.textContent);
            return operate(aOperand, bOperand, oper); 
        }
        aOperand = Number(input.textContent);
        input.textContent = "";
        oper = operator.textContent;
    });
}

//

let aOperand = null;
let bOperand = null;
let oper = null;

function operate(a, b, op) {
    let result;
    if (op == "+") {
        result = add(a, b);
    } else if (op == "-") {
        result = subtract(a, b);
    } else if (op == "*") {
        result = multiply(a, b);
    } else if (op == "/") {
        result = divide(a, b);
    } else {
        result = null;
        return console.log("operate broken");
    }
    aOperand = result;
    refresh();
    input.innerHTML = result;
    return result;
}

function refresh() {
    bOperand = null;
    oper = null;
}

function clear () {
    aOperand = null;
    bOperand = null;
    oper = null;
    input.textContent = "";
}

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