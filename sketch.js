var fixedRect, movingRect;

function setup() {
  createCanvas(1400,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green"; 
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
}

function draw() {
  background("pink");  
  movingRect.x = World.mouseX;
  fixedRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);
  if(movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2+movingRect.height/2)
  {
    fixedRect.shapeColor = 'red';
    movingRect.shapeColor = 'red';
  }
  else
  { 
    fixedRect.shapeColor = 'green';
    movingRect.shapeColor ='green';
  }
  drawSprites();
}