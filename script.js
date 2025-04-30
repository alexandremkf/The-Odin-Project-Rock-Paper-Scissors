const humanScore = 0
const computerScore = 0

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice () {
    let humanChoice = prompt("What's your choice? (r for rock, p for paper and s for scissors)")

    if (humanChoice === 'r') {
        return 'rock'
    } else if (humanChoice === 'p') {
        return 'paper'
    } else {
        return 'scissors'
    }
}

console.log(getHumanChoice())

console.log(getComputerChoice())