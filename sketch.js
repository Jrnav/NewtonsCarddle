const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var b1, b2, b3, b4, b5;
var r1;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_options = {
		restitution: 0.95
	}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	b1 = Bodies.circle(300, 300, 10, ball_options)
	//World.add(world,b1);
	b2 = Bodies.circle(350, 300, 10, ball_options)
	//World.add(world,b2);
	b3 = Bodies.circle(400, 300, 10, ball_options)
	//World.add(world,b3);
	b4 = Bodies.circle(450, 300, 10, ball_options)	
	//World.add(world,b4);
	b5 = Bodies.circle(500, 300, 10, ball_options)
	//World.add(world,b5);

	r1 = new rope(b1, roof, -80, 0)
	r2 = new rope(b2, roof, -30, 0)
	r3 = new rope(b3, roof, 20, 0)
	r4 = new rope(b4, roof, 70, 0)
	r5 = new rope(b5, roof, 120, 0)
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine)

  rect(roof.position.x,roof.position.y,230,20);

  
  ellipse(b1.position.x, b1.position.y, 50)
  ellipse(b2.position.x, b2.position.y, 50)
  ellipse(b3.position.x, b3.position.y, 50)
  ellipse(b4.position.x, b4.position.y, 50)
  ellipse(b5.position.x, b5.position.y, 50)

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(b1, b1.position, {x: 1, y: 1})
	}
}
 