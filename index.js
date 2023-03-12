const xClass = 'x';
const oClass = 'cir';
const cellElements = document.querySelectorAll('[data-cell]');
const winningMessageTextElement = document.querySelector('.win-mess')
const winningMessageElement = document.getElementById('win-mess')
const board = document.getElementById('board');
let oTurn
const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

startGame()

function startGame() {
    oTurn = false;
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass();
}

function handleClick(e) {
    //placeMark
    //Check for Ưin
    //Check for Draw
    //Switch Turns
    const cell = e.target;
    const currClass = oTurn ? oClass : xClass;
    placeMark(cell, currClass);
    if (checkWin(currClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerHTML = "Draw!"
    } else {
        winningMessageTextElement.innerHTML = `${oTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(xClass) || cell.classList.contains(oClass)
    })
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

function checkWin(currClass) {
    return winning.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currClass)
        })
    })
}
