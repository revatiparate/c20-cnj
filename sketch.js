

var Tom, tomImg,tomImg2,tomImg3;
var Jerry, jerryImg,jerryImg2,jerryImg3;
var ground,groundImg;
function preload() {
    groundImg = loadImage("images/garden.png");
    tomImg= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);

    ground=createSprite(500,400,1000,800);
    ground.addAnimation("bg",groundImg);
    ground.scale=1.2;

    Tom = createSprite(870, 600);
    Tom.addAnimation("tomSleeping", tomImg);
    Tom.scale = 0.2;

    Jerry = createSprite(200, 600);
    Jerry.addAnimation("jerryStanding", jerryImg);
    Jerry.scale = 0.15;
  
}

function draw() {

    background(0);

    if(Tom.x - Jerry.x < (Tom.width/2 - Jerry.width/2))
    { 
        Tom.velocityX=0;
        Tom.addAnimation("tomlast", tomImg3);
        Tom.x =300;
        Tom.scale=0.2;
        Tom.changeAnimation("tomlast", tomImg3);
        Jerry.addAnimation("jerrylast", jerryImg3);
        Jerry.scale=0.15;
        Jerry.changeAnimation("jerrylast", jerryImg3);
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        Tom.velocityX = -5; 
        Tom.addAnimation("tomRunning", tomImg2);
        Tom.changeAnimation("tomRunning",tomImg2);
        
        Jerry.addAnimation("jerryRunning", jerryImg2);
        Jerry.changeAnimation("jerryRunning", jerryImg2);
    }
}