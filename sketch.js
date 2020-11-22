var car
var wall
var speed, weight

function setup() {

  weight = random(100,1100)
  speed = random(20,120)
  createCanvas(1500,800);
  car = createSprite(100, 350, 100, 50);
  car.shapeColor = "blue"
  car.velocityX = speed
  
  wall = createSprite(1400,400,100,1000)
  wall.shapeColor = color(100,100,200)

}

function draw() {
  background(255,255,255);  
  if((wall.x+car.x)/2.08 < car.x ){
    car.velocityX = 0;
    
    var deformation = 0.5 * weight * speed * speed /22500;

    if(deformation >= 180){
      car.shapeColor = "red"
    }

    if(deformation < 180 && deformation > 80){
      car.shapeColor = "yellow"
    }
    if(deformation <= 80){
      car.shapeColor = "green"
    }
    
  }
  drawSprites();
}