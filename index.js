const boardSection = document.querySelector(".board");
const eraserButton = document.querySelector("#eraser");
const clearButton = document.querySelector("#clear");

const boardSectionHeight = window.getComputedStyle(boardSection).getPropertyValue("height");
const boardSectionHeightInt = parseInt(boardSectionHeight.slice(0, -2));


let color;

function generateGrid(numberOfSquares) {
  const dimesions = numberOfSquares * numberOfSquares

  for (let i = 0; i < boardSectionHeightInt; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.style.height = `${boardSectionHeightInt / numberOfSquares}px`;
    div.style.width = `${boardSectionHeightInt / numberOfSquares}px`;
    boardSection.appendChild(div);
  }
}

function changeBackgroundColor(domElement, color) {

  domElement.style.backgroundColor = color || `rgb(${getRandomRgb()}, ${getRandomRgb()}, ${getRandomRgb()})`;
  console.log(parseInt(boardSectionHeight.slice(0, -2)));
}


function getRandomRgb() {
  return Math.floor(Math.random() * 255) + 1;
}

generateGrid(16);

eraserButton.addEventListener("click", () => color = "White")
boardSection.addEventListener("mouseover", evnt => {
  if (evnt.target.className != "board") changeBackgroundColor(evnt.target, color);
});

