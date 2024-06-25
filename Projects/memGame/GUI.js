class GUI{
    constructor(state){
        this.state = state;
    }
init(){
    if (this.state = "menu"){
        document.querySelector('.container').innerHTML = `
                <div class="board">
            <h2 class="text-center">Game Settings</h2>
            <form>
                <div class="form-group">
                    <label>Game Mode:</label>
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
        </div>

        `
    }
}
}