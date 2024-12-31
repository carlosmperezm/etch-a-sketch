const boardSection = document.querySelector(".board");
const eraserButton = document.querySelector("#eraser");
const clearButton = document.querySelector("#clear");
const boardSectionHeight = window.getComputedStyle(boardSection).getPropertyValue("height");
const boardSectionHeightInt = parseInt(boardSectionHeight.slice(0, -2));
const WHITE = "White";
const dimensions = 32;

let color;

function generateGrid(numberOfSquares) {
  const size = boardSectionHeightInt / numberOfSquares;

  let totalPixelsAdded = 0;

  while (boardSectionHeightInt > totalPixelsAdded) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    boardSection.appendChild(div);
    totalPixelsAdded += size / numberOfSquares;
  }
}

function changeBackgroundColor(domElement, color) {
  domElement.style.backgroundColor = color || `rgb(${getRandomRgb()}, ${getRandomRgb()}, ${getRandomRgb()})`;
}

function getRandomRgb() {
  return Math.floor(Math.random() * 255) + 1;
}

generateGrid(dimensions);

eraserButton.addEventListener("click", () => color = WHITE);

boardSection.addEventListener("mouseover", evnt => {
  if (evnt.target.className === "square") changeBackgroundColor(evnt.target, color);
});

clearButton.addEventListener("click", () => {
  boardSection.innerHTML = "";
  generateGrid(dimensions);
})
