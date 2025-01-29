// Select and create DOM elements
const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const paperBtn = document.querySelector(".paper");
const resultBox = document.querySelector(".result-box");
const humanScoreCounter = document.querySelector(".human-score-counter");
const computerScoreCounter = document.querySelector(".computer-score-counter");
const resultsContainer = document.querySelector(".results-container");
const resultImage = document.createElement("img");
const endMsg = document.createElement("button");

// Add style to the image
resultImage.style.cssText =
  "width: 200px; height: 200px; display: block; margin: auto;";

// Add the end message
endMsg.textContent = "Refresh the page for a new round";
endMsg.classList.add("refresh", "button");
endMsg.addEventListener("click", () => window.location.reload());

// Images/GIFs for results after 5 wins
const winGif = "spongbob.gif";
const loseImage = "cat_smoking.webp";

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

// Disable buttons after game over
function disableButtons() {
  buttons.forEach((button) => button.removeEventListener("click", playRound));
}

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

// Check if game is over
function checkGameOver() {
  if (humanScore === 5 || computerScore === 5) {
    resultsContainer.appendChild(resultImage);
    resultsContainer.appendChild(endMsg);
    disableButtons();
  }
  if (humanScore === 5) {
    resultBox.textContent = "🎉 You won the game! 🎉";
    resultImage.src = winGif;
    resultImage.alt = "Spongebob dancing gif";
  } else if (computerScore === 5) {
    resultBox.textContent = "💀 Computer won the game! 💀";
    resultImage.src = loseImage;
    resultImage.alt = "Cat smoking weed image";
  }
}

// Play a round
function playRound(event) {
  const humanChoice = event.target.textContent.toLowerCase();
  const computerChoice = getComputerChoice();
  let result = "";

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
  checkGameOver();
}
