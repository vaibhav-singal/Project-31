
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var sample;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;



function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	
    ground = new Ground(240,787,480,26);
   

    for(var i = 0; i <= width; i = i+80) {
      divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
    }

    for(var j = 40; j <=width; j=j+50){
      plinkos.push(new Plinko(j,75,10));
    }

    for(var j = 15; j<=width-10; j = j+50){
      plinkos.push(new Plinko(j,175,10));
    }

    for(var j = 40; j <=width; j=j+50){
      plinkos.push(new Plinko(j,275,10));
    }

    for(var j = 15; j<=width-10; j = j+50){
      plinkos.push(new Plinko(j,375,10));
    }

    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
    }

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  

  for(var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }


  
  drawSprites();
 
}



