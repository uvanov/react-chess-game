import { Cell } from './Cell';
import { Colors } from './Colors';
import { Queen } from './figures/Queen';

export class Board {
  cells: Cell[][] = [];

  InitCells() {
    for (let rIndex = 0; rIndex < 8; rIndex++) {
      const row: Cell[] = [];

      for (let cIndex = 0; cIndex < 8; cIndex++) {
        if (( rIndex + cIndex ) % 2 !== 0) {
          row.push(new Cell(this, cIndex, rIndex, Colors.BLACK, null)); // Black
        } else {
          row.push(new Cell(this, cIndex, rIndex, Colors.WHITE, null)); // White
        }
      }
      this.cells.push(row);
    }
  }
}