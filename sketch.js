const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var monster;
var supergirl;

var bg;

function preload() {
//preload the images here
 bg = loadImage("images/bg.jpg");
}

function setup() {
  createCanvas(1200, 400);
  // create sprites here

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(700,200,70,70);
  box2 = new Box(635,270,70,70);
  box3 = new Box(705,270,70,70);
  box4 = new Box(635,340,70,70);
  box5 = new Box(705,340,70,70);

  ground = new Ground(600,height,1200,20);

  monster = new Monster(795,270);

  supergirl = new Supergirl(200,50);

}

function draw() {
  background(bg);

  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  ground.display();

  monster.display();

  supergirl.display();

}