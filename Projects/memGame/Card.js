class Card{
    constructor($DOMobject){
        this.$DOMobject = $DOMobject;
        this.state = "down";
        this.image = "";
        this.imageAlt = "";
    }
    
    cardClick(){
        this.state = "up"
        this.$DOMobject.innerHTML = `
                     <div class="card">
                         <img src="${this.image}" alt="${this.imageAlt}">
                     </div>`;
        cardsToMatch[UI.turn] = this;
        if (UI.turn === 1){
            if (isMatch){
                UI.HandleMatch()
            }
        }
        UI.turn = 1;
        
        
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