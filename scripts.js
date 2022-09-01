const gridContainer = document.querySelector('#grid-container');

let gridSize = 32;

function makeColumns(gridsize) {
    for (let i = 0; i < gridSize; i++) {
        const column = document.createElement("div");    
        column.classList.add("column");    
        gridContainer.appendChild(column);
        makeRows(gridSize, column);           
    }
}

function makeRows(gridSize, column) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");    
        row.classList.add("row");    
        column.appendChild(row);                  
    }
}


makeColumns(gridSize);   
