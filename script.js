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
        return "tie"
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        return "human"
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        return "computer"
    }
}

function playGame() {
    console.log("---Game Over---")
    if (humanScore > computerScore) {
        console.log("🎉 You won the game!");
    } else if (humanScore < computerScore) {
        console.log("💻 The computer won the game!");
    } else {
        console.log("🤝 It's a tie!");
    }
}

document.getElementById("rock").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
  });
  
  document.getElementById("paper").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
  });
  
  document.getElementById("scissors").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
  });