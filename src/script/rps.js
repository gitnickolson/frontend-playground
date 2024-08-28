const gamelog = document.getElementById("log");
const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll(".game_button").forEach((button) => {
  button.addEventListener("click", (event) => {
    let playerChoice = "";
    playerChoice = event.target.innerText.toLowerCase();
    playRound(playerChoice);
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function evaluateWinner(computerChoice, playerChoice) {
  let result = "";
  let winner = "";
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win the round!";
    winner = "player";
  } else {
    result = "Computer wins the round!";
    winner = "computer";
  }
  addLogEntry(
    `${translateChoice(playerChoice)}(P) vs. ${translateChoice(computerChoice)}(C). ${result}`,
  );
  return winner;
}

function translateChoice(choice) {
  const hashTable = {
    rock: "✊🏻",
    paper: "🖐🏻",
    scissors: "✌🏻",
  };

  return hashTable[choice];
}

function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  let winner = evaluateWinner(computerChoice, playerChoice);
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
  updateScores();
  addLogEntry(
    `Player score: ${playerScore} | Computer score: ${computerScore}`,
  );
  checkGameOver();
}

function updateScores() {
  playerScoreElement.innerText = playerScore;
  computerScoreElement.innerText = computerScore;
}

function checkGameOver() {
  if (playerScore === 3) {
    showResultPopup("You Win!");
    addLogEntry("The player wins the game");
    resetGame();
  } else if (computerScore === 3) {
    showResultPopup("You Lose!");
    addLogEntry("The computer wins the game");
    resetGame();
  }
}

function showResultPopup(message) {
  const resultPopup = document.getElementById("resultPopup");

  resultPopup.innerText = message;
  resultPopup.style.display = "block";
  setTimeout(() => {
    resultPopup.style.display = "none";
  }, 1000);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScores();
  addLogEntry("Starting a new game...");
}

function addLogEntry(message) {
  const logEntry = document.createElement("div");
  logEntry.classList.add("log_entry");
  logEntry.style.backgroundColor = getRandomPastelColor();
  logEntry.innerText = message;
  gamelog.appendChild(logEntry);
  gamelog.scrollTop = gamelog.scrollHeight;
}

function getRandomPastelColor() {
  const r = Math.floor(Math.random() * 127) + 127;
  const g = Math.floor(Math.random() * 127) + 127;
  const b = Math.floor(Math.random() * 127) + 127;
  return `rgb(${r}, ${g}, ${b})`;
}

resetGame();
