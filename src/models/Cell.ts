import { Colors } from './Colors';
import { Figure } from './figures/Figure';
import { Board } from './Board';

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  available: boolean;
  id: number;

  constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.board = board;
    this.color = color;
    this.figure = figure;
    this.id = Math.random();
    this.available = false;
  }

  public IsEmpty() {
    return this.figure === null;
  }

  public SetFigure(figure: Figure) {
    this.figure = figure;
    this.figure.cell = this;
  }

  public MoveFigure(target: Cell) {
    if (this.figure && this.figure?.CanMove(target)) {
      this.figure.MoveFigure(target);
      target.SetFigure(this.figure);
      this.figure = null;
    }
  }

  public IsEmptyVertical(target: Cell): boolean {
    if (this.x !== target.x) return false;

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);

    for (let y = min + 1; y < max; y++) {
      if (!this.board.GetCell(this.x, y).IsEmpty()) {
        return false;
      }
    }

    return true;
  }

  public IsEmptyHorizontal(target: Cell): boolean {
    if (this.y !== target.y) return false;

    const min = Math.min(this.x, target.x);
    const max = Math.max(this.x, target.x);

    for (let x = min + 1; x < max; x++) {
      if (!this.board.GetCell(x, this.y).IsEmpty()) {
        return false;
      }
    }

    return true;
  }

  public IsEmptyDiagonal(target: Cell): boolean {
    const absX = Math.abs(target.x - this.x);
    const absY = Math.abs(target.y - this.y);

    if (absX !== absY)
      return false;

    const dX = this.x < target.x ? 1 : -1;
    const dY = this.y < target.y ? 1 : -1;

    for (let index = 1; index < absY; index++) {
      if (!this.board.GetCell(this.x + dX * index, this.y + dY * index).IsEmpty()) {
        return false;
      }
    }
    return true;
  }
}