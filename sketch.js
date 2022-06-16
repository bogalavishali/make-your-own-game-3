var rabbit , rabbitImg;
var backgroundImg , backgroundSprite;
var carrot , carrotImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;


var score;




function preload(){
   backgroundImg = loadImage("background.png");
   rabbitImg = loadImage("rabbit.png");
   carrotImg = loadImage("carrot.png");

  
 
}





function setup() {
  createCanvas(displayWidth,displayHeight);
  backgroundSprite = createSprite(displayWidth/2-10,displayHeight/2-40, 50, 50);
  backgroundSprite.addImage(backgroundImg);
  backgroundSprite.scale = 1.1;

  rabbit = createSprite(550,370);
  rabbit.scale =0.5;
  rabbit.addImage(rabbitImg);

  carrotsGroup = createGroup();

  
  
}


function draw(){
  background(0); 


  edges= createEdgeSprites();
  rabbit.collide(edges);
  carrotsGroup.collide(rabbit);

if (gameState === PLAY){
if(keyDown("Right")) {
    rabbit.x = rabbit.x+5;
  }

if(keyDown("Left")) {
   rabbit.x = rabbit.x-5;
}
if(keyDown("UP")) {
  rabbit.y = rabbit.y-5;
}

if(keyDown("DOWN")) {
 rabbit.y = rabbit.y+5;
}


//function to spawn carrots
spawnCarrots();



}



drawSprites();
 
}
function spawnCarrots(){
    //write your code here
    if (frameCount % 80 == 0) {
      var carrot = createSprite(random(500,1100),random(100,500),40,40);
      carrot.addImage(carrotImg);
      carrot.scale = 0.1;
      carrot.velocityX = -5;

}
}