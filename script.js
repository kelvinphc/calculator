const numbers = document.querySelectorAll(".number");

let firstNumber;

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        firstNumber = number.textContent;
        const display = document.getElementById("display");
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



