import { SAME_POSITION_ERROR } from "./error";
import { QueenPositions } from "./QueenPositions";
import { Queen } from "./Qeen";

export class QueensAttack implements QueenPositions{
    white:Queen;
    black: Queen;
    constructor(queenPositions:QueenPositions){
        this.black=queenPositions.black;
        this.white=queenPositions.white;
    
    if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) {
        throw Error(SAME_POSITION_ERROR);
    }
}
public representBoardAsString() {
    let board = '';
    // pętla w pętli, najpierw rzędy, potem kolumny
    for (let i = 0; i < 8; i++) {
        for (let k = 0; k < 8; k++) {
            if (i === this.white[0] && k === this.white[1]) {
                board += `W${k === 7 ? '' : ' '}`;
            } else if (i === this.black[0] && k === this.black[1]) {
                board += `B${k === 7 ? '' : ' '}`;
            } else if (k === 7) {
                board += '_';
            } else {
                board += '_ ';
            }
        }
        board += `${i === 7 ? '' : '\n'}`;
    }
    return board;
}

    public queenCanAttack():boolean{
        // Math.abs wylicza wartość absolutną
        if(this.white[0]===this.black[0]||this.white[1]===this.black[1]||Math.abs(this.white[0]-this.black[0])===Math.abs(this.white[1]-this.black[1]))
            {
            return true
        }return false
    }
}
const newAttack=new QueensAttack({white:[2,1],black:[5,4]});
console.log(newAttack.queenCanAttack())
console.log(newAttack.representBoardAsString())