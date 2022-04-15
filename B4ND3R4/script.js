// GENERAL CODE
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
// GENERAL CODE END

// PLAYER MOVING REALISATION
var x = 150,
    y = 150,
    velY = 0,
    velX = 0,
    speed = 10,
    friction = 0.95,
    keys = [];

function update() {
    requestAnimationFrame(update);
    
    if (keys[38]) {
        if (velY > -speed) {
            velY--;
        }
    }
    
    if (keys[40]) {
        if (velY < speed) {
            velY++;
        }
    }
    if (keys[39]) {
        if (velX < speed) {
            velX++;
        }
    }
    if (keys[37]) {
        if (velX > -speed) {
            velX--;
        }
    }

    velY *= friction;
    y += velY;
    velX *= friction;
    x += velX;

    if (x >= 1155) {
        x = 1155;
    } else if (x <= 5) {
        x = 5;
    }

    if (y > 650) {
        y = 650;
    } else if (y <= 5) {
        y = 5;
    }

    ctx.clearRect(0, 0, 1280, 720);
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(obstacles, 220, 40);
    ctx.drawImage(player, x, y);
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
// PLAYER MOVING REALISATION END

// ROTATION COOL REALISATION START
window.addEventListener('keydown', doKeyDown, true);
window.addEventListener('keyup', doKeyUp, true);

var keys = new Array();
function doKeyDown(evt){
    keys[evt.keyCode] = true;
}
function doKeyUp(evt){
    keys[evt.keyCode] = false;
}
function convertToRadians(degree) {
    return degree*(Math.PI/180);
}

function incrementAngle() {
    angle += 10;
    if(angle > 360) {
        angle -= 360;
    }
}
function decrementAngle(){
    angle -= 10;
    if(angle < 0){
        angle += 360;
    }
}

function drawRandomlyColoredRectangle() {  
    if(90 in keys && keys[90]) { //left
        decrementAngle();
        console.log("left");
    }
    
    if (88 in keys && keys[88]) { //right
        //x += dx/5;
        incrementAngle();
        console.log("right");
    }
    
    context.save();
    context.clearRect(0,0,1280,720);
    context.save();
    context.translate(640,360);
    context.rotate(convertToRadians(angle));
    context.drawImage(player, -20, -25);
    context.restore();
}
// ROTATION REALLY COOL REALISATION END

var context = document.getElementById('canvas').getContext('2d');;
var angle = 0;

setInterval(drawRandomlyColoredRectangle, 20);
update();