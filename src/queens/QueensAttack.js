"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueensAttack = void 0;
class QueensAttack {
    constructor(queenPositions) {
        this.black = queenPositions.black;
        this.white = queenPositions.white;
    }
    representBoardAsString() {
    }
    queenCanAttack() {
        if (this.white[0] === this.black[0] || this.white[1] === this.black[1] || Math.abs(this.white[0] - this.black[0]) === Math.abs(this.white[1] - this.black[1])) {
            return true;
        }
        return false;
    }
}
exports.QueensAttack = QueensAttack;
const newAttack = new QueensAttack({ white: [2, 1], black: [5, 4] });
console.log(newAttack.queenCanAttack());
