let topButtons = [];
let middleButtons = [];
let bottomButtons = [];
let digits = "1234567890";
let operators = "x-+÷%=√^";
let operator = null;
let firstValue = "";
let secondValue = "";
let waitingForSecondValue = false;
const decimalLimit = 10;
const digitLimit = 14;

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

    if (digits.includes(btnText) || btnText === ".") {
        appendValue(btnText);
    } else if (btnText === "=") {
        pressEqual();
    } else if (btnText === "CE") {
        clearOutput();
        console.log("Cleared!");
    } else if (btnText.includes("^")) {
        selectOperator("^");
    } else if (operators.includes(btnText)) {
        selectOperator(btnText);
    } else {
        console.log("Not implemented yet!");
    }
}

function appendValue(input) {
    if (waitingForSecondValue) {
        secondValue = secondValue?.toString() || "";

        // Don't add more digits if digitLimit reached (excluding the decimal point)
        if (input !== "." && secondValue.replace(".", "").length >= digitLimit) {
            return; // ignore input if digit limit reached
        }

        if (input === ".") {
            if (!secondValue.includes(".")) {
                secondValue += secondValue === "" ? "0." : ".";
            }
        } else {
        secondValue += input;
        }

        updateDisplay(secondValue);
    } else {
        firstValue = firstValue?.toString() || "";

        if (input !== "." && firstValue.replace(".", "").length >= digitLimit) {
            return; // ignore input if digit limit reached
        }

        if (input === ".") {
            if (!firstValue.includes(".")) {
                firstValue += firstValue === "" ? "0." : ".";
            }
        } else {
            firstValue += input;
        }

    updateDisplay(firstValue);
    }
}

function selectOperator(op) {
    if (firstValue === "") {
        console.log("Enter a number first!");
        return;
    }
    if (waitingForSecondValue && secondValue !== "") {
        // If user pressed operator after entering secondValue, calculate first
        pressEqual();
    }
    operator = op;
    waitingForSecondValue = true;
    console.log(`Operator selected: ${operator}`);
}

function performOperation(a, op, b) {
    a = parseFloat(a);
    b = parseFloat(b);
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
    if (firstValue !== "" && operator != null && secondValue !== "") {
        let result = performOperation(firstValue, operator, secondValue);

        if (!isNaN(result)) {
            result = Number(result.toFixed(decimalLimit));
        }

        console.log(`Result: ${result}`);
        firstValue = result.toString();
        operator = null;
        secondValue = "";
        waitingForSecondValue = false;
        updateDisplay(firstValue);
    } else {
        console.log("Incomplete input!");
    }
}

function clearOutput() {
    firstValue = "";
    secondValue = "";
    operator = null;
    waitingForSecondValue = false;
    updateDisplay("0");
}

function updateDisplay(value) {
    document.getElementById("output").textContent = value;
}

// Load buttons and set button text values
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
middleButtons[3].style.borderColor = "black";
middleButtons[3].style.color = "black";

middleButtons[4].textContent = "7";
middleButtons[5].textContent = "8";
middleButtons[6].textContent = "9";
middleButtons[7].textContent = "x";
middleButtons[7].style.backgroundColor = "gold";
middleButtons[7].style.borderColor = "black";
middleButtons[7].style.color = "black";

middleButtons[8].textContent = "4";
middleButtons[9].textContent = "5";
middleButtons[10].textContent = "6";
middleButtons[11].textContent = "-";
middleButtons[11].style.backgroundColor = "gold";
middleButtons[11].style.borderColor = "black";
middleButtons[11].style.color = "black";

middleButtons[12].textContent = "1";
middleButtons[13].textContent = "2";
middleButtons[14].textContent = "3";
middleButtons[15].textContent = "+";
middleButtons[15].style.backgroundColor = "gold";
middleButtons[15].style.borderColor = "black";
middleButtons[15].style.color = "black";

middleButtons[16].textContent = "0";
middleButtons[17].textContent = ".";
middleButtons[18].textContent = "+/-";
middleButtons[19].textContent = "=";
middleButtons[19].style.backgroundColor = "gold";
middleButtons[19].style.borderColor = "black";
middleButtons[19].style.color = "black";

bottomButtons[0].textContent = "π";
bottomButtons[1].textContent = "x^y";
bottomButtons[2].textContent = "R2";
bottomButtons[3].textContent = "R0";

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});
