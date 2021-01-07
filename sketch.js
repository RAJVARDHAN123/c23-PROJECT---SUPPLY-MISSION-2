var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:false} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:false} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:false} );
 	World.add(world, boxRightBody);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  Engine.update(engine);

  console.log(helicopterSprite.position.y)
  
  keyleft();
  keyright();
  keydown();
  
  drawSprites();
  
  if(packageSprite.position.y == 200){
	packageSprite.x = helicopterSprite.x;
  }
 
}

function keydown(){
	if (keyCode === DOWN_ARROW && helicopterSprite.position.x <= 465 && helicopterSprite.position.x >= 335) {
	
		packageSprite.y= packageBody.position.y ;

		packageSprite.x = helicopterSprite.x;
		
	  }
}

function keyright(){
	if (keyWentDown("right")) {
	
		helicopterSprite.velocityX = helicopterSprite.velocityX + 5;
		helicopterSprite.velocityY = helicopterSprite.velocityY ;
	
	}else if(keyWentUp("right")){
        helicopterSprite.velocityX = 0;
    }
}

function keyleft(){
	if (keyWentDown("left")) {
	
		helicopterSprite.velocityX = helicopterSprite.velocityX - 5;
		helicopterSprite.velocityY = helicopterSprite.velocityY ;
	
	}else if(keyWentUp("left")){
        helicopterSprite.velocityX = 0;
    }
}
