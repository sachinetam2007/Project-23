var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottomRectS,bottomRectB;
var leftRectS,leftRectB;
var rightRectS,rightRectB;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    
	bottomRectS=createSprite(350, height-45,200 ,20);
	bottomRectS.shapeColor=color("lightgreen");

	
	leftRectS=createSprite(250, 615,20 ,100);
	leftRectS.shapeColor=color("lightgreen");
	
	rightRectS=createSprite(450, 615,20 ,100);
	rightRectS.shapeColor=color("lightgreen");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	bottomRectB=Bodies.rectangle(350,height-45,200,20,{isStatic:true});
	World.add(world,bottomRectB);
	
	leftRectB=Bodies.rectangle(250,615,20,100,{isStatic:true});
	World.add(world,leftRectB);

	rightRectB=Bodies.rectangle(450,615,20,100,{isStatic:true});
	World.add(world,rightRectB);
	Engine.run(engine);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	
	
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  bottomRectS.x=bottomRectB.position.x
  bottomRectS.y=bottomRectB.position.y
  leftRectS.x=leftRectB.position.x
  leftRectS.x=leftRectB.position.x
  rightRectS.x=rightRectB.position.x
  rightRectS.x=rightRectB.position.x

  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody,false)// Look at the hints in the document and understand how to make the package body fall only on
    
  }
if(keyCode===LEFT_ARROW) {
	helicopterSprite.x=helicopterSprite.x-20;
	 translation={x:-20,y:0} 
	 Matter.Body.translate(packageBody, translation)
} 

if(keyCode===RIGHT_ARROW) {
	helicopterSprite.x=helicopterSprite.x+20;
	 translation={x:20,y:0} 
	 Matter.Body.translate(packageBody, translation)
} 
}



