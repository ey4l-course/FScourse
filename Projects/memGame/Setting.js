class Setting {
    constructor(players, theme){
        this.players = players;
        this.theme = theme;
        this.api = "";
        this.cards = new Array(20).fill().map((value,index) => parseInt(index / 2) + 1);
        // this.deckStyle = "Hogwarts-Logo.png"
        this.deckStyle = () => {
            console.log(this.theme);
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
    assignAPI(){
        switch (this.theme){
            case "HP":
                this.api = "https://hp-api.onrender.com/api/characters";
                break;
            case "cats":
                this.api = "https://api.thecatapi.com/v1/images/search?limit=10";
                break;
            case "dogs":
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