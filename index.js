const boardSection = document.querySelector(".board");

function generateGrid(numberOfSquares) {
  for (let i = 0; i < numberOfSquares; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    boardSection.appendChild(div);
  }
}

generateGrid(16);

