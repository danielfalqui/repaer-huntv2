var john,johnWalk,johnImg,johnDead;
var ground;
var gameSound;
var enemyRun,enemyGroup,enemy,killSound;
var trofeu,trofeuImg,backGround,rewardSound;
var trofeuI = 0;
var life = 3;
var lifeImg,lifeImg2,lifeImg3,lifeS;
var power,powerImg,powerGroup,powerSound;
var coin,coinGroup,coinImg;
var score = 0;
var PLAY = 1;
var START = 0;
var END = 2;
var WIN = 3;
var gameState = START;

function preload(){
  johnImg = loadAnimation("./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_000.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_001.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_002.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_003.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_004.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_005.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_006.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_007.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_008.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_009.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_010.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_011.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_012.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_013.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_014.png",);
  
  johnWalk = loadAnimation("./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_000.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_001.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_002.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_003.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_004.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_005.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_006.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_007.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_008.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_009.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_010.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_011.png");
  
  johnDead = loadImage("./assets/Reaper_Man_2/PNG/PNGSequences/Dying/0_Reaper_Man_Dying_000.png");

  enemyRun = loadAnimation("./assets/Running/0_Reaper_Man_Running_000.png",
  "./assets/Running/0_Reaper_Man_Running_001.png",
  "./assets/Running/0_Reaper_Man_Running_002.png",
  "./assets/Running/0_Reaper_Man_Running_003.png",
  "./assets/Running/0_Reaper_Man_Running_004.png",
  "./assets/Running/0_Reaper_Man_Running_005.png",
  "./assets/Running/0_Reaper_Man_Running_006.png",
  "./assets/Running/0_Reaper_Man_Running_007.png",
  "./assets/Running/0_Reaper_Man_Running_008.png",
  "./assets/Running/0_Reaper_Man_Running_009.png",
  "./assets/Running/0_Reaper_Man_Running_010.png",
  "./assets/Running/0_Reaper_Man_Running_011.png")

  backGround = loadImage("./assets/game_background_3.png");

  trofeuImg = loadImage("./assets/16.png");
  lifeImg = loadAnimation("./assets/life1.png");
  lifeImg2 = loadAnimation("./assets/life2.png");
  lifeImg3 = loadAnimation("./assets/life3.png");

  coinImg = loadImage("./assets/11.png");

  powerImg = loadImage("./assets/8.png");

  powerSound = loadSound("./assets/powerSound.wav");
  gameSound = loadSound("./assets/backsound.wav");
  killSound = loadSound("./assets/killenemy.wav");
  rewardSound = loadSound("./assets/reward.mp3");
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  john = createSprite(300,50)
  john.addAnimation("idle", johnImg);
  john.addImage(johnDead);
  john.addAnimation("walk", johnWalk);
  john.scale = 0.1

  enemyGroup = new Group();
  powerGroup = new Group();
  coinGroup = new Group();

  john.setCollider("rectangle",0,0,50,50)
  
  lifeS = createSprite(width - 200,height/8);
  lifeS.addAnimation("life1",lifeImg);
  lifeS.addAnimation("life2",lifeImg2);
  lifeS.addAnimation("life3",lifeImg3);
  lifeS.scale = 0.35;

  //gameSound.play();
  //gameSound.loop();
  
}

