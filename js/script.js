let grid = document.querySelector(".grid")

//default grid value is 16
function init() {
    generateGrid(16);
}

function generateGrid(number) {
    //if number below 0 or above 100, generate default grid
    if (number <= 0 || number >= 100) {
        number = 16;
    }

    //creating the grid
    for (let i = 0; i < number; i++){
        for (let j = 0; j < number; j++){
            let square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.setAttribute('style', `height: ${500/number}px;width: ${500/number}px;`)
            grid.appendChild(square);
        }
    }

    //assigning hover listeners for default color mode
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.classList.add('red');
        });
    });
}


function changeGrid(number) {
    //first we reset the grid
    grid.textContent = "";
    //then re-gen
    generateGrid(number);
}

function eraserMode() {
    let squares = document.querySelectorAll('.square');
    
    //removing all listeners first
    squares.forEach(square => {
        square.replaceWith(square.cloneNode(true));
    });

    squares = document.querySelectorAll('.square');

    //then adding erase listener
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.classList.remove('red');
        });
    });
}

init();
