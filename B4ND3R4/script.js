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
var x = 150,
    y = 150,
    velY = 15,
    velX = 10,
    speed = 5,
    friction = 0.95,
    keys = [];

update();
function update() {
    requestAnimationFrame(update);
    if(90 in keys && keys[90]) { //left
        decrementAngle();
        console.log("left");
    }
    
    if (88 in keys && keys[88]) { //right
        //x += dx/5;
        incrementAngle();
        console.log("right");
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

    velY *= friction;
    y += velY;
    velX *= friction;
    x += velX;

    if (x >= cvs.width + 10) {
        x = cvs.width + 10;
    } else if (x <= 80) {
        x = 80;
    }

    if (y > cvs.height + 10) {
        y = cvs.height + 10;
    } else if (y <= 80) {
        y = 80;
    }

    ctx.save();
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(obstacles, 220, 40);
    ctx.translate(x - 50, y - 40);
    ctx.drawImage(playerPlug, x, y);
    ctx.rotate(convertToRadians(angle));
    ctx.translate(-x - 50, -y - 40);
    ctx.drawImage(player, x, y);
    ctx.restore();
}

//SHOOTING REALISATION 
function bullet(B){
    B.width = 3;
    B.height = 3;
    B.color = "#000";
    B.draw = function(){
        canvas.fillStyle = this.color;
        canvas.fillRect(this.x, this.y, this.width, this.height);
    };
    B.explode = function(){
        setTimeout(function(){
            B.active = true;
        },100);
    };
    B.active = false;
    return B;
}

// 

//SHOOTING REALISATION END

window.addEventListener('keydown', doKeyDown, true);
window.addEventListener('keyup', doKeyUp, true);
document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
// PLAYER MOVING REALISATION END

// ROTATION COOL REALISATION START
// setInterval(drawRandomlyColoredRectangle, 20);
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
    angle += 5;
    if(angle > 360) {
        angle -= 360;
    }
}
function decrementAngle(){
    angle -= 5;
    if(angle < 0){
        angle += 360;
    }
}
var angle = 0;
// ROTATION REALLY COOL REALISATION END

