function initializePage(rows, columns) {
    const gameContainer = document.createElement("div");
    const totalCells = rows * columns;
    const body = document.body;

    styleDocumentBody(body);
    styleGameContainer(gameContainer, columns);
    createContainerGrid(gameContainer, totalCells);

    body.appendChild(gameContainer);
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

function styleDocumentBody(body) {
    body.style.margin = "0";
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.height = "100vh";
    body.style.backgroundColor = "#f0f0f0";
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

const rows = 10;
const columns = 10;
initializePage(rows, columns);
