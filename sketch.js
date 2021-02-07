 var cat,cat_touch,cat2,cat3;
 var rat,rat_touch,rat2,rat3;
 var forest;

 function preload() {
  cat = loadAnimation("cat1.png","cat2.png","cat3.png");
  cat_touch = loadAnimation("cat4.png"); 
  rat = loadAnimation ("mouse1.png","mouse2.png","mouse3.png"); 
  rat_touch = loadAnimation ("mouse4.png");
  forest = loadImage("garden.png") ;
}

function setup(){
    createCanvas(1000,800);
    tom= createSprite(300,180,20,50);
    tom.addAnimation(cat);
    tom.addAnimation("collided",cat_touch);
    tom.scale = 0.5


    garden = createSprite(200,180,400,20);
    garden.addImage("ground",forest);
    
    jerry= createSprite(50,180,20,50);
    jerry.addAnimation(rat);
    jerry.addAnimation("touch",rat_touch);
    jerry.scale = 0.5
 
    invisibleGround = createSprite(50,180,400,10);
    invisibleGround.visible = false;
    
}

function draw() {

    background(255);
    
    tom.collide(invisibleGround);
    jerry.collide(invisibleGround);
 
    text(mouseX+','+mouseY,10,45);


    if (tom.x - jerry.x<(tom.width-jerry.width)/2){

    }

    if(tom.isTouching(jerry)){
      tom.changeAnimation("collided",cat_touch);
      jerry.changeAnimation("touch",rat_touch);
  }

  tom.addAnimation("catLastImage",cat_touch);
  tom.changeAnimation("catLastImage");


    drawSprites();
}


function keyPressed(){
  if(keyDown("left")){
    tom.velocityX = -5;
    tom.addAnimation("catRunning",cat2)
    tom.changeAnimation("catRunning")
  }
}