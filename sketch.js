const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ball;
var leftline, rightline, mainline;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

   
       ground = new ground(200, 380, 1000, 10);

       mainline = new Dustbin(470, 365, 200, 20 );
	leftline= new Dustbin(370, 305, 20, 100);
    rightline = new Dustbin(572, 305, 20, 100);
    
    ball = new paper(50, 50, 50, 50);
  

    

    

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    
    ground.display();

    mainline.display();
    leftline.display();
    rightline.display();

    ball.display();

    keyPressed();
}

function keyPressed(){
    if(keyCode === UP_ARROW ){

        Matter.Body.applyForce(ball.body,ball.body.position,{x:1, y:-4})
    }

}