class Setting {
    constructor(players, theme){
        this.players = players;
        this.theme = theme;
        this.themeName = () => {
            switch (this.theme){
                case "HP":
                    return "Harry Potter"
                case "dog":
                    return "Dogs"
                case "cat":
                    return "Cats"
                default:
                    return ""
            }            
        }
        this.api = "";
        this.cards = new Array(20).fill().map((value,index) => parseInt(index / 2) + 1);
        // this.deckStyle = "Hogwarts-Logo.png"
        this.deckStyle = () => {
            // console.log(this.theme);
            switch (this.theme){
                case "HP":
                    return "Hogwarts-Logo.png"
                case "dog":
                    return "dog.jpeg"
                case "cat":
                    return "cat.jpeg"
                default:
                    return ""
            }
        }
    }
    shuffleDeck(){
        for (let i = this.cards.length - 1; i > 0; i --){
            const rnd = Math.floor(Math.random() * (i + 1));
            // console.log(`Swapping ${i} with ${rnd}`)
            // if (rnd < 0 || rnd >= this.cards.length) {
            //     throw new Error(`Invalid random index ${rnd} for array length ${this.cards.length}`);
            //   }
            const tmp = this.cards[i];
            this.cards[i] = this.cards[rnd];
            this.cards[rnd] = tmp;
            // [this.cards[i],this.cards[rnd]] = [this.cards[rnd],this.cards[i]];
            // console.log(`Swapped ${this.cards[i]} with ${this.cards[rnd]}`);
        }
    }
    assignAPI(){
        switch (this.theme){
            case "HP":
                this.api = "https://hp-api.onrender.com/api/characters";
                break;
            case "cat":
                this.api = "https://api.thecatapi.com/v1/images/search?limit=10";
                break;
            case "dog":
                this.api = "https://dog.ceo/api/breed/hound/images";
                break;
            default:
                alert("No theme was chosen");
        }
    }
    getThemeImages(){
        fetch(this.api)
    }
}