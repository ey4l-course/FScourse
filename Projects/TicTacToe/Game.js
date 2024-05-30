class Game {
    constructor(){
        this.board = new Array (9).fill("" , 0 , 9);
        this.winCondition = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]]
        this.activePlayer = "x";
    }

    isWin(){
        return this.winCondition.some((cond) => {
            return this.board[cond[0]] != '' &&
                this.board[cond[0]] === this.board[cond[1]] &&
                this.board[cond[0]] === this.board[cond[2]];
        });
    }

    isDraw(){
        return this.board.every((tile)=>{return tile !== ''});
    }
    changePlayer(player){
        if (player === "x"){
            this.activePlayer = "o";
        }else{
            this.activePlayer = "x";
        };
    }
}