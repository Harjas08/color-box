var fixedRect, movingRect;
var rec1, rec2, rec3, rec4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rec1=createSprite(100,100,50,50);
  rec1.shapeColor="green";
  rec2=createSprite(200,100,50,50);
  rec2.shapeColor="green";
  rec3=createSprite(300,100,50,50);
  rec3.shapeColor="green";
  rec4=createSprite(400,100,50,50);
  rec4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
  if(isTouching(movingRect, rec3)){
    movingRect.shapeColor="blue";
    rec3.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    rec3.shapeColor="green";
  }
  if(isTouching(movingRect, rec1)){
    movingRect.shapeColor="blue";
    rec1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    rec1.shapeColor="green";
  }
  if(isTouching(movingRect, rec2)){
    movingRect.shapeColor="blue";
    rec2.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    rec2.shapeColor="green";
  }
  if(isTouching(movingRect, rec4)){
    movingRect.shapeColor="blue";
    rec4.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    rec4.shapeColor="green";
  }
  drawSprites();

}
