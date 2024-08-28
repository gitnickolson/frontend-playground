function createGrid() {
  const container = document.getElementById("container");

  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.width = "80vw";
  container.style.maxWidth = "800px";
  container.style.gap = "10px";
  container.style.position = "relative";
  container.style.top = "230px";

  for (let i = 1; i <= 16; i++) {
    console.log("w");
    const item = document.createElement("div");
    item.textContent = `Item ${i}`;

    item.style.flex = "1 0 21%";
    item.style.boxSizing = "border-box";
    item.style.height = "150px";
    item.style.backgroundColor = "white";
    item.style.display = "flex";
    item.style.justifyContent = "center";
    item.style.alignItems = "center";
    item.style.color = "black";
    item.style.fontSize = "20px";
    item.style.textAlign = "center";

    container.appendChild(item);
  }

  document.querySelectorAll("div").forEach((button) => {
    button.addEventListener("mouseover", (event) => {
      button.style.backgroundColor = "black";
      button.style.color = "white";
    });
  });
}

console.log("test");

createGrid();
