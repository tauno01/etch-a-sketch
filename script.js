function randomRGBColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

const button = document.createElement('button');
const body = document.querySelector('body');

button.textContent = 'Change grid';

const gridContainer = document.getElementById("container");

body.insertBefore(button, gridContainer);

// Loop 256 div cells

for (let i = 0; i < 256; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
}

// Event listener for changing the cell background color

const cells = Array.from(document.querySelectorAll('.cell'));

let isMouseDown = false;

function colorChange(e) {
   if (isMouseDown) {
    const cell = e.target;
    const randColor = randomRGBColor();
    cell.style.backgroundColor = randColor;
   }
}

cells.forEach(cell => {
    cell.addEventListener('mousedown', () => {
      isMouseDown = true;
    });
    cell.addEventListener('mouseup', () => {
      isMouseDown = false;
    });
    cell.addEventListener('mouseenter', colorChange);
  });

// Change the grid depending on user's input

function changeGrid(userChoice) {

    const totalCells = userChoice * userChoice;

    gridContainer.innerHTML = "";

    for (let i = 1; i <= (userChoice * userChoice); i++) {

            const modifiedCell = document.createElement("div");
            modifiedCell.classList.add("cell");
            gridContainer.appendChild(modifiedCell);

    }

    gridContainer.style.gridTemplateRows = `repeat(${totalCells / userChoice}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${totalCells / userChoice}, 1fr)`;

    const modifiedCells = Array.from(document.querySelectorAll('.cell'));

    modifiedCells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
          isMouseDown = true;
        });
        cell.addEventListener('mouseup', () => {
          isMouseDown = false;
        });
        cell.addEventListener('mouseenter', colorChange);
      });

}

// Event listener for button

button.addEventListener('click', () => {

    const userChoice = prompt('Enter a number of squares per side (number between 1-100)');
    if (userChoice < 1 || userChoice > 100 || isNaN(userChoice)) {
        alert('ERROR: invalid input');
    } else {
        cells.forEach(cell => cell.remove());
        changeGrid(userChoice);
    }

})