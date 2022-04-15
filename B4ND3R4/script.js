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

var deltaX = 20;
var deltaY = 350;

// Moving player 
window.addEventListener ("keydown", keysPressed, false);
window.addEventListener ("keyup", keysReleased, false);
var keys = [];
function keysPressed(e) {

// store an entry for every key pressed
keys[e.keyCode] = true;

    // left
    if (keys[37]) {
    deltaX -= 2;
    }
    // right 
    if (keys[39]) {
    deltaX += 2;
    }
    // down
    if (keys[38]) {
    deltaY -= 2; 
    }
    // wp
    if (keys[40]) {
    deltaY += 2;
    }
    e.preventDefault();
}
    function keysReleased (e) {
    // mark keys that were released
    }


// DRAW THE SCENE
function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(obstacles, 220, 40);
    ctx.drawImage(player, deltaX, deltaY);
}