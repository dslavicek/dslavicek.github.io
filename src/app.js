// define available map tile types
const mapTileTypes = [
    {
        name: 'meadow',
        img: 'meadow.png'
    },
    {
        name: 'castle',
        img: 'castle.png'
    },
    {
        name: 'forest',
        img: 'forest.png'
    },
    {
        name: 'pond',
        img: 'pond.png'
    },
    {
        name: 'village',
        img: 'village.png'
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
    for (let row = 0; row < mapHeight; row++){
        const mapRow = document.createElement('div');
        //mapRow.setAttribute('row-id', row)
        mapDisplay.appendChild(mapRow);
        for(let col = 0; col < mapWidth; col++){
            const mapTile = document.createElement('img');
            mapTile.setAttribute('src', './img/'+mapTiles[row*mapWidth+col].img);
            mapTile.setAttribute('src-orig', './img/'+mapTiles[row*mapWidth+col].img);
            mapTile.setAttribute('row-id', row)
            mapTile.setAttribute('col-id', col)
            console.log(mapTile, row, col);
            //mapDisplay.appendChild(mapTile);
            mapRow.appendChild(mapTile);
        }
    }
}

createMap();

var PlayerX = 0;
var PlayerY = 0;
const playerImPath = "./img/knight.png";

var playerTile = document.querySelector(`#map > div:nth-child(${PlayerY + 1}) > img[col-id="${PlayerX}"]`)
playerTile.setAttribute('src', playerImPath);


document.addEventListener("keydown", function(event) {
if (event.key === "d") {
    // Function to be executed on "d" key press
    movePlayerRight(PlayerX, PlayerY);
}
});

document.addEventListener("keydown", function(event) {
if (event.key === "a") {
    // Function to be executed on "d" key press
    movePlayerLeft(PlayerX, PlayerY);
}
});

document.addEventListener("keydown", function(event) {
if (event.key === "w") {
    // Function to be executed on "d" key press
    movePlayerUp(PlayerX, PlayerY);
}
});

document.addEventListener("keydown", function(event) {
if (event.key === "s") {
    // Function to be executed on "d" key press
    movePlayerDown(PlayerX, PlayerY);
}
});

function movePlayerUp(row, col) {
// Check if the move is valid (within map bounds and not a wall tile)
if (PlayerY > 0) {    

    // Update the position of the player tile visually (replace with your implementation)
    const currentTile = document.querySelector(`#map > div:nth-child(${PlayerY + 1}) > img[col-id="${PlayerX}"]`);
    currentTile.setAttribute('src', currentTile.getAttribute('src-orig'))

    PlayerY--;

    const newTile = document.querySelector(`#map > div:nth-child(${PlayerY + 1}) > img[col-id="${PlayerX}"]`);
    newTile.setAttribute('src', playerImPath);
} else {
    console.log("Invalid move: cannot move up.");
}
}

function movePlayerDown(row, col) {
// Check if the move is valid (within map bounds and not a wall tile)
if (PlayerY < mapHeight - 1) {    

    // Update the position of the player tile visually (replace with your implementation)
    const currentTile = document.querySelector(`#map > div:nth-child(${PlayerY + 1}) > img[col-id="${PlayerX}"]`);
    currentTile.setAttribute('src', currentTile.getAttribute('src-orig'))

    PlayerY++;

    const newTile = document.querySelector(`#map > div:nth-child(${PlayerY + 1}) > img[col-id="${PlayerX}"]`);
    newTile.setAttribute('src', playerImPath);
} else {
    console.log("Invalid move: cannot move down.");
}
}

function movePlayerRight(row, col) {
    // Check if the move is valid (within map bounds and not a wall tile)
    if (PlayerX < mapWidth - 1) {    
    
        // Update the position of the player tile visually (replace with your implementation)
        const currentTile = document.querySelector(`#map > div:nth-child(${PlayerY + 1}) > img[col-id="${PlayerX}"]`);
        currentTile.setAttribute('src', currentTile.getAttribute('src-orig'))
    
        PlayerX++;
    
        const newTile = document.querySelector(`#map > div:nth-child(${PlayerY + 1}) > img[col-id="${PlayerX}"]`);
        newTile.setAttribute('src', playerImPath);
    } else {
        console.log("Invalid move: cannot move right.");
    }
    }
    
    function movePlayerLeft(row, col) {
    // Check if the move is valid (within map bounds and not a wall tile)
    if (PlayerX > 0) {    
    
        // Update the position of the player tile visually (replace with your implementation)
        const currentTile = document.querySelector(`#map > div:nth-child(${PlayerY + 1}) > img[col-id="${PlayerX}"]`);
        currentTile.setAttribute('src', currentTile.getAttribute('src-orig'))
    
        PlayerX--;
    
        const newTile = document.querySelector(`#map > div:nth-child(${PlayerY + 1}) > img[col-id="${PlayerX}"]`);
        newTile.setAttribute('src', playerImPath);
    } else {
        console.log("Invalid move: cannot move left.");
    }
    }