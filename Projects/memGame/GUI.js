class GUI{
    constructor(state){
        this.state = state;
        this.board = new Array(20).fill("",0,20);
        this.DeckStyle = ""
        this.activePlayer = 1;
        this.turn = 0;
    }
    chooseDeckStyle(){
        
    }
    init(){
        if (this.state == "menu"){
            document.querySelector('.container').innerHTML = `
                <div class="board">
                    <h2 class="text-center">Game Settings</h2>
                    <form>
                        <div class="form-group">
                            <label>Game Mode:</label>
                            <div class="row justify-content-between">
                                <div class="col-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gameMode" id="singlePlayer" value="singlePlayer">
                                        <label class="form-check-label" for="singlePlayer">
                                            Single Player
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gameMode" id="multiPlayer" value="multiPlayer">
                                        <label class="form-check-label" for="multiPlayer">
                                            Multiplayer
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div id="playerNames">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Theme:</label>
                            <div class="d-flex justify-content-around">
                                <img src="Hogwarts-Logo.png" alt="HP" id="HP" class="theme-option">
                                <img src="dog.jpeg" alt="dog" id="dog" class="theme-option">
                                <img src="cat.jpeg" alt="cat" id="cat" class="theme-option">
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="button" class="btn" onclick="menuIsValid()">Start Game</button>
                        </div>
                    </form>
                </div>   `
        }else{
            document.querySelector('.container').innerHTML = `
            <div class="board">
                <div class="row" id="header">
                    <h2 class="text-center">${setting.themeName()} memory game</h2>
                </div>
                <div class="row row-cols-4 row-cols-md-5" id="gameBoard"></div>
                <div class="row mt-4 footer">
                    <div class="col-12 col-sm-6 text-center mb-3" id="player1">
                        <div class="p-3 bg-success text-white rounded activePlayer" id = "player1bg">
                            <h4 class="mb-2">${setting.players[0]} Score</h4>
                            <span class="badge rounded-pill bg-info" style="font-size: 1.5rem;">0</span>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 text-center mb-3" id="player2">
                        <div class="p-3 bg-success text-white rounded" id = "player2bg">
                            <h4 class="mb-2">${setting.players[1]} Score</h4>
                            <span class="badge rounded-pill bg-info" style="font-size: 1.5rem;">0</span>
                        </div>
                    </div>
                </div>
            </div>`
            for (let i = 0; i < this.board.length; i ++){
                const cardPosition = document.createElement('div');
                const card = document.createElement('div');
                cardPosition.classList.add('col');
                cardPosition.classList.add('grid-item');
                card.classList.add("card")
                card.id = `card${i}`;
                card.addEventListener("click", function(){console.log(this)})
                card.innerHTML = `<img src="${setting.deckStyle()}" alt="" id = "card${i}">`
                // card.innerHTML =`
                //     <div class="card">
                //         <img src="${setting.deckStyle()}" alt="" id = "card${i}">
                //     </div>`;
                document.getElementById('gameBoard').appendChild(cardPosition);
                cardPosition.appendChild(card);
                this.board[i] = new Card(card, i);
            }
        }
    }
    // setCardListeners(){
    //     const images = document.querySelectorAll(".card");
    //     for (let i = 0; i < images.length; i ++){
    //         console.log(images[i])
    //         images[i].addEventListener("click", this.board[i].cardClick.bind(this.board[i]));
    //     }
    // }

}