let gridContainer = document.getElementsByClassName('grid-container')
let col = document.getElementsByClassName('col')
    // add rows to the grid
let row = document.getElementsByClassName('row')
    // create new row



function makeRowMatch() {

    let cols = gridContainer[0].getElementsByClassName("col")
        // how many columns
    let colLength = cols.length;

    // length of Rows in first column
    let lengthRowInFirstCol = gridContainer[0].getElementsByClassName("col")[0].childElementCount

    // loop through cols
    for (let j = 0; j < colLength; j++) {
        // add row depend of the first row
        for (let i = cols[j].childElementCount; i < lengthRowInFirstCol; i++) {

            let newRow = document.createElement("div")
            newRow.className = "row"
            gridContainer[0].getElementsByClassName("col")[j].append(newRow)
        }
    }
}

function addRow() {
    let newRow = document.createElement("div")
    newRow.className = "row"
    col[0].append(newRow)
    makeRowMatch()
}

// add columns to the grid
function addCol() {
    if (document.getElementsByClassName("col") == 0) {
        let newCol = document.createElement("div")
        newCol.className = "col"
        gridContainer[0].appendChild("newCol")
    } else {
        let newCol = col[0].cloneNode(true);
        gridContainer[0].appendChild(newCol)


    }
}

// remove rows from the grid
function removeRow() {

    let cols = gridContainer[0].getElementsByClassName("col")
        // how many columns
    let colLength = cols.length;
    // parentNode.removeChild(childNode);
    for (let j = 0; j < colLength; j++) {

        let currentCol = gridContainer[0].getElementsByClassName("col")[j]

        currentCol.removeChild(currentCol.getElementsByClassName("row")[0]);
    }

}
// remove columns from the grid
// select a color from a dropdown menu of colors
// click on a single cell, changing its color to the currently selected color
// fill all uncolored cells with the currently selected color
// fill all cells with the currently selected color
// clear all cells / restore all cells to their original / initial color
// click and hold(mouseover) from a single cell(start) to a different cell(end) such that all affected / hovered - over cells from start to end change to the currently selected color