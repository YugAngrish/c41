class Game {

constructor(){



}   
display(){


}
getGameState(){
var gameStateRef = database.ref("gameState")
gameStateRef.on("value",function(data){
  
    gameState = data.val()
    console.log(gameState)

})

}
updateGameState(state){

 database.ref("/").update({
  "gameState" : state

 })  

}
start(){
    if(gameState===0){


        form = new Form()
        form.display();
        player = new Player()

       player.getPlayerCount()

            
}


car1 = createSprite(270,displayHeight-20,50,50)
car1.addImage(carImg1)
car2 = createSprite(440,displayHeight-20,50,50)
car2.addImage(carImg2)
car3 = createSprite(610,displayHeight-20,50,50)
car3.addImage(carImg3)
car4 = createSprite(750,displayHeight-20,50,50)
car4.addImage(carImg4)

cars = [car1,car2,car3,car4]


}
play(){
form.hide();

Player.getPlayerDetails()
player.getRank()
//as get rank isnt static function
if(allPlayers!==undefined){
 
    //ex displayHT = 500 , y position = -4 X 500 = -2000
    // total length = (-2000 till 500) = 2500
 image(trackImg,0,displayHeight*-4,displayWidth,displayHeight*5)  
 var x = 100 
var y = displayHeight                                                             
 var index = 0
                          
 
 var dist = 0                                                     
    for(var i in allPlayers){
        console.log(i)
         //dist = displayHeight-allPlayers[i].distance
         x = x +170
        y=displayHeight-allPlayers[i].distance
       index=index+1
       
       if(index===player.index){ 
           cars[index-1].x = x
           cars[index-1].y = y    //dist
          
           fill("red")
           ellipse(x,y,60,60)

           camera.position.x = displayWidth/2
           camera.position.y = cars[index-1].y

        
        }
          // else{
          //     //fill("black")
          // }

           //text( allPlayers[i].name + ":" + allPlayers[i].distance , 200,y)
     
      
    }
}

if(keyDown(UP_ARROW)&&player.index!==null){

    player.distance=player.distance+10
    
  player.updatePlayerDetails()
}

if(player.distance===3500){
    gameState = 2
    player.rank = player.rank+1
    player.updateRank();
    
  

}

drawSprites()
 

}
end(){
   console.log("GAME HAS ENDED")
   console.log(player.rank)
}

}
