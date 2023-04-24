"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueensAttack = void 0;
const error_1 = require("./error");
class QueensAttack {
    constructor(queenPositions) {
        this.black = queenPositions.black;
        this.white = queenPositions.white;
        if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) {
            throw Error(error_1.SAME_POSITION_ERROR);
        }
    }
    representBoardAsString() {
        let board = '';
        for (let i = 0; i < 8; i++) {
            for (let k = 0; k < 8; k++) {
                if (i === this.white[0] && k === this.white[1]) {
                    board += `W${k === 7 ? '' : ' '}`;
                }
                else if (i === this.black[0] && k === this.black[1]) {
                    board += `B${k === 7 ? '' : ' '}`;
                }
                else if (k === 7) {
                    board += '_';
                }
                else {
                    board += '_ ';
                }
            }
            board += `${i === 7 ? '' : '\n'}`;
        }
        return board;
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
console.log(newAttack.representBoardAsString());
