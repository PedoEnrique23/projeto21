
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,ball,ground,left,right;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		restitution:0.3,
		density:1.2
	}

	var ground_options={
		isStatic:true
	}

	ball=Bodies.circle(260,100,20,ball_options);
	World.add(world,ball);

	ground= Bodies.rectangle(width/2,670,width,20,ground_options); 
	World.add(world,ground); 
	
	left= Bodies.rectangle(1100,600,20,120,ground_options); 
	World.add(world,left); 
	
	right= Bodies.rectangle(1350,600,20,120,ground_options); 
	World.add(world,right);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20); 
  rect(ground.position.x,ground.position.y,width,20); 
  rect(left.position.x,left.position.y,20,120); 
  rect(right.position.x,right.position.y,20,120);
  
  Engine.update(engine);
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}



