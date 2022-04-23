// GENERAL CODE
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

var player = new Image();
var rotatePlug = new Image();
var playerPlug = new Image();
var bg = new Image();
var obstacles = new Image();
var enemies = new Image();

player.src = "img/stepan-bandera.png";
bg.src = "img/game-bg.png";
obstacles.src = "img/bluecar.png";
enemies.src = "img/enemie.png";
// GENERAL CODE END

// PLAYER MOVING REALISATION
var playerXpos = 150,
    playerYpos = 150,
    velY = 15,
    velX = 10,
    speed = 7,
    friction = 0.95,
    keys = [];

function playerMoving() {
    if(90 in keys && keys[90]) {
        decrementAngle();
        // console.log("left");
    }
    
    if (88 in keys && keys[88]) {
        incrementAngle();
        // console.log("right");
    }

    if (keys[32]) { //shoot
        shooting = true;
        console.log("shoot");
    }

    velY *= friction;
    playerYpos += velY;
    velX *= friction;
    playerXpos += velX;

    if (playerXpos >= cvs.width + 10) {
        playerXpos = cvs.width + 10;
    } else if (playerXpos <= 80) {
        playerXpos = 80;
    }

    if (playerYpos > cvs.height + 10) {
        playerYpos = cvs.height + 10;
    } else if (playerYpos <= 80) {
        playerYpos = 80;
    }

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

    window.addEventListener('keydown', doKeyDown, true);
    window.addEventListener('keyup', doKeyUp, true);

    document.body.addEventListener("keydown", function (e) {
        keys[e.keyCode] = true;
    });
    document.body.addEventListener("keyup", function (e) {
        keys[e.keyCode] = false;
    });
}

// Rotation

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
    angle += 4;
    if(angle > 360) {
        angle -= 360;
    }
}
function decrementAngle(){
    angle -= 4;
    if(angle < 0){
        angle += 360;
    }
}

var angle = 0;

// Rotation end
// PLAYER MOVING REALISATION END

//SHOOTING REALISATION
var bulletXpos = 0;
var bulletYpos = 0;
const BULLET_WIDTH = 16;
const BULLET_HEIGHT = 6;
var bulletSpeed = 1.09;

var shooting = false; 
var shot = false;

// document.addEventListener("keydown", KeyDown, false);
// document.addEventListener("keyup", KeyUp, false);

function bulletShoot() {
    if(shooting && shot == false) {
        bulletXpos = playerXpos + player.width - 30;
        bulletYpos = playerYpos + player.height - 17;
        shot = true;
    }
    if(shooting && shot) {
        bulletXpos *= bulletSpeed;
    }
    if(bulletXpos < 0 || bulletXpos > cvs.width + 400) {
        shot = false; 
        shooting = false;
    }
    if(bulletYpos < 0 || bulletYpos > cvs.height) {
        shot = false; 
        shooting = false;
    }
    if(shot == false && shooting == false) {
        bulletXpos = 0;
        bulletYpos = 0;
    }
}
//SHOOTING REALISATION END

// GENERATING OBSTACLES

// var obstX;
// var obstY;
// var bigObstWidth;
// var bigObstHeight;

// let bigObst = [
//     {
//         obstX : Math.random() * innerWidth,
//         obstY : Math.random() * innerHeight,
//     }

// ]

// GENERATING OBSTACLES END

update();
function update() {
    requestAnimationFrame(update);

    playerMoving();
    bulletShoot();

    ctx.save();
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    ctx.drawImage(bg, 0, 0); // background
    ctx.drawImage(obstacles, 220, 40); // obstacles
    
    ctx.translate(playerXpos - 50, playerYpos - 40);
    ctx.drawImage(playerPlug, playerXpos, playerYpos);
    ctx.rotate(convertToRadians(angle));
    ctx.translate(-playerXpos - 50, -playerYpos - 40);

    ctx.drawImage(player, playerXpos, playerYpos); // player
    ctx.fillRect(bulletXpos, bulletYpos, BULLET_WIDTH, BULLET_HEIGHT); // bullet
    ctx.restore();
}




