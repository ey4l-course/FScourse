class Card{
    constructor($DOMobject, value){
        this.$DOMobject = $DOMobject;
        this.state = "down";
        this.image = "";
        this.imageAlt = "";
        this.value = parseInt(value / 2) + 1;
    }
    
    cardClick(){
        console.log("clicked")
        if (this.state === "down"){
            if (UI.turn === 0){
                this.state = "up";
                UI.turn = 1;
                this.$DOMobject.innerHTML = `
                    <div class="card">
                        <img src="${this.image}" alt="${this.imageAlt}">
                    </div>`;
            }else{
                this.state = "up";
                this.$DOMobject.innerHTML = `
                    <div class="card">
                        <img src="${this.image}" alt="${this.imageAlt}">
                    </div>`;
                console.log(checkVictory())
            }
        }
    }
}