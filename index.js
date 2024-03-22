console.log("test")

const rows = 3;
const columns = 3;

let currTile;
let otherTile;

let turns = 0;

let imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

/*
let imgOrder = ["6", "3", "7", "2", "1", "8", "5", "9", "4"];
*/

window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            let tile = document.createElement("img"); /* tile is een jpg */
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            // drag function
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile);
        }
    }
}

function dragStart() {
    currTile = this; 
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
    
}

function dragDrop() {
    otherTile = this; 
}

function dragEnd() {
    if (!otherTile.src.includes("1.jpg")) {
        return;
    }

    let currCoords = currTile.id.split("-");
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isNear = moveLeft || moveRight || moveUp || moveDown;

    if (isNear) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }

    document.getElementById("restartButton").addEventListener("click", function() {
        restartGame();

    });

}

function restartGame() {
    turns = 0;
    document.getElementById("turns").innerText = turns;

    imgOrder = ["6", "3", "7", "2", "1", "8", "5", "9", "4"];
    
    const tiles = document.querySelectorAll("#board img");
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].src = imgOrder[i] + ".jpg";
    }

}