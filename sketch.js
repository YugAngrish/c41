var database ; 

var form
var gameState = 0;
var playerCount = 0;
var player, game
var allPlayers;
var cars
var car1,car2,car3,car4
var carImg1,carImg2,carImg3,carImg4,trackImg , groundImg


function preload(){

 carImg1 = loadImage("images/car1.png")
 carImg2 = loadImage("images/car2.png")
 carImg3 = loadImage("images/car3.png")
 carImg4 = loadImage("images/car4.png")
trackImg = loadImage("images/track.jpg")
groundImg = loadImage("images/ground.png")
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    
    database = firebase.database();
    console.log(displayHeight)

    


   game = new Game()
   game.getGameState()
   game.start()




}
function draw(){
    background("white");
    
  if(playerCount===4){
      gameState = 1;
      game.updateGameState(gameState)
   
  }
  if(gameState===1){
      game.play();

      
  }


  if(gameState===2){
    game.end();

    
}

  
   
}

         
         
         
         
         
         
         
         
         
         