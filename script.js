function randomRGBColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}


const gridContainer = document.getElementById("container");

for (let i = 0; i < 256; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
}

const cells = Array.from(document.querySelectorAll('.cell'));
cells.forEach(item => item.addEventListener('mousedown', () => {
    item.style.backgroundColor = randomRGBColor();
    cells.forEach(itemtwo => itemtwo.addEventListener('mouseenter', () => {
        itemtwo.style.backgroundColor = randomRGBColor();
    }))
}))


const button = document.createElement('button');
const body = document.querySelector('body');
body.insertBefore(button, gridContainer);

button.textContent = 'Change grid';

function changeGrid(userChoice) {

    const totalCells = userChoice * userChoice;

    gridContainer.innerHTML = "";

    for (let i = 1; i <= (userChoice * userChoice); i++) {

            const modifiedCell = document.createElement("div");
            modifiedCell.classList.add("cell");
            gridContainer.appendChild(modifiedCell);

    }

    const modifiedCells = Array.from(document.querySelectorAll('.cell'));
    modifiedCells.forEach(cellItem => cellItem.addEventListener('mousedown', () => {
        cellItem.style.backgroundColor = randomRGBColor();
        modifiedCells.forEach(cellItemTwo => cellItemTwo.addEventListener('mouseenter', () => {
            cellItemTwo.style.backgroundColor = randomRGBColor();
        }))
    }))

    gridContainer.style.gridTemplateRows = `repeat(${totalCells / userChoice}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${totalCells / userChoice}, 1fr)`;

}

button.addEventListener('click', () => {

    const userChoice = prompt('Enter a number of squares per side (number between 1-100)');
    if (userChoice < 1 || userChoice > 100 || isNaN(userChoice)) {
        alert('ERROR: invalid input');
    } else {
        cells.forEach(cell => cell.remove());
        changeGrid(userChoice);
    }

})

