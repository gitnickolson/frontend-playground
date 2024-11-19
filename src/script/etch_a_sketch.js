function initializePage(rows, columns) {
    const gameContainer = document.createElement("div");
    const totalCells = rows * columns;

    styleDocumentBody();
    styleGameContainer(gameContainer, columns);
    createContainerGrid(gameContainer, totalCells);
    addGoBackButton();
    addResetButton(gameContainer);
    addHeading();

    document.body.appendChild(gameContainer);
}

function createContainerGrid(gameContainer, totalCells) {
    for (let number = 0; number < totalCells; number++) {
        const item = document.createElement("div");
        item.classList.add("grid-item");

        item.style.backgroundColor = "white";
        item.style.border = "1px solid #e0e0e0";
        item.style.transition = "background-color 0.2s ease";

        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "black";
        });

        gameContainer.appendChild(item);
    }
}

function addGoBackButton() {
    const backButton = document.createElement("button");
    backButton.innerText = "Go back";
    backButton.onclick = function () {
        window.location.href = '../index.html';
    }

    positionBackButton(backButton)

    document.body.appendChild(backButton);
}

function positionBackButton(backButton) {
    backButton.style.position = "fixed";
    backButton.style.bottom = "20px";
    backButton.style.left = "20px";
    backButton.style.fontSize = "18px";
    backButton.style.padding = "16px 24px";
}

function addResetButton(gameContainer) {
    const resetButton = document.createElement("button");
    resetButton.innerText = "Reset board";
    resetButton.onclick = function () {
        resetBoard(gameContainer);
    }

    positionResetButton(resetButton);
    addResetButtonTransform(resetButton)


    gameContainer.appendChild(resetButton)
}

function positionResetButton(resetButton) {
    resetButton.style.position = "absolute";
    resetButton.style.bottom = "0";
    resetButton.style.left = "-25%";
}

function addResetButtonTransform(resetButton) {
    resetButton.addEventListener("mouseenter", () => {
        resetButton.style.transform = "scale(1.2)";
    });

    resetButton.addEventListener("mouseleave", () => {
        resetButton.style.transform = "scale(1)";
    });
}

function resetBoard(gameContainer) {
    const gridItems = gameContainer.querySelectorAll(".grid-item")
    gridItems.forEach(item => item.style.backgroundColor = "white");
}

function styleDocumentBody() {
    const body = document.body;
    body.style.margin = "0";
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.height = "100vh";
    body.style.backgroundColor = "#B0C4DE";
    body.style.background = "linear-gradient(135deg, #B0C4DE, #ADD8E6)";
    body.style.fontFamily = "Arial, sans-serif";
}

function styleGameContainer(gameContainer, columns) {
    gameContainer.style.display = "grid";
    gameContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gameContainer.style.gap = "2px";
    gameContainer.style.width = "70vw";
    gameContainer.style.maxWidth = "700px";
    gameContainer.style.aspectRatio = "1";
    gameContainer.style.border = "5px solid #9c6bf8";
    gameContainer.style.backgroundColor = "white";
    gameContainer.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 1)";
    gameContainer.style.position = "fixed";
    gameContainer.style.top = "50%";
    gameContainer.style.right = "20px";
    gameContainer.style.transform = "translateY(-50%)";
}

function addHeading() {
    const heading = document.createElement("h1");
    heading.innerText = "Etch a Sketch";

    heading.style.fontFamily = "'Pacifico', sans-serif";
    heading.style.fontSize = "50px";

    heading.style.position = "fixed";
    heading.style.top = "20px";
    heading.style.left = "20px";

    heading.style.backgroundColor = "white";
    heading.style.border = "3px solid #9c6bf8";
    heading.style.borderRadius = "15px";
    heading.style.padding = "10px 20px";

    heading.style.color = "#9c6bf8";
    heading.style.textShadow = "2px 2px 10px rgba(0, 0, 0, 0.4)";
    heading.style.fontWeight = "bold";
    heading.style.letterSpacing = "2px";

    heading.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";

    document.body.appendChild(heading);
}

const rows = 10;
const columns = 10;
initializePage(rows, columns);
