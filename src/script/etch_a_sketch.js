function createGrid() {
  const container = document.getElementById("container");

  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.width = "70vw";
  container.style.position = "relative";
  container.style.top = "80px";
  container.style.right = "-230px";
  container.style.boxSizing = "border-box";
  container.style.borderWidth = "20px";
  container.style.borderColor = "darkblue";

  for (let number = 1; number <= 70; number++) {
    const item = document.createElement("div");
    item.style.flex = "1 0 10%";
    item.style.boxSizing = "content-box";
    item.style.height = "115px";
    item.style.width = "75px";
    item.style.backgroundColor = "white";
    item.style.display = "flex";
    item.style.justifyContent = "center";
    item.style.alignItems = "center";

    container.appendChild(item);
  }

  document.querySelectorAll("div").forEach((button) => {
    button.addEventListener("mouseover", (event) => {
      button.style.backgroundColor = "black";
    });
  });
}

console.log("test");

createGrid();
