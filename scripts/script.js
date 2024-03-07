const container = document.querySelector(".container");
const lengthButton = document.querySelector(".grid-length");
const clearButton = document.querySelector(".clear");

let padActive = false;

// This ensures the pad is activated only after clicking on the pad area.
container.addEventListener("click", () => {
  if (!padActive) {
    activatePad();
    padActive = true;
  }
});

function activatePad(gridLength = 10) {
  for (let i = 0; i < gridLength * gridLength; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "square");
    newDiv.setAttribute(
      "style",
      `width: calc(600px / ${gridLength}); height: calc(600px / ${gridLength})`
    );
    container.appendChild(newDiv);

    newDiv.addEventListener("mouseover", fillColor);
  }
}

function fillColor(event) {
  event.target.style.backgroundColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
}

function randomNum() {
  return Math.floor(Math.random() * 256);
}

// Changing grid length

lengthButton.addEventListener("click", upDateGrids);

function upDateGrids() {
  const gridLength = getLength();
  container.replaceChildren();
  activatePad(gridLength);
}

function getLength() {
  let length = Number.parseInt(prompt('Enter Number less than "100"'));

  if (length <= 100 && length > 0) {
    return length;
  } else {
    alert(`You entered ${length}. Number should be between "1" and "100"`);
  }
}

// Clear Button

clearButton.addEventListener("click", clearPad);

function clearPad() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}
