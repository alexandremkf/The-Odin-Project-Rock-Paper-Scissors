let humanScore = 0
let computerScore = 0

const resultDiv = document.getElementById("result")
const scoreDiv = document.getElementById("score")

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

function playRound(humanChoice, computerChoice) {
    let message = ''

    if (humanChoice === computerChoice) {
        message = `Empate! Os dois escolheram ${humanChoice}`   
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        message = `Você ganhou! ${humanChoice} vence ${computerChoice}`
        humanScore++
    } else {
        message = `Você perdeu! ${computerChoice} vence ${humanChoice}`
        computerScore++
    }

    resultDiv.textContent = message;
    scoreDiv.textContent = `Placar: Você ${humanScore} x Computador ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        resultDiv.textContent += `\n${humanScore === 5 ? "🎉 Você venceu o jogo!" : "💻 O computador venceu o jogo!"}`;
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