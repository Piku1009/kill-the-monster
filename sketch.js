var monster1Image,monster2image,superheroimage,backgroundimage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1;
function preload() {
//preload the images here
  monster1Image = loadImage("images/Monster-01.png");
  monster2image = loadImage("images/Monster-02.png");
  superheroimage = loadImage("images/Superhero-01.png");
  backgroundimage = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(3000/2,400,3000,20);
  hero = new Hero();
  fly = new Fly(hero.body,{x:300,y:100});
  box1 = new Box(1000,200);
  box2 =  new Box(1100,200);
  box3 = new Box(1000,300);
  box4 = new Box(1100,300);
  box5 = new Box(1000,100);
  box6 = new Box(1100,100);
  box7 = new Box(900,100);
  box8 = new Box(900,200);
  box9 = new Box(900,300);
 
}

function draw() {
  background(backgroundimage);
  Engine.update(engine);

  ground.display();
  hero.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  image(monster1Image,2500,400,400,400);
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x: mouseX,y: mouseY})
}
