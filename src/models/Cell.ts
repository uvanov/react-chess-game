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

  public MoveFigure(target: Cell) {
    if (this.figure && this.figure?.CanMove(target)) {
      this.figure?.MoveFigure(target);
      target.figure = this.figure;
      this.figure = null;
    }
  }
}