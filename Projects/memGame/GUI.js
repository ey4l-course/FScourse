class GUI{
    constructor(state){
        this.state = state;
        this.board = new Array(20).fill("",0,20);
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
                            <img src="Hogwarts-Logo.png" alt="Theme 1" id="theme1" class="theme-option">
                            <img src="download.jpeg" alt="Theme 2" id="theme2" class="theme-option">
                            <img src="cat.jpeg" alt="Theme 3" id="theme3" class="theme-option">
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn">Start Game</button>
                    </div>
                </form>
            </div>   `
    }else{
        document.querySelector('.container').innerHTML = `
        <div class="board">
            <div class="row" id="header">
                <h2 class="text-center">memory game</h2>
            </div>
            <div class="row row-cols-4 row-cols-md-5" id="gameBoard"></div>
            <div class="row mt-4 footer">
                <div class="col-12 col-sm-6 text-center mb-3" id="player1">
                    <div class="p-3 bg-danger text-white rounded">
                        <h4 class="mb-2">Player 1 Score</h4>
                        <span class="badge rounded-pill bg-warning" style="font-size: 1.5rem;">7</span>
                    </div>
                </div>
                <div class="col-12 col-sm-6 text-center mb-3" id="player2">
                    <div class="p-3 bg-success text-white rounded">
                        <h4 class="mb-2">Player 2 Score</h4>
                        <span class="badge rounded-pill bg-info" style="font-size: 1.5rem;">5</span>
                    </div>
                </div>
            </div>
        </div>`
        for (let i = 0; i < this.board.length; i ++){
            const card = document.createElement('div');
            card.classList.add('grid-item');
            card.id = `card${i}`;
            document.getElementById('gameBoard').appendChild(card);
            this.board[i] = card;
        }
        
    }
}
}