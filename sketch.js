const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane;
var rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new plane (600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(20,500);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    
 if(hammer.isTouching(rubber)){
     rubber.restitution = 1;
 }
}