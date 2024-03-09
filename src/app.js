// define available map tile types
const mapTileTypes = [
    {
        name: 'meadow',
        img: 'meadow.png',
        walkable: true
    },
    {
        name: 'castle',
        img: 'castle.png',
        walkable: true
    },
    {
        name: 'forest',
        img: 'forest.png',
        walkable: true
    },
    {
        name: 'pond',
        img: 'pond.png',
        walkable: false
    },
    {
        name: 'village',
        img: 'village.png',
        walkable: true
    }
]

const mapWidth = 8;
const mapHeight = 8;
// generate map randomly
var mapTiles = [];
for(let i = 0; i < mapHeight * mapWidth; i++){
    let randVar = Math.random();
    if(randVar < 0.4){
        mapTiles.push(mapTileTypes[0]);
    }
    else if(randVar < 0.5){
        mapTiles.push(mapTileTypes[1]);
    }
    else if(randVar < 0.7){
        mapTiles.push(mapTileTypes[2]);
    }
    else if(randVar < 0.8){
        mapTiles.push(mapTileTypes[3]);
    }
    else{
        mapTiles.push(mapTileTypes[4]);
    }
}

console.log(mapTiles);

const mapDisplay = document.querySelector('#map')

function createMap(){
    for(let row = 0; row < mapHeight; row++){
        const mapRow = document.createElement('div');
        //mapRow.setAttribute('row-id', row)
        mapDisplay.appendChild(mapRow);
        for(let col = 0; col < mapWidth; col++){
            const mapTileObject = mapTiles[row*mapWidth+col];
            const mapTileDiv = document.createElement('img');
            mapTileDiv.setAttribute('src', './img/'+mapTileObject.img);
            mapTileDiv.setAttribute('src-orig', './img/'+mapTileObject.img); // original source for when knight moves off the tile
            mapTileDiv.setAttribute('row-id', row);
            mapTileDiv.setAttribute('col-id', col);
            mapTileDiv.setAttribute('walkable', mapTileObject.walkable);
            console.log(mapTileDiv, row, col);
            //mapDisplay.appendChild(mapTile);
            mapRow.appendChild(mapTileDiv);
        }
        mapDisplay.appendChild(mapRow);
    }
}

createMap();

var PlayerX = 0;
var PlayerY = 0;
const playerImPath = "./img/knight.png";

var playerTile = document.querySelector(`#map > div:nth-child(${PlayerY + 1}) > img[col-id="${PlayerX}"]`)
playerTile.setAttribute('src', playerImPath);

// connect pressing WASD to movement functions
document.addEventListener("keydown", function(event) {
if (event.key === "d") {
    movePlayerRight(PlayerX, PlayerY);
}
});

document.addEventListener("keydown", function(event) {
if (event.key === "a") {
    movePlayerLeft(PlayerX, PlayerY);
}
});

document.addEventListener("keydown", function(event) {
if (event.key === "w") {
    movePlayerUp(PlayerX, PlayerY);
}
});

document.addEventListener("keydown", function(event) {
if (event.key === "s") {
    movePlayerDown(PlayerX, PlayerY);
}
});

function movePlayerUp() {
// Check if the move is valid (within map bounds and not a wall tile)
if (PlayerY > 0) {
    const targetTile = document.querySelector(`#map > div:nth-child(${PlayerY }) > img[col-id="${PlayerX}"]`);
    if(targetTile.getAttribute('walkable') == 'true'){
        const currentTile = document.querySelector(`#map > div:nth-child(${PlayerY + 1}) > img[col-id="${PlayerX}"]`);
        currentTile.setAttribute('src', currentTile.getAttribute('src-orig'))

        PlayerY--;
        targetTile.setAttribute('src', playerImPath)
    }
     else {
        console.log("Invalid move: cannot move to unwalkable tile.");
    }
}
else {
    console.log("Invalid move: cannot move up.");
}
}

function movePlayerDown() {
// Check if the move is valid (within map bounds and not a wall tile)
if (PlayerY < mapHeight - 1) {    
    const targetTile = document.querySelector(`#map > div:nth-child(${PlayerY +2}) > img[col-id="${PlayerX}"]`);
    if(targetTile.getAttribute('walkable') == 'true'){
        const currentTile = document.querySelector(`#map > div:nth-child(${PlayerY + 1}) > img[col-id="${PlayerX}"]`);
        currentTile.setAttribute('src', currentTile.getAttribute('src-orig'))

        PlayerY++;

        targetTile.setAttribute('src', playerImPath);
    }
    else {
        console.log("Invalid move: cannot move to unwalkable tile.");
    }
}
else {
    console.log("Invalid move: cannot move up.");
}
}

function movePlayerRight() {
// Check if the move is valid (within map bounds and not a wall tile)
if (PlayerX < mapWidth - 1) {    
    const targetTile = document.querySelector(`#map > div:nth-child(${PlayerY +1}) > img[col-id="${PlayerX+1}"]`);
    if(targetTile.getAttribute('walkable') == 'true'){
        const currentTile = document.querySelector(`#map > div:nth-child(${PlayerY + 1}) > img[col-id="${PlayerX}"]`);
        currentTile.setAttribute('src', currentTile.getAttribute('src-orig'))
    
        PlayerX++;
    
        targetTile.setAttribute('src', playerImPath);
    }
    else {
        console.log("Invalid move: cannot move to unwalkable tile.");
    }
} 
else {
    console.log("Invalid move: cannot move right.");
}
}
    
function movePlayerLeft() {
// Check if the move is valid (within map bounds and not a wall tile)
if (PlayerX > 0) {    
    const targetTile = document.querySelector(`#map > div:nth-child(${PlayerY +1}) > img[col-id="${PlayerX-1}"]`);
    if(targetTile.getAttribute('walkable') == 'true'){
        const currentTile = document.querySelector(`#map > div:nth-child(${PlayerY + 1}) > img[col-id="${PlayerX}"]`);
        currentTile.setAttribute('src', currentTile.getAttribute('src-orig'))

        PlayerX--;

        targetTile.setAttribute('src', playerImPath);
    }
    else {
        console.log("Invalid move: cannot move to unwalkable tile.");
    }
} 
else {
    console.log("Invalid move: cannot move left.");
}
}