var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400)+car;
  //createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,500);
  car=createSprite(50,200,50,50);
  //car.shapecolor="grey";
  wall=createSprite(1200,350,60,height/2);
  wall.shapecolor=color(80,80,80);
  
}

function draw() {
  background(0,0,0);
  car.velocityX=speed;

  if(wall.x-car.x< (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500;
    if(deformation>180){
      car.shapecolor=color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car.shapecolor=color(230,230,0);
    }

    if(deformation<100){
      car.shapecolor=color(0,255,0);
    }
  }else{
    wall.shapecolor="white";
    car.shapecolor="grey";
  }
  console.log(wall.x-car.x);
  drawSprites();
}