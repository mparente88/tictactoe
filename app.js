const board = document.getElementById('scoreboard)')
const squares = document.getElementsByClassName('playbox')
const players = ['X', 'O']
let currentPlayer = players[0]

xScore = []

oScore = []

let whoseTurn = "X"

const xSelectorElement = document.querySelector(`.xSelector`)


let turnCounter = 0

const scoreTheBoard = () => {
        for (let i = 0; i < playboxes.length; i++) {
                if (playboxes[i].innerText === "X" && !xScore.includes(i)){
                        xScore.push(i)
                        xScore.sort()
                }
                if (playboxes[i].innerText === "O" && !oScore.includes(i)) {
                        oScore.push(i)
                        oScore.sort()
                }
        }

}



let playboxElements = document.querySelectorAll(".playbox")

const playboxes = playboxElements

// playboxes.addEventListener(`mouseover`, () => {
//         if (playboxes.innerText === "X" || playboxes.innerText === "O") {
//                 hoverPanel.style.opacity = 1
//                 hoverPanel.style.cursor = not-allowed
//         }}
// )
for (let i = 0; i < playboxes.length; i++) {
        playboxes[i].addEventListener(`mouseover`, function() {
                playboxes[i].style.opacity = .35
        })
}

for (let i = 0; i < playboxes.length; i++) {
        playboxes[i].addEventListener(`mouseout`, function() {
                playboxes[i].style.opacity = 1
        })
}

for (let i = 0; i < playboxes.length; i++) {
    playboxes[i].addEventListener(`click`, function() {
        if ((someoneHasWon === false && playboxes[i].innerText === undefined) || (someoneHasWon === false && playboxes[i].innerText === "") || (someoneHasWon === false && playboxes[i].innerText === null)) {
                playboxes[i].innerText = whoseTurn
                turnCounter = turnCounter + 1
                if (playboxes[i].innerText === "X") {
                        whoseTurn = "O"
                } else {
                        whoseTurn = "X"
                }
        }
        scoreTheBoard()
        didIWin()
    })
}

let someoneHasWon = false

const winPatterns = [
        [0, 1, 2], 
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
        [2, 4, 6]
]

let winnerWinner = document.querySelector("#playAgain")
let xIsTheWinner = document.querySelector("#xWins")
let oIsTheWinner = document.querySelector("#oWins")
let xScoreCard = 0
let oScoreCard = 0
let xScoreCardElement = document.querySelector(`#xScore`)
let oScoreCardElement = document.querySelector(`#oScore`)



let didIWin = () => {
for (let i = 0; i < winPatterns.length; i++) {

        if (xScore.includes(winPatterns[i][0]) && xScore.includes(winPatterns[i][1]) && xScore.includes(winPatterns[i][2])) {
                console.log("X wins!")
                winnerWinner.style.opacity = 1
                xIsTheWinner.style.opacity = 1
                for (let i = 0; i < playboxes.length; i++) {
                        if (playboxes[i].innerText !== "X") {
                                playboxes[i].style.opacity = .1
                        }
                }
                if (someoneHasWon === false) {
                        xScoreCard = xScoreCard + 1
                }
                someoneHasWon = true
                
        } else if (oScore.includes(winPatterns[i][0]) && oScore.includes(winPatterns[i][1]) && oScore.includes(winPatterns[i][2])) {
                console.log("O wins!")
                winnerWinner.style.opacity = 1
                oIsTheWinner.style.opacity = 1
                for (let i = 0; i < playboxes.length; i++) {
                        if (playboxes[i].innerText !== "O") {
                                playboxes[i].style.opacity = .1
                        }
                }
                if (someoneHasWon === false) {
                        oScoreCard = oScoreCard + 1
                }
                someoneHasWon = true
        } else if (turnCounter >= 9) {
                someoneHasWon = true
                console.log("CAT!")
                winnerWinner.style.opacity = 1
        }
                

        }
}

winnerWinner.addEventListener(`click`, () => {
        for (let i = 0; i < playboxes.length; i++) {
                playboxes[i].innerText = ""
                playboxes[i].style.opacity = 1
        xIsTheWinner.style.opacity = 0
        oIsTheWinner.style.opacity = 0
        winnerWinner.style.opacity = 0
        xScore = []
        oScore = []
        someoneHasWon = false
        whoseTurn = "X"
        turnCounter = 0
        xScoreCardElement.innerText = xScoreCard
        oScoreCardElement.innerText = oScoreCard
}})
