const hoover = {x: 1, y: 2, floorWidth: 5, floorHeight: 5};

const dirtLocation = [[1, 0], [2, 2], [2, 3]];

const hooverDirections = ["N", "N", "E", "S", "E", "E", "S", "W", "N", "W", "W"];

let hitcount = 0;

function moveNorth () {
    if (hoover.y + 1 < hoover.floorHeight) {
        hoover.y = hoover.y + 1;
    }
}

function moveSouth () {
    if (hoover.y - 1 > 0) { 
        hoover.y = hoover.y - 1;
    }
}

function moveEast () {
    if (hoover.x + 1 < hoover.floorWidth) {
        hoover.x = hoover.x + 1;
    }
}

function moveWest () {
    if (hoover.x - 1 > 0) {
        hoover.x = hoover.x - 1;
    }
}

function move(direction) {
    switch (direction) {

        case "N":
            moveNorth(hoover);
            break;
        case "S":
            moveSouth(hoover);
            break;
        case "W":
            moveWest(hoover);
            break;
        case "E":
            moveEast(hoover);
            break;
    }
}

for (i =0; i < hooverDirections.length; i++) {
    move(hooverDirections[i]);
    for (j=0; j < dirtLocation.length; j++) {
        if (hoover.x == dirtLocation[j][0] && hoover.y == dirtLocation[j][1]) {
            indextoRemove = j;
            dirtLocation.splice(j ,1);
            hitcount++;
        }
    }
}
    console.log(`${hoover.x} ${hoover.y}`);
    console.log(hitcount);