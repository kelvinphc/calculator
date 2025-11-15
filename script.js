const numbers = document.querySelectorAll(".number");
const display = document.getElementById("display");
const operators = document.querySelectorAll(".operator");

let firstNumber = "";
let currentOperator = "";
let secondNumber = "";
let previousOperator = "";

function add(a, b) {
    firstNumber = a + b;
    display.textContent = firstNumber;
};

function subtract(a, b) {
    firstNumber = a - b;
    display.textContent = firstNumber;
};

function multiply(a, b) {
    firstNumber = a * b;
    display.textContent = firstNumber;
};

function divide(a, b) {
    firstNumber = a / b;
    display.textContent = firstNumber;
};

function operate(firstNumber, operator, secondNumber) {
    switch(operator) {
        case "add":
            add(Number(firstNumber), Number(secondNumber));
            break;
        case "subtract":
            subtract(Number(firstNumber), Number(secondNumber));
            break;
        case "multiply":
            multiply(Number(firstNumber), Number(secondNumber));
            break;
        case "divide":
            divide(Number(firstNumber), Number(secondNumber));
            break;
    };
};

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (currentOperator == "") {
            firstNumber += number.textContent;
            display.textContent = firstNumber;
        } else {
            secondNumber += number.textContent;
            display.textContent = secondNumber;
        };
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        previousOperator = currentOperator;
        currentOperator = operator.id;
        if (secondNumber != "") {
            operate(firstNumber, previousOperator, secondNumber);
            secondNumber = "";
        } else {
            secondNumber = "";
        };
    });
});