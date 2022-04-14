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

function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(obstacles, 220, 40);
    ctx.drawImage(player, 20, 350);
}

enemies.onload = draw;