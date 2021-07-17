const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var backgroundImage
var engine,world
var snow=[]
function preload(){
  backgroundImage=loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create()
  world=engine.world
  snowfelk=new Snow2(400,100)
  Engine.run(engine)
}

function draw() {
  Engine.update(engine)
  background(backgroundImage);  
snowfelk.display()
if(frameCount%50===0){
  snow.push(new Snow2(random(100,700),0))
  
}
for(var i=0;i<snow.length;i++){
  snow[i].display()
}
  drawSprites();
}