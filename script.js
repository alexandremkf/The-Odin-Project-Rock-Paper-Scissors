let humanScore = 0
let computerScore = 0

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3)

    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice () {
    let humanChoice = prompt("What's your choice? (r , p, s)")
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === 'r') {
        return 'rock'
    } else if (humanChoice === 'p') {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(humanChoice, computerChoice) {
    console.log("You chose:", humanChoice);
    console.log("Computer chose:", computerChoice);

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else {
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }

    console.log(`Score: You ${humanScore} x Computer ${computerScore}`);
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)