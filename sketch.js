var bullet,wall;
var thickness,damage,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(400,200,30,10);
  bullet.shapeColor="white";
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall=createSprite(1000,200,thickness,height/2);
  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
  bullet.velocityX=speed;
}

function draw() {
  background("black");
  isTouching(bullet,wall);
  drawSprites();
  text(damage,100,100);
}
function isTouching(object1,object2){
  if((object1.width/2+object2.width/2) < (object1.x-object2.x)){
    object1.velocityX=0;
    if(damage>10){
        object2.shapeColor="red";
    }
    else if(damage<10){
      object2.shapeColor="green";
    }
  }
}