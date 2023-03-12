const xClass = 'x';
const oClass = 'cir';
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
let oTurn 

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})
})


function handleClick(e) {
    //placeMark
    //Check for Ưin
    //Check for Draw
    //Switch Turns
    const cell = e.target;
    console.log(cell);
    const currClass = oTurn ? oClass : xClass;
    placeMark(cell, currClass);
    swapTurns();
    setBoardHoverClass();
}

const placeMark = (cell, currClass) => {
    cell.classList.add(currClass);
}

const swapTurns = () => {
    oTurn = !oTurn;
}

function setBoardHoverClass() {
    board.classList.remove(xClass);
    board.classList.remove(oClass);
    if (oTurn) board.classList.add(oClass);
    else board.classList.add(xClass);
}

