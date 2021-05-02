class Form {

    constructor(){
         this.title = createElement("h2");
         this.button = createButton("PLAY");
         this.text = createInput("Enter Your Name");
         this.greeting = createElement("h2");
         this.reset = createButton("RESET")
    }
    display(){
    
       
        this.title.html("Car Racing Game");

        this.title.position(400,100);

       
        this.text.position(400,350);
 
        this.reset.position(450,550)


        this.button.position(450,450);

         this.reset.mousePressed(()=>{

        player.updatePlayerCount(0);
          game.updateGameState(0)

         })

        this.button.mousePressed(()=>{       // anonymous function

            this.text.hide();
            this.button.hide();
         
       player.name =  this.text.value()
       

      

      
       
       this.greeting.html("Hello " +player.name)

       this.greeting.position(400,300)

       playerCount += 1
       player.updatePlayerCount(playerCount)

      
       player.index = playerCount
       player.updatePlayerDetails()
///////
       })

    }
    hide(){
        this.greeting.hide();
        this.text.hide();
            this.button.hide();
    }
} 