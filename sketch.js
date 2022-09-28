var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
	
	//ball
	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}
  
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	//bucket
	groundObj = new Ground (width/2,670,width,20);
	leftSide = new Ground (600,600,20,120);
	rightSide = new Ground (700,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  	ellipse(ball.position.x,ball.position.y,20);
	groundObj.display();
	leftSide.display();
	rightSide.display();

	keyPressed()
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-3})
	}
	if(keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:3,y:0})
	}
}

