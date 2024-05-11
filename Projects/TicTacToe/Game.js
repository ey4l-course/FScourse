class Game {
    constructor(){
        this.board = new Array (9).fill("" , 0 , 9);
        this.winCondition = {
            condition1: this.board != "" && this.board[0] == this.board[1] && this.board[1] == this.board[2],
            condition2: this.board != "" && this.board[3] == this.board[4] && this.board[4] == this.board[5],
            condition3: this.board != "" && this.board[6] == this.board[7] && this.board[7] == this.board[8],
            condition4: this.board != "" && this.board[0] == this.board[3] && this.board[3] == this.board[6],
            condition5: this.board != "" && this.board[1] == this.board[4] && this.board[4] == this.board[7],
            condition6: this.board != "" && this.board[2] == this.board[5] && this.board[5] == this.board[8],
            condition7: this.board != "" && this.board[0] == this.board[4] && this.board[4] == this.board[8],
            condition8: this.board != "" && this.board[2] == this.board[4] && this.board[4] == this.board[6]}
        this.activePlayer = "x";
    }
    init(){
        this.board.forEach((tile) => tile = "a");
        console.log(this.winCondition)
    }
}