const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisionHeight = 300;
var divisions = [];
var plinkos = [];
var particles = [];




function setup() {
  createCanvas(480,800);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;
 
 
 ground = new Ground(600,height,1200,20);
 

 for(var k = 0; k <=width; k = k +80){
 divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
//divisions[k].display();
}

for (var j = 40; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}

for(var j = 15; j <=width-10; j = j+50)
{
  plinkos.push(new Plinko(j,175))
}
 
}

function draw() {
  background(0);  
  text(mouseX + "," + mouseY , 20,20);
Engine.update(engine);

for (var j = 0; j < particles.length; j++ ){
  particles[j].display();
}

for(var k = 0; k < divisions.length; k++){
  divisions[k].display();

}
for (var j =0; j < plinkos.length; j++){
  plinkos[j].display();
}

if(frameCount%60==0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}


ground.display();



  drawSprites();

}