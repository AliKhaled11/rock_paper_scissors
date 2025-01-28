// Select DOM elements
const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const paperBtn = document.querySelector(".paper");
const resultBox = document.querySelector(".result-box");
const humanScoreCounter = document.querySelector(".human-score-counter");
const computerScoreCounter = document.querySelector(".computer-score-counter");

// Add win conditions
const winConditions = {
  paper: "rock",
  rock: "scissors",
  scissors: "paper"
};

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Add event listeners to buttons
const buttons = [rockBtn, scissorsBtn, paperBtn];
buttons.forEach((button) => button.addEventListener("click", playRound));

// Get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Update score counters
function updateCounters(result) {
  resultBox.textContent = result;
  humanScoreCounter.textContent = `Human Score: ${humanScore}`;
  computerScoreCounter.textContent = `Computer Score: ${computerScore}`;
}

// Play a round
function playRound(event) {
  const humanChoice = event.target.textContent.toLowerCase();
  const computerChoice = getComputerChoice();
  let result = "";

  if (humanScore < 5 && computerScore < 5) {
    if (humanChoice === computerChoice) {
      result = "Tie!";
    } else {
      if (winConditions[humanChoice] === computerChoice) {
        result = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
      } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
      }
    }

    updateCounters(result);
  } else {
    resultBox.textContent = "Game over! Refresh the page to play again.";
  }
}
