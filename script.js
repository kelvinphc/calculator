const numbers = document.querySelectorAll(".number");
const display = document.getElementById("display");
const operators = document.querySelectorAll(".operator");
const clear = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const decimal = document.getElementById("decimal");

let firstNumber = "";
let currentOperator = "";
let secondNumber = "";
let previousOperator = "";

function add(a, b) {
    firstNumber = (a + b);
};

function subtract(a, b) {
    firstNumber = (a - b);
};

function multiply(a, b) {
    firstNumber = (a * b);
};

function divide(a, b) {
    firstNumber = (a / b);
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

function reset() {
    firstNumber = "";
    currentOperator = "";
    secondNumber = "";
    previousOperator = "";
    display.textContent = "";
};

function noZeroesInFront() {
    if (firstNumber == "00") {firstNumber = "0"};
    if (firstNumber == "01") {firstNumber = "1"};
    if (firstNumber == "02") {firstNumber = "2"};
    if (firstNumber == "03") {firstNumber = "3"};
    if (firstNumber == "04") {firstNumber = "4"};
    if (firstNumber == "05") {firstNumber = "5"};
    if (firstNumber == "06") {firstNumber = "6"};
    if (firstNumber == "07") {firstNumber = "7"};
    if (firstNumber == "08") {firstNumber = "8"};
    if (firstNumber == "09") {firstNumber = "9"};
    if (secondNumber == "00") {secondNumber = "0"};
    if (secondNumber == "01") {secondNumber = "1"};
    if (secondNumber == "02") {secondNumber = "2"};
    if (secondNumber == "03") {secondNumber = "3"};
    if (secondNumber == "04") {secondNumber = "4"};
    if (secondNumber == "05") {secondNumber = "5"};
    if (secondNumber == "06") {secondNumber = "6"};
    if (secondNumber == "07") {secondNumber = "7"};
    if (secondNumber == "08") {secondNumber = "8"};
    if (secondNumber == "09") {secondNumber = "9"};
};

function roundResult(number) {
    return Math.round(number * 1e10) / 1e10;
};

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (currentOperator == "") {
            if (firstNumber.length == 22) {
                return;
            } else {
                firstNumber += number.textContent;
                noZeroesInFront();
                display.textContent = firstNumber;
            };
        } else if (currentOperator == "equal") {
            reset();
            firstNumber += number.textContent;
            noZeroesInFront();
            display.textContent = firstNumber;
        } else {
            if (secondNumber.length == 22) {
                return;
            } else {
                secondNumber += number.textContent;
                noZeroesInFront();
                display.textContent = secondNumber;
            };
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
            display.textContent = roundResult(firstNumber);
            secondNumber = "";
        } else {
            secondNumber = "";
        };
    });
});

decimal.addEventListener("click", () => {
    if (currentOperator == "") {
        if (firstNumber.includes(".") == false) {
            firstNumber += decimal.textContent;
            display.textContent = firstNumber;
        } else {
            return;
        };
    } else if (currentOperator == "equal") {
        reset();
        firstNumber += decimal.textContent;
        display.textContent = firstNumber;
    } else {
        if (secondNumber.includes(".") == false) {
            secondNumber += decimal.textContent;
            display.textContent = secondNumber;
        } else {
            return;
        };
    };
});

clear.addEventListener("click", () => {
    reset();
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