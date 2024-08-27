function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 2) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getPlayerChoice() {
  const validChoices = ["rock", "paper", "scissors"];
  let input = prompt("Enter your bet: Rock, paper or scissors").toLowerCase();

  while (!validChoices.includes(input)) {
    input = prompt(
      'Please enter either "Rock", "Paper" or "Scissors" (not case-sensitive)',
    ).toLowerCase();
  }
  return input;
}

function evaluateWinner(computerChoice, playerChoice) {
  let result = "";
  let winner = "";
  if (playerChoice === "rock" && computerChoice === "paper") {
    result = "You lose the round!";
    winner = "computer";
  }
  if (playerChoice === "scissors" && computerChoice === "rock") {
    result = "You lose the round!";
    winner = "computer";
  }
  if (playerChoice === "paper" && computerChoice === "scissors") {
    result = "You lose the round!";
    winner = "computer";
  }
  if (playerChoice === "rock" && computerChoice === "scissors") {
    result = "You win the round!";
    winner = "player";
  }
  if (playerChoice === "scissors" && computerChoice === "paper") {
    result = "You win the round!";
    winner = "player";
  }
  if (playerChoice === "paper" && computerChoice === "rock") {
    result = "You win the round!";
    winner = "player";
  }
  if (playerChoice === "rock" && computerChoice === "rock") {
    result = "It's a tie";
    winner = null;
  }
  if (playerChoice === "scissors" && computerChoice === "scissors") {
    result = "It's a tie";
    winner = null;
  }
  if (playerChoice === "paper" && computerChoice === "paper") {
    result = "It's a tie";
    winner = null;
  }
  alert(`You chose ${playerChoice} and the computer chose ${computerChoice}.`);
  alert(result);
  return winner;
}

function playRound() {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();

  return evaluateWinner(computerChoice, playerChoice);
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let winner = "";

  while (playerScore < 3 && computerScore < 3) {
    winner = playRound();

    switch (winner) {
      case "player":
        playerScore++;
        break;
      case "computer":
        computerScore++;
        break;
    }
    alert(`Player score: ${playerScore}`);
    alert(`Computer score: ${computerScore}`);
  }

  if (playerScore === 3) {
    alert("You win the game!");
  }

  if (computerScore === 3) {
    alert("You lose the game!");
  }
}

playGame();
