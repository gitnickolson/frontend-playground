function createGrid(rows, columns) {
    const container = document.createElement("div");
    const body = document.body;

    const totalCells = rows * columns;

    body.style.margin = "0";
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.height = "100vh";
    body.style.backgroundColor = "#f0f0f0";
    body.style.fontFamily = "Arial, sans-serif";

    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gap = "2px";
    container.style.width = "70vw";
    container.style.maxWidth = "700px";
    container.style.aspectRatio = "1";
    container.style.border = "5px solid darkblue";
    container.style.backgroundColor = "white";
    container.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";

    for (let number = 0; number < totalCells; number++) {
        const item = document.createElement("div");
        item.classList.add("grid-item");

        item.style.backgroundColor = "white";
        item.style.border = "1px solid #e0e0e0";
        item.style.transition = "background-color 0.2s ease";

        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "black";
        });

        container.appendChild(item);
    }

    body.appendChild(container);
}

createGrid(10, 10);
