const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop=[], umbrella;
var maxDrops = 100;
var thunderFrame = 0;
var thunder

function preload(){
    thunder1 = loadImage('images/thunderbolt/1.png')
    thunder2 = loadImage('images/thunderbolt/2.png')
    thunder3 = loadImage('images/thunderbolt/3.png')
    thunder4 = loadImage('images/thunderbolt/4.png')
}

function setup(){
   createCanvas(800, 800);
   engine = Engine.create();
   world = engine.world;
    umbrella = new Umbrella(250, 700, 150);
    //umbrella.scale = 1.0;
    for(var i =0; i<maxDrops; i++){
        drop.push(new Drop(random(0, 800), random(0, 800)));
    }
    //drop = new Drop(this.drop.x, this.drop.y, 10);
}

function draw(){
    background(0, 0, 0);
    Engine.update(engine);
    rand=Math.round(random(1, 4))
    if(frameCount%80 === 0){
        thunderFrame= frameCount
        thunder = createSprite(random(10, 370), random(10, 30), 10, 10)
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break; 
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break; 
            case 4: thunder.addImage(thunder4);
            break; 
        }
        thunder.scale = random(0.3, 0.6);
    }
    if(thunderFrame + 10 === frameCount && thunder){
        thunder.destroy()
    }
    umbrella.display();
    for(var i  = 0; i<maxDrops; i++)
    {
drop[i].showDrop()
drop[i].updateDrop()
    }
    drawSprites();
}
