var bg;
var fb=200;
var bgIMG;
var iG;
var m, mI,mfI;
var b, qb,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,qb1,qb2,qb3;
var brickGroup;
var f,bf,br,fI,bfI,fbI,brI;
var p,p1,p2;
var t, t1, g, g1,g2,g3,g4,g5,g6,g7,gGroup;
var PLAY=1;
var gameState=PLAY;
var END=0;
var fbGroup;
var e, eGroup;
var GE;
var vw,vw1;
function preload(){
bgIMG=loadImage('background.png');
mI=loadImage('mario.png');
mfI=loadImage('marioFire.png');
b=loadImage('brick.png');
qb=loadImage('qBlock.png');
fI=loadImage('flower.png');
bfI=loadImage('boomerandPU.png');
fbI=loadImage('fireBall.png');
brI=loadImage('boomerang.png');
p=loadImage('Pipes.png');
t=loadImage('turtle.png');
g=loadImage('goomba.png');
GE=loadImage('marioGM.png');
}

function setup() {
  createCanvas(1250,600);
  
   bg=createSprite(625,300);
  bg.addImage(bgIMG);
  bg.scale=2.75;
  iG=createSprite(100,600,2500,140);
  iG.visible=false;
  
  m=createSprite(100,491);
  m.addImage(mI);
  m.scale=0.5;
  m.setCollider('rectangle',0,0,100,150);

  b1=createSprite(300,385);
  b1.addImage(b);
  b1.scale=0.13;
  b1.setCollider('rectangle',0,0,400,400);

  b2=createSprite(350,385);
  b2.addImage(b);
  b2.scale=0.13;
  b2.setCollider('rectangle',0,0,400,400);

  b3=createSprite(400,385);
  b3.addImage(b);
  b3.scale=0.13;
  b3.setCollider('rectangle',0,0,400,400);


  b4=createSprite(450,385);
  b4.addImage(b);
  b4.scale=0.13;
  b4.setCollider('rectangle',0,0,400,400);


  b5=createSprite(500,385);
  b5.addImage(b);
  b5.scale=0.13;
  b5.setCollider('rectangle',0,0,400,400);


  b6=createSprite(550,385);
  b6.addImage(b);
  b6.scale=0.13;
  b6.setCollider('rectangle',0,0,400,400);


  b7=createSprite(650,385);
  b7.addImage(b);
  b7.scale=0.13;
  b7.setCollider('rectangle',0,0,400,400);


  b8=createSprite(700,385);
  b8.addImage(b);
  b8.scale=0.13;
  b8.setCollider('rectangle',0,0,400,400);


  b9=createSprite(750,385);
  b9.addImage(b);
  b9.scale=0.13;
  b9.setCollider('rectangle',0,0,400,400);


  b10=createSprite(800,385);
  b10.addImage(b);
  b10.scale=0.13;
  b10.setCollider('rectangle',0,0,400,400);


  b11=createSprite(850,385);
  b11.addImage(b);
  b11.scale=0.13;
  b11.setCollider('rectangle',0,0,400,400);


  b12=createSprite(900,385);
  b12.addImage(b);
  b12.scale=0.13;
  b12.setCollider('rectangle',0,0,400,400);

  vw=createSprite(0,600,150,800);
  vw.visible=false;
  vw1=createSprite(1250,600,150,800);
  vw1.visible=false;

  qb1=createSprite(600,385);
  qb1.addImage(qb);
  qb1.scale=0.175;
  qb1.setCollider('rectangle',0,0,300,300);
  gGroup=createGroup();
  eGroup=createGroup();
  /*qb2=createSprite(600,200);
  qb2.addImage(qb);
  qb2.scale=0.175;
  qb2.setCollider('rectangle',0,0,300,300);
  qb2.depth=3;*/
  
  /*f=createSprite(600,200);
  f.addImage(fI);
  f.scale=0.22;
  f.depth=1;*/


  fbGroup=createGroup();

 
  //f.setCollider('rectangle',0,0,50,50);
}

function draw() {
 background('#5b96ff');
   //background('black');
  if(gameState===PLAY){


   if(keyDown(LEFT_ARROW)){
     m.x=m.x-5;
   }
   if(keyDown(RIGHT_ARROW)){
    m.x=m.x+5;
  }

  if(keyDown(UP_ARROW)){
    m.velocityY=-17;
   }
  
  /*if(f.isTouching(m)){
    fb.visible=true;
    m.addImage(mfI);
    m.scale=0.22;
    m.setCollider('rectangle',0,0,230,460);
    f.visible=false;
    f.velocityY=500;

  
  }*/

 
   brickGroup=createGroup();


   brickGroup.add(b1);
   brickGroup.add(b2);
   brickGroup.add(b3);
   brickGroup.add(b4);
   brickGroup.add(b5);
   brickGroup.add(b6);
   brickGroup.add(b7);
   brickGroup.add(b8);
   brickGroup.add(b9);
   brickGroup.add(b10);
   brickGroup.add(b11);
   brickGroup.add(b12);

  m.bounceOff(brickGroup);
  m.velocityY=m.velocityY+1;
  m.collide(iG);
  m.bounceOff(qb1);
  gGroup.bounceOff(vw);
  gGroup.bounceOff(vw1);
  
  //m.bounceOff(qb2);
  spawnGoomba();
  for (var i=0;i<gGroup.length;i++){
  if(eGroup.get(i).collide(m)){
    gGroup.get(i).destroy();
    eGroup.get(i).destroy();
  }
  }
  for (var i=0;i<gGroup.length;i++){
    if(gGroup.get(i).collide(m)){
      m.positionX=600;
      m.positionY=400;
      m.addImage(GE);
      gGroup.get(i).destroy();
      eGroup.get(i).destroy();
      m.velocityY=0.01;
      iG.destroy();
      gameState=END;
    }
    }
  }
  else{
    if(gameState===END){

    }
  }
  /* if(m.collide(qb2)){
     f.velocityY-=0.04;
   }*/




  drawSprites();
  }


function spawnGoomba(){
  if(frameCount%100===0){
    g1=createSprite(1100,500,100,100);
    g1.addImage(g);
    g1.scale=0.3
    g1.velocityX=-5;
    g1.depth=5;
    g1.setCollider('rectangle',0,0,170,140);
    e=createSprite(1100,475,10,3);
    e.velocityX=-5;
    e.visible=false;
   gGroup.add(g1);
   eGroup.add(e);
  }
  
}

