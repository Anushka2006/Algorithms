function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
 moveRect = createSprite(500,200,50,50);
 fixedRect.shapeColor="red";
 fixedRect.velocityX=-2;
  fixedRect.velocityY=-3;
  moveRect.shapeColor="red";
}

function draw() {
  background(255,25,255); 
  moveRect.x= World.mouseX;
  moveRect.y= World.mouseY; 
  
  
  
  console.log(fixedRect.velocityX);
  console.log(fixedRect.velocityY);
  
  if(moveRect.x-fixedRect.x<moveRect.width/2+fixedRect.width/2 &&
     fixedRect.x-moveRect.x<moveRect.width/2+fixedRect.width/2 && 
     moveRect.y-fixedRect.y<moveRect.height/2+fixedRect.height/2 && 
    fixedRect.y-moveRect.y<moveRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="green";
    moveRect.shapeColor="green";
    fixedRect.velocityY=-3;
    fixedRect.velocityX= 3;
    
  }
  else{
    fixedRect.shapeColor="red";
    moveRect.shapeColor= "red";
    
  }
  edges= createEdgeSprites();
  fixedRect.bounceOff(edges);
  drawSprites();
}