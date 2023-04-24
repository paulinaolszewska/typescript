import { SAME_POSITION_ERROR } from "./error";
import { QueenPositions } from "./QueenPositions";
import { Queen } from "./Qeen";

export class QueensAttack implements QueenPositions{
    white:Queen;
    black: Queen;
    constructor(queenPositions:QueenPositions){
        this.black=queenPositions.black;
        this.white=queenPositions.white;
    }
    public representBoardAsString(){

    }
    public queenCanAttack():boolean{
        if(this.white[0]===this.black[0]||this.white[1]===this.black[1]||Math.abs(this.white[0]-this.black[0])===Math.abs(this.white[1]-this.black[1]))
            {
            return true
        }return false
    }
}
const newAttack=new QueensAttack({white:[2,1],black:[5,4]});
console.log(newAttack.queenCanAttack())