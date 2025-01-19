let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.random();

  if (0 <= randomNumber && randomNumber <= 0.3) {
    return "rock";
  }
  if (0.3 < randomNumber && randomNumber <= 0.6) {
    return "paper";
  }
  if (0.6 < randomNumber) {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice;
  let keepGoing = true;
  while (keepGoing) {
    choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    } else {
      keepGoing = true;
    }
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "paper" && computerChoice == "paper") {
    console.log("Tie!");
  }

  if (humanChoice === "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats Rock");
    humanScore++;
  }

  if (humanChoice === "paper" && computerChoice == "scissors") {
    console.log("You lose! Scissors beat Paper");
    computerScore++;
  }

  if (humanChoice === "rock" && computerChoice == "rock") {
    console.log("Tie!");
  }

  if (humanChoice === "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  }

  if (humanChoice === "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  }

  if (humanChoice === "scissors" && computerChoice == "scissors") {
    console.log("Tie!");
  }

  if (humanChoice === "scissors" && computerChoice == "rock") {
    console.log("You lose! rock beats scissors");
    computerScore++;
  }

  if (humanChoice === "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beat paper");
    humanScore++;
  }
}

function playGame() {
  let gameCounter = 0;
  while (gameCounter < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    gameCounter++;
  }

  console.log(`Your score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}
