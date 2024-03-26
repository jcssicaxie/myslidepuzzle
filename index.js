// code gebaseerd op https://www.youtube.com/watch?v=sD3Os4H_EOU&t=151s 
const rows = 3;
const columns = 3;

let turns = 0;
// let imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let imgOrder = ["6", "3", "7", "2", "1", "8", "5", "9", "4"];

// ChatGPT
// Prompt: hoe voeg je een shufflefunctie toe?
function shuffleTiles() {
    for (let i = imgOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imgOrder[i], imgOrder[j]] = [imgOrder[j], imgOrder[i]];
    }
}

window.onload = function() {
    shuffleTiles(); 

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile);
        }
    }
}

function dragStart() {
    currentTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    if (!otherTile.src.includes("1.jpg")) {
        return;
    }

    let currentCoords = currentTile.id.split("-");
    let r = parseInt(currentCoords[0]);
    let c = parseInt(currentCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2= parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isNext = moveLeft || moveRight || moveUp || moveDown;

        if (isNext) { 
        let currentImg = currentTile.src;
        let otherImg = otherTile.src;

        currentTile.src = otherImg;
        otherTile.src = currentImg

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }
} 