function draw(){

  background(backGround);

  if(gameState === START){

    fill("red");
    textSize(40);
    text("Aperte ENTER para iniciar!",width/2 - 200,height/2,);

    if(keyWentUp(13)){
      gameStart();
    }
  }

  if(gameState === PLAY){

    textSize(25);
    fill("white");
    text("Score: "+score, lifeS.x-30,lifeS.y-50);

    john.changeAnimation("idle");

    moviment();
    powerControl();
    trofeuCreate();
    coinsCreate();
  
    createEnemies(Math.round(random(0,width)),Math.round(random(0,height)),3,width/3);
    createEnemies(trofeu.x,trofeu.y -50,0);
    createEnemies(trofeu.x,trofeu.y +50,0);
    createEnemies(trofeu.x -50,trofeu.y,0);
    createEnemies(trofeu.x +50,trofeu.y,0);

    if(enemyGroup.isTouching(john)){
      life -= 1;
      john.y -= 30;
      john.x += 30;
      enemy.remove();
    }

    powerGroup.overlap(enemyGroup, destrua);
    coinGroup.overlap(john, coinCollect);
    trofeu.overlap(john, trofeuCollect);
    
    if(life === 3){
      lifeS.changeAnimation("life1");
    }else if(life === 2){
      lifeS.changeAnimation("life2");
    }else if(life === 1){
      lifeS.changeAnimation("life3");
    }else if(life <= 0){
      gameState = END;
    }

    drawSprites();
  }else if(gameState === END){
    fill("red");
    textSize(40);
    text("Você perdeu",width/2 - 50,height/2 - 50);
    text("Aperte ENTER para reiniciar!",width/2 - 200,height/2);

    gameSound.stop();

    if(keyWentUp(13)){
      gameReset();
      //gameSound.play();
      //gameSound.loop();
    }
  }
  if(gameState === WIN){
    fill("red");
    textSize(40);
    text("Parabéns você ganhou!!",width/2 - 50,height/2 - 50);
    text("Aperte ENTER para reiniciar!",width/2 - 200,height/2);


    if(keyWentUp(13)){
      gameReset();
    }
  }
}


function createEnemies(posx,posy,velocity,lifeTime){
  if(frameCount % 120 === 0){
    enemy = createSprite(posx,posy)
    enemy.addAnimation("run", enemyRun);
    enemy.scale = 0.1;
    enemy.velocityX = velocity;
    enemy.lifetime = lifeTime;
    enemyGroup.add(enemy);
  }
}

function moviment(){

  if(keyDown(87) && john.y > 0){
    john.y -= 10;
    john.changeAnimation("walk");
  }
  if(keyDown(83) && john.y < height){
    john.y += 10;
    john.changeAnimation("walk");
  }
  if(keyDown(68) && john.x < width){
    john.x += 10;
    john.changeAnimation("walk");
  }
  if(keyDown(65) && john.x > 0 ) {
    john.x -= 10;
    john.changeAnimation("walk");
  }
}

function powerCreate(X,Y){
  power = createSprite(john.x,john.y,20,20);
  power.velocityX = X;
  power.velocityY = Y;
  power.addImage(powerImg);
  power.scale = 0.1;
  power.lifetime = (width/2);
  powerGroup.add(power);
}

function powerControl(){
  if(keyWentUp(38)){
    powerCreate(0,-2);
  }
  if(keyWentUp(40)){
    powerCreate(0,2);
  }
  if(keyWentUp(37)){
    powerCreate(-2,0);
  }
  if(keyWentUp(39)){
    powerCreate(2,0);
  }
}

function coinsCreate(){
  if(frameCount % 180 === 0){
    coin = createSprite(100,100)
    coin.addImage(coinImg);
    coin.scale = 0.2;
    coin.x = Math.round(random(1,600));
    coin.y = Math.round(random(1,600));
    coin.lifetime = (120);
    coinGroup.add(coin);
  }
}

function destrua(spriteA, spriteB){
  spriteA.remove();
  spriteB.remove();
  score += 10;
}

function trofeuCreate(){
  if(trofeuI === 0){
    trofeu = createSprite(random(0,width),random(0,height));
    trofeu.addImage(trofeuImg);
    trofeu.scale = 0.2
    trofeuI += 1
  }
}

function gameStart(){
  gameState = PLAY;
}

function gameReset(){
  gameState = PLAY;
  life = 3;
  john.x = 300;
  john.y = 50;
  score = 0;
}

function coinCollect(spriteA,spriteB){
  score += 30;
  spriteA.remove();
}

function trofeuCollect(spriteA,spriteB){
  rewardSound.play();
  spriteA.remove();
  gameState = WIN;
  trofeuI = 0;
}