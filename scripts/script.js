const container = document.querySelector(".container");
const lengthButton = document.querySelector(".grid-length");
const clearButton = document.querySelector(".clear");

let gridLength = 10;

for (let i = 0; i < 100; i++) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "square");
  container.appendChild(newDiv);
}

const squares = document.querySelectorAll(".square");
squares;

squares.forEach((square) => {
  square.addEventListener("mouseover", fillColor);
});

function fillColor(event) {
  event.target.style.backgroundColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
}

function randomNum() {
  return Math.floor(Math.random() * 256);
}

lengthButton.addEventListener('click', upDateGrids);

function getLength() {
    let length = Number.parseInt(prompt('Enter Number less than "100"'))

    if (length <= 100 && length > 0) {
        return length;
    } else {
        alert(`You entered ${length}. Number should be between "1" and "100"`)
    }
}

function upDateGrids() {
 gridLength = getLength();
 console.log(gridLength)
}
