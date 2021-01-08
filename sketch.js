const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob;
var roof;
var rope;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  bob =  new Bob(150,400);

  roof = new Roof(400,70,820,10);

  rope = new Rope(bob.body,roof.body);
	
}
function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

  bob.display();
  roof.display();
  rope.display();

 
}
