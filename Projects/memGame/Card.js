class Card{
    constructor($DOMobject){
        this.$DOMobject = $DOMobject;
        this.state = "down";
        this.image = "";
        this.imageAlt = "";
    }
    
    cardClick(){
        if (cardListenersOn){
            this.state = "up"
            this.$DOMobject.innerHTML = `<img src="${this.image}" alt="${this.imageAlt}">`;
            cardsToMatch[UI.turn] = this;
            // console.log(`Value of isMatch: ${isMatch()}`)
            // console.log(`Type of isMatch is: ${typeof isMatch()}`)
            if (UI.turn === 1){
                if (isMatch()){
                    // console.log("true")
                    UI.HandleMatch()
                }else{
                    // console.log("false")
                    UI.HandleNoMatch()
                }
                UI.turn = 0;
                if (UI.state === "Game")
                UI.changePlayer();
            }else{UI.turn = 1;}
        }
    }

    flipDown(){
        this.state = "down"
        this.$DOMobject.innerHTML = `<img src="${setting.deckStyle()}" alt="">`;
    }



    // cardClick(){
    //     console.log("clicked")
    //     cardsToMatch[UI.turn] = this.imageAlt;
    //     if (this.state === "down"){
    //         if (UI.turn === 0){
    //             this.state = "up";
    //             UI.turn = 1;
    //             // console.log(this)
    //             this.$DOMobject.innerHTML = `
    //                 <div class="card">
    //                     <img src="${this.image}" alt="${this.imageAlt}">
    //                 </div>`;
    //         }else{
    //             this.state = "up";
    //             console.log(this)
    //             this.$DOMobject.innerHTML = `
    //                 <div class="card">
    //                     <img src="${this.image}" alt="${this.imageAlt}">
    //                 </div>`;
    //             console.log(isMatch());
                // setTimeout(() => {
                //     if (checkVictory()){
                //         const winner = setting.players[UI.activePlayer];
                //         console.log(winner)
                //     }else{
                //         console.log("Not yet")
                //     }
                // }, 1000);
    //         }
    //     }
    // }
}