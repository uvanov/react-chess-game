import { Colors } from '../Colors';
import { Cell } from '../Cell';

export enum FigureNames {
  FIGURE = 'Фигура',
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  BISHOP = 'Слон',
}

export class Figure {
  color: Colors;
  image: string | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.id = Math.random();
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.image = null;
    this.name = FigureNames.FIGURE;
  }

  CanMove(target: Cell): boolean {
    if (target.figure?.color === this.color) return false;
    if (target.figure?.name === FigureNames.KING) return false;
    return true;
  }

  MoveFigure(target: Cell) {

  }
}