var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var player = new Image();
var bg = new Image();
var obstacles = new Image();
var enemies = new Image();

player.src = "img/stepan-bandera.png";
bg.src = "img/game-bg.png";
obstacles.src = "img/bluecar.png";
enemies.src = "img/enemie.png";

enemies.onload = draw;

// Moving player 
var deltaX = 0;
var deltaY = 0;
window.addEventListener ("keydown", keysPressed, false);
window.addEventListener ("keyup", keysReleased, false);
var keys = [];
function keysPressed(e) {

// store an entry for every key pressed
keys[e.keyCode] = true;

    // left
    if (keys[37]) {
    deltaX -= 10;
    }
    // right 
    if (keys[39]) {
    deltaX += 10;
    }
    // down
    if (keys[38]) {
    deltaY -= 10; 
    }
    // up
    if (keys[40]) {
    deltaY += 10;
    }
    e.preventDefault();
}
    function keysReleased (e) {
    // mark keys that were released
        keys[e.keyCode] = false;
    }

// DRAW THE SCENE
function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(obstacles, 220, 40);
    ctx.drawImage(player, deltaX, deltaY);
}


