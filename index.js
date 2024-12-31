const boardSection = document.querySelector(".board");
const eraserButton = document.querySelector("#eraser");
const clearButton = document.querySelector("#clear");
const paintButton = document.querySelector("#paint");
const boardSectionHeight = window.getComputedStyle(boardSection).getPropertyValue("height");
const boardSectionHeightInt = parseInt(boardSectionHeight.slice(0, -2));
const WHITE = "White";
const dimensionsInput = document.querySelector("#dimensions");
const colorPicker = document.querySelector("#color");
const rainbowButton = document.querySelector("#rainbow");


dimensionsInput.min = 16;
dimensionsInput.max = 100;

let eraseMode = false;
let rainbowMode = true;

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

  if (eraseMode) {
    domElement.style.backgroundColor = WHITE;
  }
  else if (rainbowMode) {
    domElement.style.backgroundColor = `rgb(${getRandomRgb()}, ${getRandomRgb()}, ${getRandomRgb()})`;
  }
  else {
    domElement.style.backgroundColor = color;
  }
}

function getRandomRgb() {
  return Math.floor(Math.random() * 255) + 1;
}

function clearBoard() {
  boardSection.innerHTML = "";
  generateGrid(parseInt(dimensions.value));
  rainbowMode = true;
  eraseMode = false;
}

generateGrid(dimensions.value);

colorPicker.addEventListener("click", () => rainbowMode = false);
rainbowButton.addEventListener("click", () => rainbowMode = true);
eraserButton.addEventListener("click", () => eraseMode = true);
paintButton.addEventListener("click", () => eraseMode = false);
clearButton.addEventListener("click", clearBoard);
dimensionsInput.addEventListener("click", clearBoard);
boardSection.addEventListener("mouseover", evnt => { if (evnt.target.className === "square") changeBackgroundColor(evnt.target, colorPicker.value); });

