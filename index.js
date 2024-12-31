const boardSection = document.querySelector(".board");
const eraserButton = document.querySelector("#eraser");
const clearButton = document.querySelector("#clear");

let color;

function generateGrid(numberOfSquares) {
  const dimesions = numberOfSquares + numberOfSquares

  for (let i = 0; i < dimesions; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    boardSection.appendChild(div);
  }
}

function changeBackgroundColor(domElement, color) {

  domElement.style.backgroundColor = color || `rgb(${getRandomRgb()}, ${getRandomRgb()}, ${getRandomRgb()})`;
}


function getRandomRgb() {
  return Math.floor(Math.random() * 255) + 1;
}

generateGrid(64);

eraserButton.addEventListener("click", () => color = "White")
boardSection.addEventListener("mouseover", evnt => changeBackgroundColor(evnt.target, color));
