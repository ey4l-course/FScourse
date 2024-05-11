class UserI{
    constructor(){
        this.board = "";
        this.tiles = new Array(9);
    }

    init(){
        this.board = document.createElement('div');
        this.board.setAttribute("id", "board");
        document.body.appendChild(this.board);
        // this.tiles.forEach((tile) => {
        //     tile = document.createElement('div');
        //     tile.setAttribute("id", "tile");
        //     tile.setAttribute("class", "tile");
        //     document.getElementById("board").appendChild(tile)

        // })
        console.log(this.tiles)
        for (let i = 0; i < this.tiles.length; i++){
            this.tiles[i] = document.createElement('div');
            this.tiles[i].setAttribute("id", `tiles${i}`);
            this.tiles[i].setAttribute("class", "tiles");
            document.getElementById("board").appendChild(this.tiles[i])
        }
    }
}