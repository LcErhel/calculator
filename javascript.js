"use strict";

function createInterface() {
    createResult();
    createKeypadNumbers();
    createKeypadOperators();
}

function createResult() {
    let result = document.createElement("div");
    result.classList.add("result");
    result.textContent = "currentResult";
    document.body.appendChild(result);
}

function createKeypadNumbers() {
    let numpad = document.createElement("div");
    numpad.classList.add("numbers")
    numpad.textContent = "currentNumpad"
    document.body.appendChild(numpad);
    for (let i = 0; i < 10; i++) {
        let current = customElement("div", "number", i);
        // let current = document.createElement("div");
        // current.classList.add("number")
        // current.id = i;
        // current.textContent = i;
        numpad.appendChild(current);
    }
}

function createKeypadOperators() {
    let keypad = document.createElement("div");
    keypad.classList.add("operators");


    // let plus = customElement("div", "operator", "+");
    // let minus = customElement("div", "operator", "-");
    // let multiply = customElement("div", "operator", "*");
    // let divide = customElement("div", "operator", "/");
    
    // keypad.appendChild(plus);
    // keypad.appendChild(minus);
    // keypad.appendChild(multiply);
    // keypad.appendChild(divide);

    keypad.appendChild(customElement("div", "operator", "+"));
    keypad.appendChild(customElement("div", "operator", "-"));
    keypad.appendChild(customElement("div", "operator", "*"));
    keypad.appendChild(customElement("div", "operator", "/"));
    document.body.appendChild(keypad);
}

function customElement(type = "", style = "", id = null) {
    const current = document.createElement(type);
    current.classList.add(style);
    current.id = id;
    current.textContent = id;
    return current;
}

createInterface();

/******************************************************************* */

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
