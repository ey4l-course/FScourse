class Card{
    constructor($DOMobject, value){
        this.$DOMobject = $DOMobject;
        this.state = "down";
        this.image = "";
        this.imageAlt = "";
        this.value = parseInt(value / 2) + 1;
    }
    
    cardClick(){
        // console.log("clicked")
        if (this.state === "down"){
            if (UI.turn === 0){
                this.state = "up";
                UI.turn = 1;
                console.log(this)
                this.$DOMobject.innerHTML = `
                    <div class="card">
                        <img src="${this.image}" alt="${this.imageAlt}">
                    </div>`;
            }else{
                this.state = "up";
                console.log(this)
                this.$DOMobject.innerHTML = `
                    <div class="card">
                        <img src="${this.image}" alt="${this.imageAlt}">
                    </div>`;
                // setTimeout(() => {
                //     if (checkVictory()){
                //         const winner = setting.players[UI.activePlayer];
                //         console.log(winner)
                //     }else{
                //         console.log("Not yet")
                //     }
                // }, 1000);
            }
        }
    }
}