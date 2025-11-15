const numbers = document.querySelectorAll(".number");
const display = document.getElementById("display");
const operators = document.querySelectorAll(".operator");

let firstNumber = "";
let selectedOperator = "";
let secondNumber = "";

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        firstNumber += number.textContent;
        display.textContent = firstNumber;
    });
});

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate() {
    switch(selectedOperator) {
        case "add":
            add(firstNumber, secondNumber);
            break;
        case "subtract":
            subtract(firstNumber, secondNumber);
            break;
        case "multiply":
            multiply(firstNumber, secondNumber);
            break;
        case "divide":
            divide(firstNumber, secondNumber);
            break;
    };
};

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        selectedOperator = operator.id;
    });
});