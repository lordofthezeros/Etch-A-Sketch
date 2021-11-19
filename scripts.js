const gridContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('.reset-grid');

const gridSize = 16;

function changeColour(e) {
    e.target.style.cssText = 'background-color: blue';
}

function clear() {
    gridContainer.innerHTML = "";
}

function resetScreen() {
    clear();
    setGrid();
}

// set initial grid
function setGrid() {
for (let i = 0; i < gridSize ** 2; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.addEventListener('mouseover', changeColour)
    gridContainer.appendChild(cell);
}
}

resetButton.onclick = () => resetScreen();

window.onload = () => setGrid();