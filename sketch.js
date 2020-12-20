var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 100);
 movingRect= createSprite(400, 200, 100, 50);
fixedRect.shapeColor="red";
movingRect.shapeColor="red";
//movingRect.x-fixedRect.x===movingRect.width/2+fixedRect.width/2
//__475__ -400===50+25
//75===75

//movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
// -400<50+25
//25<75
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }else{
    fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
  }

  drawSprites();
}