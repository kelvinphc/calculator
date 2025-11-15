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