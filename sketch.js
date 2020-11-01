const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
box=new Box(200,300,50,50);
    box1=new Box(240,100,50,50);

    ground=new ground(200,390,800,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box.display();
    box1.display();
    ground.display();
}