var obstacle1, obstacle2, obstacle3;
var player, form;
var final;
var stopwatch;
var backgroundImg;
var gameState = "webpage"
var bg = "images/backgroundwh.jpg"

function setup() {
  createCanvas(1200, 400);
  obstacle1 = new Obstacle(200,100);
  obstacle2 = new Obstacle(400,100);
  obstacle3 = new Obstacle(800,100);
  player = ellipse(100,100,100,100);
  fill("black");
  final = createSprite(1100,200);
  stopwatch = 0;
  form = new Form();
}

function draw(){
  background(255);
  form.display();

  if(backgroundImg)
        background(backgroundImg);

  if (gameState = "start"){
    form.hide();

    obstacle1.display();
    obstacle2.display();
    obstacle3.display();
  }

  if(gameState = "play"){

  if (frameCount % 60 == 0) {
    stopwatch ++;
  }

  if(player.isTouching(player,obstacle1)||player.isTouching(player,obstacle2)||player.isTouching(player,obstacle3)){
    stopwatch += 5;
  }

  if(keyPressed(UP)){
    player.velocityY = -1
  }

  if(keyPressed(DOWN)){
    player.velocityY = 1
  }

  if(keyPressed(LEFT)){
    player.velocityX = -1
  }

  if(keyPressed(RIGHT)){
    player.velocityX = 1
  }

  if(keyCode(65)){
    gameState = "start";
  }

  if(player.isTouching(player,final)){
    text("Time: " + stopwatch, 1100, 200);
    fontcolor("black");
    gameState = "done";
  } 
}
  gameState = "start"
  
  gameState = "play"
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}



