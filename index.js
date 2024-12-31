const boardSection = document.querySelector(".board");

function generateGrid(numberOfSquares) {
  const dimesions = numberOfSquares + numberOfSquares

  for (let i = 0; i < dimesions; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.style.flexBasis = numberOfSquares;
    boardSection.appendChild(div);
  }
}

function changeBackgroundColor(domElement) {

  domElement.style.backgroundColor = `rgb(${getRandomRgb()}, ${getRandomRgb()}, ${getRandomRgb()})`;
}


function getRandomRgb() {
  return Math.floor(Math.random() * 255) + 1;
}

boardSection.addEventListener("mouseover", (evnt) => changeBackgroundColor(evnt.target));




generateGrid(1400);

