const numbers = document.querySelectorAll(".number");
const display = document.getElementById("display");
const operators = document.querySelectorAll(".operator");
const clear = document.getElementById("clear");
const deleteButton = document.getElementById("delete");

let firstNumber = "";
let currentOperator = "";
let secondNumber = "";
let previousOperator = "";

function add(a, b) {
    firstNumber = a + b;
};

function subtract(a, b) {
    firstNumber = a - b;
};

function multiply(a, b) {
    firstNumber = a * b;
};

function divide(a, b) {
    firstNumber = a / b;
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
            if (secondNumber == "0") {
                alert("You can't divide by 0!");
            } else {
                divide(Number(firstNumber), Number(secondNumber));
                break;
            };
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
        if (firstNumber == "" && currentOperator == "equal") {
            currentOperator = "";
        } else if (secondNumber != "") {
            operate(firstNumber, previousOperator, secondNumber);
            display.textContent = firstNumber;
            secondNumber = "";
        } else {
            secondNumber = "";
        };
    });
});

clear.addEventListener("click", () => {
    firstNumber = "";
    currentOperator = "";
    secondNumber = "";
    previousOperator = "";
    display.textContent = "";
});

deleteButton.addEventListener("click", () => {
    if (secondNumber != "") {
        secondNumber = secondNumber.slice(0, (secondNumber.length - 1));
        display.textContent = secondNumber;
    } else {
        firstNumber = firstNumber.toString();
        firstNumber = firstNumber.slice(0, (firstNumber.length - 1));
        display.textContent = firstNumber;
    };
});