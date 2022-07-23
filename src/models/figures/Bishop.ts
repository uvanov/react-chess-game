import {
  Figure,
  FigureNames
} from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

import whiteLogo from '../../images/white-bishop.png';
import blackLogo from '../../images/black-bishop.png';

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = color === Colors.WHITE ? whiteLogo : blackLogo;
    this.name = FigureNames.BISHOP;
  }

  CanMove(target: Cell): boolean {
    if (!super.CanMove(target)) return false;
    if (this.cell.IsEmptyDiagonal(target)) return true;

    return false;
  }
}