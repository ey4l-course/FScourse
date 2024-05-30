class UserI{
    constructor(){
        this.board = "";
        this.tiles = new Array(9);
        this.play = this.play.bind(this);
    }

    init(){
        this.board = document.createElement('div');
        this.board.setAttribute("id", "board");
        this.board.addEventListener("click", this.play)
        document.querySelector(".container").appendChild(this.board);
        console.log(this.tiles)
        for (let i = 0; i < this.tiles.length; i++){
            this.tiles[i] = document.createElement('div');
            this.tiles[i].setAttribute("id", `tiles${i}`);
            this.tiles[i].setAttribute("class", "tiles tilesActive");
            // this.tiles[i].classList.add("tilesActive");
            document.getElementById("board").appendChild(this.tiles[i])
            // document.getElementById("").inn
        }
    }
    
    //Trigered by clicking a tile (line 10)
    play(event){
        // console.log(event.target.classList)
        if (event.target.classList.contains('tiles')){
            const sign = game.activePlayer;
            const currentTile = utils.numberExtractor(event.target.id);
            game.board[currentTile] = sign
            // console.log(currentTile);
            event.target.innerHTML = `<img src='${sign}.png'>`
            event.target.classList.remove("tilesActive");
                if (game.isWin()){
                    alert(`Player ${sign} win`)
                    this.board.removeEventListener("click", this.play)
                    this.tiles.forEach((tile)=>{
                        tile.classList.remove("tilesActive")
                    })
                    this.clearPage()
                }
                else if (game.isDraw()){
                        alert("It's a draw")
                        this.clearPage()
                    }
                else {
                    game.changePlayer(sign)
                }
        }
    }

    clearPage(){
        document.querySelector(".container").removeChild(this.board)
        this.tiles = new Array(9);
        this.init()
    }
}