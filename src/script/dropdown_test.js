const dropdownButton = document.querySelector(".dropdown-button");

dropdownButton.addEventListener("click", dropdownClick);

function dropdownClick(event) {
  const dropdownElementsDiv = document.querySelector(".dropdown-elements");

  if (dropdownElementsDiv.classList.contains("visible")) {
    dropdownElementsDiv.classList.remove("visible");
  } else {
    dropdownElementsDiv.classList.add("visible");
  }
}
