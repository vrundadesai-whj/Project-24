
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;
var groundobj;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	targetSprite1=createSprite(650, height-45, 200, 20);
	targetSprite1.shapeColor = "grey";

	targetSprite2=createSprite(550, height-85, 20, 100);
	targetSprite2.shapeColor = "grey";

	targetSprite3=createSprite(750, height-85, 20, 100);
	targetSprite3.shapeColor = "grey";




	targetBody1 = Bodies.rectangle(650, height-60, 200, 20, {isStatic:true});
	World.add(world, targetBody1);

	targetBody2 = Bodies.rectangle(550 , height-85, 20, 100, {isStatic:true});
	World.add(world, targetBody2);

	targetBody3 = Bodies.rectangle(750, height-85, 20, 100, {isStatic:true});

	paper = new Paper(100, 600,40);

	groundobj=new Ground(width/2,680,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine);

  paper.display();
  groundobj.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y:-85});
	
}

}

