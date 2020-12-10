var thickness, wall;
var car,speed,weight;
function setup() {
  createCanvas(800,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  car = createSprite(50, 200, 50, 10);
  wall = createSprite(500,250,thickness,height/2);
  wall.shapeColor = "grey";
  car.velocityX = speed;
}

function draw() {  
  background(255,255,255);

  if(wall.x-car.x<(car.width+wall.width)/2) {
  car.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(deformation>10) {
    wall.shapeColor = "red";
  }
  if(deformation<10) {
    wall.shapeColor = "green";
  }
}
drawSprites();
}
