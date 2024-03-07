const container = document.querySelector(".container");

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
