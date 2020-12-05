
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,world,engine,dustbin1,dustbin2,dustbin3,ground;

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100, 300, 20);
	dustbin1 = new Dustbin(720, 390, 100, 10);
	dustbin2 = new Dustbin(665, 355, 10, 80);
	dustbin3 = new Dustbin(770, 355, 10, 80);
	 
	//Create a Ground
	ground = Bodies.rectangle(400, 400, 800, 10, {isStatic: true} );
	World.add(world, ground);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("black");

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position,{
		x: 12,
		y: -13
	  });
	}
  }