import { Cell } from './Cell';
import { Colors } from './Colors';
import { Queen } from './figures/Queen';
import { Pawn } from './figures/Pawn';
import { King } from './figures/King';
import { Bishop } from './figures/Bishop';
import { Knight } from './figures/Knight';
import { Rook } from './figures/Rook';

export class Board {
  cells: Cell[][] = [];

  public InitCells() {
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

  public GetCell(x: number, y: number): Cell {
    return this.cells[y][x];
  }

  public HighlightCells(selectedCell: Cell | null) {
    for (let rIndex = 0; rIndex < this.cells.length; rIndex++) {
      const row = this.cells[rIndex];

      for (let cIndex = 0; cIndex < row.length; cIndex++) {
        const target = row[cIndex];
        target.available = !!selectedCell?.figure?.CanMove(target);
      }
    }
  }

  public GetCopyBoard(): Board {
    const copyBoard = new Board();
    copyBoard.cells = this.cells;
    return copyBoard;
  }

  public AddFigures() {
    this.AddPawns();
    this.AddKings();
    this.AddQueens();
    this.AddBishops();
    this.AddKnights();
    this.AddRooks();
  }

  private AddPawns() {
    for (let index = 0; index < 8; index++) {
      new Pawn(Colors.WHITE, this.GetCell(index, 1));
      new Pawn(Colors.BLACK, this.GetCell(index, 6));
    }
  }

  private AddKings() {
    new King(Colors.WHITE, this.GetCell(4, 0));
    new King(Colors.BLACK, this.GetCell(4, 7));
  }

  private AddQueens() {
    new Queen(Colors.WHITE, this.GetCell(3, 0));
    new Queen(Colors.BLACK, this.GetCell(3, 7));
  }

  private AddBishops() {
    new Bishop(Colors.WHITE, this.GetCell(2, 0));
    new Bishop(Colors.WHITE, this.GetCell(5, 0));
    new Bishop(Colors.BLACK, this.GetCell(2, 7));
    new Bishop(Colors.BLACK, this.GetCell(5, 7));
  }

  private AddKnights() {
    new Knight(Colors.WHITE, this.GetCell(1, 0));
    new Knight(Colors.WHITE, this.GetCell(6, 0));
    new Knight(Colors.BLACK, this.GetCell(1, 7));
    new Knight(Colors.BLACK, this.GetCell(6, 7));
  }

  private AddRooks() {
    new Rook(Colors.WHITE, this.GetCell(0, 0));
    new Rook(Colors.WHITE, this.GetCell(7, 0));
    new Rook(Colors.BLACK, this.GetCell(0, 7));
    new Rook(Colors.BLACK, this.GetCell(7, 7));
  }
}