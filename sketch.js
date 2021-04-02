const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImage,bg2Image;
var intro, introImage;
var gameState = "intro";
var bird,launcher;
var engine;
var task1Img,task2Img,task3Img,task4Img;
var task1,task2,task3,task4;
var box,boxImg;

function preload(){

  bgImage=loadImage("bg.png");
  introImage=loadImage("intro.png");
  bg2Image=loadImage("bg2.png");
  task1Img=loadImage("1.png");
  task2Img=loadImage("2.png");
  task3Img=loadImage("3.png");
  task4Img=loadImage("4.png");
  boxImg=loadImage("box.png")

}


function setup() {
  createCanvas(1400,500);

  intro=createSprite(600,80)
  intro.addImage(introImage);
  intro.scale=0.5

  task1=createSprite(1300,100)
  task1.x=random(700,1300)
  task1.y=random(110,110)
  task1.addImage(task1Img);
  task1.scale=0.5

  
  task2=createSprite(1300,100)
  task2.x=random(700,1300)
  task2.y=random(220,220)
  task2.addImage(task2Img);
  task2.scale=0.5

  task3=createSprite(1300,100)
  task3.x=random(700,1300)
  task3.y=random(330,330)
  task3.addImage(task3Img);
  task3.scale=0.5

  task4=createSprite(1300,100)
  task4.x=random(700,1300)
  task4.y=random(440,440)
  task4.addImage(task4Img);
  task4.scale=0.5

  



  engine = Engine.create();
    world = engine.world;

  bird = new Bird(200,250);
  launcher = new Launcher(bird.body,{x:200, y:250});

  box=createSprite(200,50,100,100)
  box.addImage(boxImg);
  box.scale=0.7
 
  



}

function draw() {

  
  background(bgImage);  
  Engine.update(engine);

  box.x=bird.body.position.x;
  box.y=bird.body.position.y;

  if(gameState ==="intro"){

    intro.visible=true;
    task1.visible=false;
    task2.visible=false;
    task3.visible=false;
    task4.visible=false;
    box.visible=false;

  fill("orange");
  textSize(20)
  text("1) There will be four tasks chosen for you and you have to hit them using the bird.",100,170);

  fill("red");
  textSize(20)
  text("2) To launch the bird simply drag it and release it.",100,200);

  fill("green");
  textSize(20)
  text("3) For more chances press the space key.",100,230);

  fill("blue");
  textSize(20)
  text("4) Press s to start the game.",100,260);

 

  }

  if(keyDown("s") && gameState === "intro"){
    gameState = "play";
    bgImage=loadImage("bg2.png");  
  }

  

  if(gameState === "play"){

    intro.visible=false;
    box.visible=true;
    bird.display();
    launcher.display();
    task1.visible=true;
    task2.visible=true;
    task3.visible=true;
    task4.visible=true;
    bgImage=loadImage("bg2.png"); 
    
    
    
  }

  if(box.isTouching(task1)&& gameState==="play"){
    gameState="task1";
    task1.visible=false;
    task2.visible=false;
    task3.visible=false;
    task4.visible=false;
    box.visible=false;
    rand=Math.round(random(1,3));
    console.log(rand)
   switch(rand) {
     case 1: bgImage=loadImage("task11.png"); 
   
             break;
     case 2: bgImage=loadImage("task12.png");  
     
             break;
     case 3:  bgImage=loadImage("task13.png");  
             break;
   
     default: break;
   }

  


  }

  if(gameState==="task1"&&keyDown("b")){
    gameState="play"
    launcher.attach(bird.body);
   
    task1.destroy();
  }

  if(box.isTouching(task2)&& gameState==="play"){
    gameState="task2";
    task1.visible=false;
    task2.visible=false;
    task3.visible=false;
    task4.visible=false;
    box.visible=false;
    rand2=Math.round(random(1,3));
    console.log(rand2)
   switch(rand2) {
     case 1: bgImage=loadImage("task21.png"); 
   
             break;
     case 2: bgImage=loadImage("task22.png");  
     
             break;
     case 3:  bgImage=loadImage("task23.png");  
             break;
   
     default: break;
   }



  }

   if(gameState==="task2"&&keyDown("b")){
    gameState="play";
    launcher.attach(bird.body);
  
    task2.destroy();
  }


  
  if(box.isTouching(task3)&& gameState==="play"){
    gameState="task3";
    task1.visible=false;
    task2.visible=false;
    task3.visible=false;
    task4.visible=false;
    box.visible=false;
    rand3=Math.round(random(1,3));
    console.log(rand3)
   switch(rand3) {
     case 1: bgImage=loadImage("31.png"); 
   
             break;
     case 2: bgImage=loadImage("32.png");  
     
             break;
     case 3:  bgImage=loadImage("33.png");  
             break;
   
     default: break;
   }

  }


   
   if(gameState==="task3"&&keyDown("b")){
    gameState="play";
    launcher.attach(bird.body);
  
    task3.destroy();
  }




  

  

  drawSprites();

  
 
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}

function keyPressed(){

if(keyCode===32){

  
 

  launcher.attach(bird.body);


}



}