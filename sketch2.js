var bg
var bg2

function preload(){
bg=loadImage("playg.png");
}
bg2=loadImage("swing.png")
function setup(){
    createCanvas(1200,800);

}



function draw(){
background("black");
image(bg,600,500);
image(bg2,200,500);
//playground mode
//boy's picture
//police man
drawSprites()
}