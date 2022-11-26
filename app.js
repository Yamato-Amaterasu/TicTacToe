// ***************** State ***************** \\
let state = {};

let gameState = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ],
    players: ['X', 'O'],
    playerScore: [0, 0],
    currentPlayerTurn: Math.floor(Math.random() * 10),
    getPlayerNames: ['X', 'O']

}

function Reset() {
    gameState = {
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ],
        players: ['X', 'O'],
        playerScore: [0, 0],
        currentPlayerTurn: Math.floor(Math.random() * 10),
        getPlayerNames: ['X', 'O']

    }
}

function updategameStateBoard() {
    const square00 = document.getElementById('00');
    const square01 = document.getElementById('01');
    const square02 = document.getElementById('02');
    const square10 = document.getElementById('10');
    const square11 = document.getElementById('11');
    const square12 = document.getElementById('12');
    const square20 = document.getElementById('20');
    const square21 = document.getElementById('21');
    const square22 = document.getElementById('22');

    gameState.board[0][0] = square00.innerHTML
    gameState.board[0][1] = square01.innerHTML
    gameState.board[0][2] = square02.innerHTML
    gameState.board[1][0] = square10.innerHTML
    gameState.board[1][1] = square11.innerHTML
    gameState.board[1][2] = square12.innerHTML
    gameState.board[2][0] = square20.innerHTML
    gameState.board[2][1] = square21.innerHTML
    gameState.board[2][2] = square22.innerHTML
}

// ***************** Query Selectors ***************** \\
const board = document.querySelector('#board');
const score = document.querySelector('#score');
const box = document.querySelectorAll('.square');
const playerTurn = document.querySelector('#player-turn');



// ***************** Game Logic ***************** \\

function turnCounter() {
    gameState.currentPlayerTurn++;
    if (gameState.currentPlayerTurn % 2 === 0) {
        return false;
    } else return true;

}

function winCondition() {
    const gameBoard = gameState.board

    if (gameBoard[1][1] != '') {
        if (gameBoard[1][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[1][2]) {
            gameState.playerScore[accuratePlayerScore()] += 1;
            alert(`${windowPlayerNames()} has scored a point!`)
            render();
            return
        } else
            if (gameBoard[0][1] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][1]) {
                gameState.playerScore[accuratePlayerScore()] += 1;
                alert(`${windowPlayerNames()} has scored a point!`)
                render();
                return
            } else
                if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
                    gameState.playerScore[accuratePlayerScore()] += 1;
                    alert(`${windowPlayerNames()} has scored a point!`)
                    render();
                    return
                } else
                    if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
                        gameState.playerScore[accuratePlayerScore()] += 1;
                        alert(`${windowPlayerNames()} has scored a point!`)
                        render();
                        return
                    }
    }
    if (gameBoard[2][0] != '') {
        if (gameBoard[0][0] === gameBoard[1][0] && gameBoard[1][0] === gameBoard[2][0]) {
            gameState.playerScore[accuratePlayerScore()] += 1;
            alert(`${windowPlayerNames()} has scored a point!`)
            render();
            return
        } else
            if (gameBoard[2][0] === gameBoard[2][1] && gameBoard[2][1] === gameBoard[2][2]) {
                gameState.playerScore[accuratePlayerScore()] += 1;
                alert(`${windowPlayerNames()} has scored a point!`)
                render();
                return
            }
    }
    if (gameBoard[2][2] != '') {
        if (gameBoard[0][2] === gameBoard[1][2] && gameBoard[1][2] === gameBoard[2][2]) {
            gameState.playerScore[accuratePlayerScore()] += 1;
            alert(`${windowPlayerNames()} has scored a point!`)
            render();
            return
        }
    }
    if (gameBoard[0][2] != '') {
        if (gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][1] === gameBoard[0][2]) {
            gameState.playerScore[accuratePlayerScore()] += 1;
            alert(`${windowPlayerNames()} has scored a point!`)
            render();
            return
        }

    }
    drawLogic()
}


function drawLogic() {
    let draw = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameState.board[i][j] === 'X') {
                draw += 1;
                console.log(draw)
            }
            if (gameState.board[i][j] === 'O') {
                draw += 1;
                console.log(draw)
            }

        }
    }
    if (draw === 9) {
        alert('The Game is a Draw!')
        render();
        gameState.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]

    }

}


// ***************** Dom Manipulation ***************** \\
function render() {
    renderBoard()
    playerNames()
    renderScore()
    playerNames()
}


function renderScore() {
    score.innerHTML = `
    <article id='player1Score'> ${gameState.getPlayerNames[0]}  : ${gameState.playerScore[0]}</article>
    <article id='player2Score'> ${gameState.getPlayerNames[1]} : ${gameState.playerScore[1]}</article>`

}
function playerNames() {
    if (gameState.getPlayerNames[0] === 'X') {
        playerTurn.innerHTML = `
      <input id="player1Name" name="player1Name" placeholder="Enter Player 1">
      <input id="player2Name" name="player2Name" placeholder="Enter Player 2">
      <button class="startButton">Start Game</button>`
    } else {
        playerTurn.innerHTML = `
        <p class= "turnReminder"> It is currently ${accuratePlayerNames()}'s turn!</p>
        <button class="restartButton">Restart Game</button>`
    }
}


function renderBoard() {
    board.innerHTML = ''

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const slotElem = document.createElement('div');
            slotElem.classList.add('square');
            slotElem.setAttribute('id', `${i}${j}`);
            board.appendChild(slotElem)
        }
    }

}

function accuratePlayerNames() {

    if (gameState.currentPlayerTurn % 2 === 0) {

        return gameState.getPlayerNames[0]

    } else {

        return gameState.getPlayerNames[1]
    }

}
function windowPlayerNames() {

    if (gameState.currentPlayerTurn % 2 === 0) {

        return gameState.getPlayerNames[1]

    } else {

        return gameState.getPlayerNames[0]
    }

}

function accuratePlayerScore() {
    if (gameState.currentPlayerTurn % 2 === 0) {
        return 1;
    } else {
        return 0;
    }
}

// ***************** Event Listeners ***************** \\
board.addEventListener('click', onBoxClick);

function onBoxClick(event) {
    console.dir(event.target);
    if (event.target.innerText === '') {
        if (turnCounter() === true) {
            event.target.innerText = 'X'
            playerNames();
            updategameStateBoard()
            winCondition()
            renderScore()

        } else {
            event.target.innerText = 'O'
            playerNames();
            updategameStateBoard()
            winCondition()
            renderScore()
        }

        console.log(event.target.id)
    }
}


playerTurn.addEventListener('click', nameChanger)

function nameChanger(event) {
    if (event.target.className === 'startButton') {
        const Player1NameInput = document.querySelector('input[name=player1Name]');
        const Player2NameInput = document.querySelector('input[name=player2Name]');
        gameState.getPlayerNames[0] = Player1NameInput.value;
        gameState.getPlayerNames[1] = Player2NameInput.value;
        render();

    } else
        if (event.target.className === 'restartButton') {
            Reset()
            render()


        }


}


// ***************** Bootstrapping ***************** \\
render()