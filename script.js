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

const numbers = document.querySelectorAll(".number");
const display = document.getElementById("display");
const operators = document.querySelectorAll(".operator");

let firstNumber = "";
let selectedOperator = "";
let secondNumber = "";

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (selectedOperator == "") {
            firstNumber += number.textContent;
            display.textContent = firstNumber;
        } else {
            secondNumber += number.textContent;
            display.textContent = secondNumber;
        };
    });
});

function operate(firstNumber, selectedOperator, secondNumber) {
    switch(selectedOperator) {
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

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        selectedOperator = operator.id;
    });
});

document.addEventListener("keypress", () => {
    operate(firstNumber, selectedOperator, secondNumber);
});