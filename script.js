let topButtons = [];
let middleButtons = [];
let bottomButtons = [];
let digits = "1234567890"
let operators = "x-+÷%=√^"
let operator = null;
let firstValue = 0;
let secondValue = 0;
let currentInput = "";

function loadTopButtons(rows, cols) {
    const topContainer = document.getElementById("top-buttons");
    for (let i = 0; i < (rows * cols); i++) {
        const button = document.createElement("button");
        button.classList.add('top-button');
        topButtons.push(button);
        button.textContent = `Button ${i + 1}`;

        topContainer.appendChild(button);
    }
}

function loadMiddleButtons(rows, cols) {
    const middleContainer = document.getElementById("middle-buttons");
    for (let i = 0; i < (rows * cols); i++) {
        const button = document.createElement("button");
        button.classList.add('middle-button');
        middleButtons.push(button);
        button.textContent = `Button ${i + 5}`;

        middleContainer.appendChild(button);
    }
}

function loadBottomButtons(rows, cols) {
    const bottomContainer = document.getElementById("bottom-buttons");
    for (let i = 0; i < (rows * cols); i++) {
        const button = document.createElement("button");
        button.classList.add('bottom-button');
        bottomButtons.push(button);
        button.textContent = `Button ${i + 25}`;

        bottomContainer.appendChild(button);
    }
}

function handleButtonClick(event) {
    const btnText = event.target.textContent;

    if (digits.includes(btnText)) {
        inputNumber(btnText);
    } else if (operators.includes(btnText)) {
        if (btnText === '=') {
            pressEqual();
        }
        selectOperator(btnText);
    } else if (btnText === 'CE') {
        clearOutput();
        console.log("Cleared!");
    } else if (btnText.includes('^')) {
            selectOperator('^');
    } else 
        console.log("Not implemented yet!");

}

function inputNumber(num) {
    num = parseInt(num);
    appendDigit(num);
    if (operator === null) {
        firstValue = firstValue === null ? num : firstValue * 10 + num;
        console.log(firstValue);
    } else {
        secondValue = secondValue === null ? num : secondValue * 10 + num;
        console.log(secondValue);
        changeOutput(secondValue);
    }
}

function selectOperator(op) {
    operator = op;
    console.log(`Operator selected: ${operator}`);
}

function performOperation(a, op, b) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case 'x': return a * b;
        case '÷': return b !== 0 ? a / b : NaN;
        case '^': return Math.pow(a, b);
        default: return b;
    }
}

function pressEqual() {
    if (firstValue !== null && operator != null && secondValue !== null) {
        const result = performOperation(firstValue, operator, secondValue);
        console.log(`Result: ${result}`);
        firstValue = result;
        operator = null;
        secondValue = null;
        changeOutput(result);
    } else {
        console.log("Incomplete input!");
    }
}

function clearOutput() {
    firstValue = 0;
    secondValue = 0;
    currentInput = '';
    operator = null;
    document.getElementById("output").textContent = "0";
}

loadTopButtons(1, 4);
loadMiddleButtons(5, 4);
loadBottomButtons(1, 4);

topButtons[0].textContent = "mc";
topButtons[1].textContent = "mr";
topButtons[2].textContent = "m-";
topButtons[3].textContent = "m+";

middleButtons[0].textContent = "CE";
middleButtons[1].textContent = "√X";
middleButtons[2].textContent = "%";
middleButtons[3].textContent = "÷";
middleButtons[3].style.backgroundColor = "gold";

middleButtons[4].textContent = "7";
middleButtons[5].textContent = "8";
middleButtons[6].textContent = "9";
middleButtons[7].textContent = "x";
middleButtons[7].style.backgroundColor = "gold";

middleButtons[8].textContent = "4";
middleButtons[9].textContent = "5";
middleButtons[10].textContent = "6";
middleButtons[11].textContent = "-";
middleButtons[11].style.backgroundColor = "gold";

middleButtons[12].textContent = "1";
middleButtons[13].textContent = "2";
middleButtons[14].textContent = "3";
middleButtons[15].textContent = "+";
middleButtons[15].style.backgroundColor = "gold";

middleButtons[16].textContent = "0";
middleButtons[17].textContent = ".";
middleButtons[18].textContent = "+/-";
middleButtons[19].textContent = "=";
middleButtons[19].style.backgroundColor = "gold";

bottomButtons[0].textContent = "π";
bottomButtons[1].textContent = "x^y";
bottomButtons[2].textContent = "R2";
bottomButtons[3].textContent = "R0";

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});

function appendDigit(digit) {
    currentInput += digit;
    document.getElementById("output").textContent = currentInput;
}

function changeOutput(digit) {
    document.getElementById("output").textContent = digit;
}

function power() {
    
}

function factorial() {
    
}