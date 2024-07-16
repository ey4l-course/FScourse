class Setting {
    constructor(players, theme, mode){
        this.players = players;
        this.theme = theme;
        this.mode = mode;
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
        for (let i = UI.board.length - 1; i > 0; i --){
            const rnd = Math.floor(Math.random() * (i + 1));
            // console.log(`Swapping ${i} with ${rnd}`)
            // if (rnd < 0 || rnd >= this.cards.length) {
            //     throw new Error(`Invalid random index ${rnd} for array length ${this.cards.length}`);
            //   }
            const tmp = UI.board[i];
            UI.board[i] = UI.board[rnd];
            UI.board[rnd] = tmp;
            //   ********************************************************************************
            //   *                                                                              *
            //   * For some reason, this method doesn't work. I've been debugging it for HOURS! *
            //   *                                                                              *
            //   ********************************************************************************

            // [this.cards[i],this.cards[rnd]] = [this.cards[rnd],this.cards[i]];
            // console.log(`Swapped ${this.cards[i]} with ${this.cards[rnd]}`);
        }
        UI.setCardListeners();
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
        return new Promise((resolve, reject) => {
            fetch(this.api)
                .then(res => res.json())
                .then(data => {
                    switch (this.api){
                        case "https://hp-api.onrender.com/api/characters":
                            // console.log(data);
                            data.forEach((element, index) => {
                            if (index < 10){
                                // console.log(element.image)
                                UI.board[index].image = element.image;
                                UI.board[index + 10].image = element.image;
                                UI.board[index].imageAlt = element.name;
                                UI.board[index + 10].imageAlt = element.name;
                            }
                                // console.log(`index ${index} assigned to ${UI.board[index].image}`)
                                // document.querySelector(".container").innerHTML += `${index}) <img src="${element.image}" class="tst" alt="${element.name}"><br>`
                            })
                        break;
                        case "https://dog.ceo/api/breed/hound/images":
                            data.message.forEach((element, index) => {
                                if (index < 10){
                                UI.board[index].image = element;
                                UI.board[index + 10].image = element;
                                UI.board[index].imageAlt = `Dog #${index + 1}`;
                                UI.board[index + 10].imageAlt = `Dog #${index + 1}`;
                                }
                                // document.querySelector(".container").innerHTML += `${index}) <img src="${element}" class="tst" alt="Dog #${index}"><br>`
                            })
                            break;
                            // console.log(data.message[1])
                        case "https://api.thecatapi.com/v1/images/search?limit=10":
                            data.forEach((element, index) => {
                                UI.board[index].image = element.url;
                                UI.board[index + 10].image = element.url;
                                UI.board[index].imageAlt = `Cat #${index + 1}`;
                                UI.board[index + 10].imageAlt = `Cat #${index + 1}`;
                                // document.querySelector(".container").innerHTML += `${index}) <img src="${element.url}" class="tst" alt="Cat #${index}"><br>`
                                // console.log(element.url)    
                            })
                            break;                        
                        default:
                            throw new Error ("No API chosen");
                    }
                resolve();
            })
            .catch(error => reject(error));
        });
    }
}