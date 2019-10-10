class TicTacToe {
    constructor() {
        this.field =  [[ null, null , null],
                       [ null, null, null],
                       [ null, null, null]];
        this.playerSymbol  = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.playerSymbol;
            this.playerSymbol === 'x' ? this.playerSymbol = 'o' : this.playerSymbol = 'x';
        }
    }

    isFinished() {
        if (this.getWinner() || this.noMoreTurns()) return true;
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
          ) return 'x';
        if(
            (this.field[0][0]==='o' && this.field[0][1]==='o' && this.field[0][2]==='o') ||
            (this.field[1][0]==='o' && this.field[1][1]==='o' && this.field[1][2]==='o') ||
            (this.field[2][0]==='o' && this.field[2][1]==='o' && this.field[2][2]==='o') ||
            (this.field[0][0]==='o' && this.field[1][0]==='o' && this.field[2][0]==='o') ||
            (this.field[0][1]==='o' && this.field[1][1]==='o' && this.field[2][1]==='o') ||
            (this.field[0][2]==='o' && this.field[1][2]==='o' && this.field[2][2]==='o') ||
            (this.field[0][0]==='o' && this.field[1][1]==='o' && this.field[2][2]==='o') ||
            (this.field[0][2]==='o' && this.field[1][1]==='o' && this.field[2][0]==='o')
          ) return 'o';

        return null    
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
        if (this.getWinner() || !this.noMoreTurns()) return false;
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];   
    }
}


module.exports = TicTacToe;