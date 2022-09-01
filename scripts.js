const gridContainer = document.querySelector('#grid-container');

let gridSize = 64;

function makeColumns(gridsize) {
    for (let i = 0; i < gridSize; i++) {
        const column = document.createElement("div");    
        column.classList.add("column");
        column.setAttribute("id", "column" + i);
        column.setAttribute("draggable", "false"); 
        let colId = column.getAttribute("id");    
        gridContainer.appendChild(column);
        makeRows(gridSize, column, colId);           
    }
}

function makeRows(gridSize, column, colId) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");    
        row.classList.add("row");
        row.setAttribute("id", "row" + i + colId);
        row.addEventListener("mouseover", changeColor);
        row.setAttribute("draggable", "false");  
        column.appendChild(row);                  
    }
}

function changeColor() {    
    let grid = document.getElementById("grid-container");   
    grid.onmouseover = function(e) {
        let cellNumber = e.target.id;
        let cell = document.getElementById(cellNumber);
        if (mouseDown) {
            cell.style.backgroundColor = "black";
        }        
    }   
}

let mouseDown = 0;

document.body.onmousedown = function() { 
    ++mouseDown;
  }
  document.body.onmouseup = function() {
    --mouseDown;
  }


makeColumns(gridSize);  