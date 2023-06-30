"use strict";

let decimal = document.querySelector("#float");
decimal.addEventListener("click", () => {
    if (block == true) {
        return;
    }
    let chars = input.innerHTML.split("");
    for (let char of chars) {
        if (char == ".") {
            block = true;
            return;
        }
    }
    input.textContent += ".";
});

let equal = document.querySelector(".rightPanel");
equal.addEventListener("click", () => {
    if (aOperand == null && input.textContent == "") {
        return;
    } else if (aOperand !== null && input.textContent !== "") {
        bOperand = Number(input.textContent);
    } else if (aOperand !== null && bOperand == null) {
        operate(aOperand)
    } else {
        return;
    }

    if (bOperand == 0 && oper == "/") {
        console.log(aOperand, bOperand, oper);
        clear();
        input.textContent = "rip";
    }

    operate(aOperand, bOperand, oper);
});

let clearBtn = document.querySelector("#clear")
clearBtn.addEventListener("click", () => {
    clear();
});

let input = document.querySelector(".input");

//

let numbers = document.getElementsByClassName("number");

for (let number of numbers) {
    number.addEventListener("click", () => {
        if (input.textContent == "Infinity" || input.textContent == "NaN" || input.textContent == "rip") {
            input.textContent = "";
        }
        input.innerHTML += number.textContent;
    });
}

//

let operators = document.getElementsByClassName("operator");

for(let operator of operators) {
    operator.addEventListener("click", () => {
        if (oper !== null) {
            return;
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
let block = false;

function operate(a, b = 0, op = "+") {
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
    return refresh(Math.round(result*100)/100);
}

function refresh(a) {
    aOperand = a;
    input.innerHTML = a;
    bOperand = null;
    oper = null;
    block = false;
}

function clear () {
    aOperand = null;
    bOperand = null;
    oper = null;
    input.textContent = "";
    block = false;
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