class TicTacToe {
    constructor() {
        this.field =  [[ null, null , null],
                       [ null, null, null],
                       [ null, null, null]];
        this.playerSymbol  = 'x';
        this.win = false;
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.playerSymbol;
            this.playerSymbol === 'x' ? this.playerSymbol = 'o' : this.playerSymbol = 'x';
        }
        console.log(this.field);
        console.log(this.playerSymbol);
    }

    isFinished() {
        if (this.win === true || this.isDraw() === true) return true;
        return false;
    }

    getWinner() {
        if(
            (this.field[0][0]==='x' && this.field[0][1]==='x' && this.field[0][2]==='x') ||
            (this.field[1][0]==='x' && this.field[1][1]==='x' && this.field[1][2]==='x') ||
            (this.field[2][0]==='x' && this.field[2][1]==='x' && this.field[2][2]==='x') ||
            (this.field[0][0]==='x' && this.field[1][0]==='x' && this.field[2][0]==='x') ||
            (this.field[0][1]==='x' && this.field[1][1]==='x' && this.field[2][1]==='x') ||
            (this.field[0][2]==='x' && this.field[1][2]==='x' && this.field[2][2]==='x') ||
            (this.field[0][0]==='x' && this.field[1][1]==='x' && this.field[2][2]==='x') ||
            (this.field[0][2]==='x' && this.field[1][1]==='x' && this.field[2][0]==='x')
          ) {this.win = true; console.log(this.playerSymbol); return 'x';}
        if(
            (this.field[0][0]==='o' && this.field[0][1]==='o' && this.field[0][2]==='o') ||
            (this.field[1][0]==='o' && this.field[1][1]==='o' && this.field[1][2]==='o') ||
            (this.field[2][0]==='o' && this.field[2][1]==='o' && this.field[2][2]==='o') ||
            (this.field[0][0]==='o' && this.field[1][0]==='o' && this.field[2][0]==='o') ||
            (this.field[0][1]==='o' && this.field[1][1]==='o' && this.field[2][1]==='o') ||
            (this.field[0][2]==='o' && this.field[1][2]==='o' && this.field[2][2]==='o') ||
            (this.field[0][0]==='o' && this.field[1][1]==='o' && this.field[2][2]==='o') ||
            (this.field[0][2]==='o' && this.field[1][1]==='o' && this.field[2][0]==='o')
          ) {this.win = true; console.log(this.playerSymbol); return 'o';}
        else { return null }; 
        
    }

    noMoreTurns() {

        for (let i = 0; i < this.field.length; i++) {
            for (let j = 0; j < this.field[i].length; j++) {
                if (this.field[i][j] === null) return false;
            }
        }

        return true;
    }

    isDraw() {
        if (this.getWinner() === null || this.noMoreTurns() === true) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
        
    }
}

let game;

    game = new TicTacToe();
    game.getCurrentPlayerSymbol()

    game.nextTurn(0, 1)
    game.getCurrentPlayerSymbol()

    game.nextTurn(1, 2)
    game.getCurrentPlayerSymbol()

    game.nextTurn(0, 2)
    game.getCurrentPlayerSymbol()

    game.nextTurn(0, 0)
    game.getCurrentPlayerSymbol()

    game.nextTurn(1, 1)
    game.getCurrentPlayerSymbol()

    game.nextTurn(0, 0)
    game.getCurrentPlayerSymbol()

    game.nextTurn(1, 1)
    game.getCurrentPlayerSymbol()

    game.nextTurn(2, 1)
    game.getCurrentPlayerSymbol()

    game.nextTurn(0, 1)
    game.getCurrentPlayerSymbol()

    game.nextTurn(2, 1)
    game.getCurrentPlayerSymbol()

    game.nextTurn(0, 1)
    game.getCurrentPlayerSymbol()

    game.nextTurn(1, 1)
    game.getCurrentPlayerSymbol()

    game.nextTurn(2, 0)
    game.getCurrentPlayerSymbol()

    game.getWinner()

module.exports = TicTacToe;