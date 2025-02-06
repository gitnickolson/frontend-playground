function createPlayer(name, symbol) {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
}

function createBoard() {
  const fields = new Array(9).fill("_");

  const getFields = () => fields;

  const updateField = (index, symbol) => (fields[index - 1] = symbol);

  return { getFields, updateField };
}

function createGame() {
  const board = createBoard();
  let turnCounter = 0;
  let currentPlayer;

  const start = () => {
    const playerXName = prompt("Enter the name for player one (x).");
    const playerX = createPlayer(playerXName, "x");

    const playerOName = prompt("Enter the name for player two (o).");
    const playerO = createPlayer(playerOName, "o");

    loop(playerX, playerO);
  };

  const loop = (playerX, playerO) => {
    for (;;) {
      currentPlayer = isEven(turnCounter) ? playerX : playerO;

      printFields();
      printPlayerTurnMsg(currentPlayer);

      const input = prompt(
        `Enter a number for a corresponding field, ${currentPlayer.getName()}(${currentPlayer.getSymbol()}).`,
      );
      if (!validInput(input)) {
        console.log("Please enter a number from 1 to 9.");
        loop(playerX, playerO);
      } else if (fieldIsAlreadyLabeled(input)) {
        console.log("Please choose an empty field.");
        loop(playerX, playerO);
      }

      board.updateField(input, currentPlayer.getSymbol());

      if (playerHasWon(currentPlayer)) {
        printFields();
        console.log(
          `${currentPlayer.getName()}(${currentPlayer.getSymbol()}) won the game in ${turnCounter} turns!`,
        );
        break;
      } else if (allFieldsFull()) {
        printFields();
        console.log("Game ended with no winner.");
        break;
      }

      turnCounter++;
    }
  };

  const validInput = (input) => {
    const regex = /^([1-9])$/;
    return regex.test(input);
  };

  const fieldIsAlreadyLabeled = (input) => {
    return board.getFields()[input] !== "_";
  };

  function playerHasWon(player) {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < combinations.length; i++) {
      if (combinationIsHit(combinations[i], player)) {
        return true;
      }
    }

    return false;
  }

  const combinationIsHit = (combination, player) => {
    const symbol = player.getSymbol();
    const fields = board.getFields();
    console.log(symbol);

    return (
      fields[combination[0]] === symbol &&
      fields[combination[1]] === symbol &&
      fields[combination[2]] === symbol
    );
  };

  const allFieldsFull = () => {
    const fields = board.getFields();
    for (let i = 0; i < fields.length; i++) {
      if (fields[i] === "_") {
        return false;
      }
    }
    return true;
  };

  const printPlayerTurnMsg = (player) =>
    console.log(`It's your turn ${player.getName()}(${player.getSymbol()}).`);

  const printFields = () => {
    const fields = board.getFields();
    let fieldsString = "";

    for (let i = 0; i < fields.length; i += 3) {
      fieldsString += fields.slice(i, i + 3).join(" ") + "\n";
    }
    console.log(fieldsString);
  };

  return { start };
}

function isEven(n) {
  return n % 2 === 0;
}

const game = createGame();
game.start();
