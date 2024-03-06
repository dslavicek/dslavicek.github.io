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
        mapDisplay.appendChild(mapRow);
        for(let col = 0; col < mapWidth; col++){
            const mapTile = document.createElement('img');
            mapTile.setAttribute('src', '../img/'+mapTiles[row*mapWidth+col].img);
            console.log(mapTile, row, col);
            //mapDisplay.appendChild(mapTile);
            mapRow.appendChild(mapTile);
        }
    }
}

createMap();