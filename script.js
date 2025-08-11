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
        button.textContent = `Button ${i + 25}`;

        bottomContainer.appendChild(button);
    }
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