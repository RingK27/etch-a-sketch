const gridContainer = document.querySelector('#grid-container');

let gridSize = 64;
let colorSelection = 1;
let btnBlack = document.getElementById("btnBlack");
let btnRed = document.getElementById("btnRed");
let btnWhite = document.getElementById("btnWhite");
let btnPurple = document.getElementById("btnPurple");
let btnClear = document.getElementById("clear");
let btnGridL = document.getElementById("gridL");
let btnGridS = document.getElementById("gridS");

btnBlack.onclick = function() {colorSelection = 1;};
btnRed.onclick = function() {colorSelection = 2;};
btnWhite.onclick = function() {colorSelection = 3;};
btnPurple.onclick = function() {colorSelection = 4;};
btnClear.onclick = function() {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
    column.remove();
    });  
    makeColumns(gridSize);
};
btnGridL.onclick = function() {  
    gridSize = 64;    
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
    column.remove();
    });  
    makeColumns(gridSize);
};
btnGridS.onclick = function() {
    gridSize = 32;
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
    column.remove();
    }); 
    makeColumns(gridSize);
};

function makeColumns(gridsize) {
    for (let i = 0; i < gridSize; i++) {
        let rowSize = null;
        const column = document.createElement("div");    
        column.classList.add("column");
        column.setAttribute("id", "column" + i);
        column.setAttribute("draggable", "false"); 
        let colId = column.getAttribute("id");    
        gridContainer.appendChild(column);
        if (gridSize == 64) {
            rowSize = "10px";
        } else {
            rowSize = "20px"
        }
        makeRows(gridSize, column, colId, rowSize);           
    }
}

function makeRows(gridSize, column, colId, rowSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");    
        row.classList.add("row");
        row.setAttribute("id", "row" + i + colId);
        row.addEventListener("mouseover", changeColor);
        row.setAttribute("draggable", "false");
        row.style.height = rowSize;
        row.style.width = rowSize;  
        column.appendChild(row);                  
    }
}

function changeColor() {    
    let grid = document.getElementById("grid-container");   
    grid.onmouseover = function(e) {
        let cellNumber = e.target.id;
        let cell = document.getElementById(cellNumber); 
        if (colorSelection == 1) {
            cell.style.backgroundColor = "black"; 
        } else if (colorSelection == 2) {
            cell.style.backgroundColor = "red"; 
        } else if (colorSelection == 3) {
            cell.style.backgroundColor = "white";
        } else {
            cell.style.backgroundColor = "purple"; 
        }
                       
    }   
}

makeColumns(gridSize);  