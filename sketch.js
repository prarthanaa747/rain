const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies;

 var man,manImg,drops=[];
  var maxdrops=100,bodies;
  var thunder4,thunder3, thunder2, thunder1,thunder,thunderframe=0;
  
function preload(){
  //manImg = loadImage("umbrella man.png"); 
  thunder1 = loadImage("1.png")
  thunder2 = loadImage("2.png")
  thunder3 = loadImage("3.png")
  thunder4 = loadImage("4.png")
}

function setup(){
  engine = Engine.create();
   world = engine.world;

    createCanvas(1000, 600);
    background(0 , 0 , 0);
     umbrella = new Umbrella(500,470)
    //man = createSprite(450,400,50,50);
    //man.addImage("man",manImg);
    //man.scale=2.0  ;
    if(frameCount%50===0){
     for (var i=0 ; i<maxdrops; i++){
       drops.push(new Drop(random(0,1000),random(0,1000)));
     }
    }
  }

function draw(){
  Engine.update(engine); background(0);
  umbrella.display();
  
  for (var i=0 ; i<maxdrops; i++){
    drops[i].showdrop();
    drops[i].update();
  }
  rand = Math.round(random(1,4));
  
  console.log(rand);
  if (frameCount%50===0){
    thunderframe = frameCount
  thunder = createSprite(random(0,1000),random(0,200));
  switch(rand){
    case 1 : thunder.addImage(thunder1);
    break;
    case 2 : thunder.addImage(thunder2);
    break;
    case 3 : thunder.addImage(thunder3);
    break;
    case 4 : thunder.addImage(thunder4);
    break;
  }
  thunder.scale = 0.5;
}  
if(thunderframe+10===frameCount && thunder){

  thunder.destroy();
}
drawSprites(); 
}

