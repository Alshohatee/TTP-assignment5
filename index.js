let col = document.getElementsByClassName('col')
let gridContainer = document.getElementsByClassName('grid-container')

function addRow() {
    let newRow = document.createElement("div")
    newRow.className = "row"
    col[0].append(newRow)
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
// remove columns from the grid
// select a color from a dropdown menu of colors
// click on a single cell, changing its color to the currently selected color
// fill all uncolored cells with the currently selected color
// fill all cells with the currently selected color
// clear all cells / restore all cells to their original / initial color
// click and hold(mouseover) from a single cell(start) to a different cell(end) such that all affected / hovered - over cells from start to end change to the currently selected color