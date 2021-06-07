
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	Engine.update(engine);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var plane_options={
	isStatic: true
}

rotator = Bodies.rectangle(250,200,150,20,rotator_options);
world.add(world,rotator1);
	Engine.run(engine);var particle_options = {
		restitution:0.4,
		friction :0.02
	}

	particle1 = Bodies.circle(220,10,10,particle_options);
	world.add(world,particle);
Matter.Body.rotate(rotator,angle1)
Push();
translate(rotator1.Position.x,rotator1.position.y);
rotate(angle1);
rect(0,0,150,20);
pop();
angle1 +=0.2
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



