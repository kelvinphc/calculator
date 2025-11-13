const numbers = document.querySelectorAll(".number");

let firstNumber;

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        firstNumber = number.textContent;
        const display = document.getElementById("display");
        display.textContent = firstNumber;
    });
});



