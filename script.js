const numbers = document.querySelectorAll(".number");
const display = document.getElementById("display");

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
        case "plus":
            add(firstNumber, secondNumber);
            break;
        case "minus":
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

