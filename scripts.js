const gridContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('.reset-grid');
const resizeButton = document.querySelector('.resize-grid');
const slider = document.getElementById('grid-dims');
let output = document.getElementById('grid-dim-value');



output.textContent = `${slider.value} x ${slider.value}`;

slider.oninput = function () {
    output.textContent = `${slider.value} x ${slider.value}`;
}

const DEFAULTGRIDSIZE = 16;

function changeColour(e) {
    e.target.style.cssText = 'background-color: blue';
}

function clear() {
    gridContainer.innerHTML = "";
}

function resetScreen() {
    clear();
    slider.value = slider.defaultValue;
    output.textContent = `${slider.value} x ${slider.value}`;
    setGrid(DEFAULTGRIDSIZE);
}

function resizeScreen() {
    clear();
    let gridSize = parseInt(slider.value);
    setGrid(gridSize);
}

// set initial grid
function setGrid(currentSize) {
    gridContainer.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
    for (let i = 0; i < currentSize ** 2; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-item');
        cell.addEventListener('mouseover', changeColour)
        gridContainer.appendChild(cell);
    }
}

resetButton.onclick = () => resetScreen();
resizeButton.onclick = () => resizeScreen();

window.onload = () => setGrid(DEFAULTGRIDSIZE);