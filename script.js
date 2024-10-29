const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");
const num4 = document.querySelector("#num4");
const num5 = document.querySelector("#num5");
const num6 = document.querySelector("#num6");
const num7 = document.querySelector("#num7");
const num8 = document.querySelector("#num8");
const num9 = document.querySelector("#num9");

const display = document.querySelector("#display");
const clear = document.querySelector("#clear");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const equals = document.querySelector("#equals");
const dot = document.querySelector("#dot");

let operator = null;
let firstNumber = null;
let secondNumber = null;
let result = null;

const updateDisplay = (value) => {
    if (display.textContent === "0" || display.textContent === operator) {
        display.textContent = value;
    } else {
    display.textContent += value;
    };
};

const setOperator = (symbol) => {
    if (firstNumber !== null) {
        secondNumber = parseFloat(display.textContent);
        calculateResult();
    }
    firstNumber = parseFloat(display.textContent);
    operator = symbol;
    display.textContent = operator;
    dot.disabled = false;
};

const calculateResult = () => {
    if (firstNumber === null || operator === null) return;

    secondNumber = parseFloat(display.textContent);
    if (isNaN(secondNumber)) secondNumber = 0;

    let result = 0;
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "x":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = secondNumber !== 0 ? firstNumber / secondNumber : "ERROR";
            break;
        default:
            result = secondNumber;
    }

    display.textContent = Number.isInteger(result) ? result : result.toFixed(1);
    firstNumber = result;
    operator = null;
    secondNumber = null;
    dot.disabled = false;
};

equals.addEventListener("click", () => {
    calculateResult();
});

plus.addEventListener("click", () => {
    setOperator("+");
});

minus.addEventListener("click", () => {
    setOperator("-");
});

multiplication.addEventListener("click", () => {
    setOperator("x");
});

division.addEventListener("click", () => {
    setOperator("/");
});

clear.addEventListener("click", () => {
    display.textContent = "";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    dot.disabled = false;
});

num0.addEventListener("click", () => {
    updateDisplay(0);
});

num1.addEventListener("click", () => {
    updateDisplay(1);
});

num2.addEventListener("click", () => {
    updateDisplay(2);
});

num3.addEventListener("click", () => {
    updateDisplay(3);
});

num4.addEventListener("click", () => {
    updateDisplay(4);
});

num5.addEventListener("click", () => {
    updateDisplay(5);
});

num6.addEventListener("click", () => {
    updateDisplay(6);
});

num7.addEventListener("click", () => {
    updateDisplay(7);
});

num8.addEventListener("click", () => {
    updateDisplay(8);
});

num9.addEventListener("click", () => {
    updateDisplay(9);
});

dot.addEventListener("click", () => {
    display.textContent += ".";
    if (display.textContent.includes(".")) {
        dot.disabled = true;
    };
});