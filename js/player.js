class Player {

constructor(){
this.name = null;
this.distance = 0;
this.index = 0;
this.rank = null;

}
display(){


}

getPlayerCount(){

var playerCountRef = database.ref("playerCount")
playerCountRef.on("value", function(data){

    playerCount = data.val();
    console.log(playerCount);
})

}
updatePlayerCount(count){

database.ref("/").update({

"playerCount" : count

} )   

}
updatePlayerDetails(){
 var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
        "name": this.name ,  
        "distance": this.distance
    })
}
static getPlayerDetails(){
   var getPlayers= database.ref("players")
    getPlayers.on("value",(data)=>{        //\/ => = arrow , static = class = common for everyone
    allPlayers = data.val();
    })
    
    
}
getRank(){

    var playerCountRef = database.ref("Rank")
    playerCountRef.on("value", function(data){
    
        this.rank = data.val();
      
    })
    
    }
    updateRank(count){
    
    database.ref("/").update({
    
    "Rank" : count
    
    } )   
    
    }
}