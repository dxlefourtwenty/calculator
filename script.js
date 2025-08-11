let topButtons = [];
let middleButtons = [];
let bottomButtons = [];

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
        button.textContent = `Button ${i + 21}`;

        bottomContainer.appendChild(button);
    }
}

loadTopButtons(1, 4);
loadMiddleButtons(5, 4);
loadBottomButtons(1, 4);
topButtons[0].textContent = "M";

function add() {
    
}

function subtract() {
    
}

function multiply() {
    
}

function divide() {
    
}

function power() {
    
}

function factorial() {
    
}