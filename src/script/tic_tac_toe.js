function createPlayer(name, symbol) {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
}

function createGame() {
  let turnCounter = 0;
  let currentPlayer;
  let playerX;
  let playerO;

  const start = () => {
    clearAndEndGame();

    const playerXName = prompt("Enter the name for player one (x).");
    playerX = createPlayer(playerXName, "x");

    const playerOName = prompt("Enter the name for player two (o).");
    playerO = createPlayer(playerOName, "o");

    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((element) =>
      element.addEventListener("click", clickEvent, false),
    );
  };

  const clickEvent = (event) => {
    currentPlayer = isEven(turnCounter) ? playerX : playerO;

    if (fieldAlreadyLabeled(event.target)) {
      alert("Choose a field that is not already labeled.");
      return;
    } else {
      event.target.textContent = currentPlayer.getSymbol();
    }
    turnCounter++;

    if (playerHasWon(currentPlayer)) {
      alert(`${currentPlayer.getName()} won the game in ${turnCounter} turns.`);
      endGame();
    } else if (isGameOver()) {
      alert("Game ended in a tie.");
      endGame();
    }
  };

  const fieldAlreadyLabeled = (field) => {
    return field.textContent;
  };

  const isGameOver = () => {
    const gridItems = document.querySelectorAll(".grid-item");

    for (let i = 0; i < gridItems.length; i++) {
      if (!gridItems[i].textContent) {
        return false;
      }
    }
    return true;
  };

  const playerHasWon = (currentPlayer) => {
    const winningCombinations = [
      ["top-left", "top-middle", "top-right"],
      ["middle-left", "middle-middle", "middle-right"],
      ["bottom-left", "bottom-middle", "bottm-right"],
      ["top-left", "middle-left", "bottom-left"],
      ["top-middle", "middle-middle", "bottom-middle"],
      ["top-right", "middle-right", "bottom-right"],
      ["top-left", "middle-middle", "bottom-right"],
      ["top-right", "middle-middle", "bottom-left"],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      if (combinationIsHit(winningCombinations[i], currentPlayer)) {
        return true;
      }
    }
  };

  const combinationIsHit = (combination, player) => {
    const symbol = player.getSymbol();

    return (
      document.getElementById(combination[0]).textContent === symbol &&
      document.getElementById(combination[1]).textContent === symbol &&
      document.getElementById(combination[2]).textContent === symbol
    );
  };

  const endGame = () => {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((element) =>
      element.removeEventListener("click", clickEvent),
    );
    turnCounter = 0;
  };

  const clearAndEndGame = () => {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((element) => (element.textContent = null));
    endGame();
  };

  return { start };
}

function isEven(n) {
  return n % 2 === 0;
}

const startButton = document.querySelector(".start-game-button");
startButton.addEventListener("click", (event) => {
  const game = createGame();
  game.start();
});
