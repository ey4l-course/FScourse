class UserI{
    constructor(){
        this.board = "";
        this.tiles = new Array(9);
    }

    init(){
        this.board = document.createElement('div');
        this.board.setAttribute("id", "board");
        this.board.addEventListener("click", this.play)
        document.body.appendChild(this.board);
        console.log(this.tiles)
        for (let i = 0; i < this.tiles.length; i++){
            this.tiles[i] = document.createElement('div');
            this.tiles[i].setAttribute("id", `tiles${i}`);
            this.tiles[i].setAttribute("class", "tiles");
            document.getElementById("board").appendChild(this.tiles[i])
            // document.getElementById("").inn
        }
    }
    //Trigered by clicking a tile (line 10)
    play(event){
        // console.log(event.target.classList)
        if (event.target.classList.contains('tiles')){
            const sign = game.activePlayer;
            const currentTile = utils.numberExtractor(event.target.id)
            game.board[currentTile] = sign
            console.log(currentTile)
            event.target.innerHTML = `<img src='${sign}.png'>`
            setTimeout(()=>{
                if (game.isWin() === true){
                    alert(`Player ${sign} win`)
                }
                else if (game.isDraw() === true){
                        alert("It's a draw")
                    }
                else {
                    game.changePlayer(sign)
                }
            }, 500)
        }
    }
}