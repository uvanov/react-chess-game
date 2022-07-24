import {
  Figure,
  FigureNames
} from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

import whiteLogo from '../../images/white-king.png';
import blackLogo from '../../images/black-king.png';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = color === Colors.WHITE ? whiteLogo : blackLogo;
    this.name = FigureNames.KING;
  }

  CanMove(target: Cell): boolean {
    if (!super.CanMove(target)) {
      return false;
    }

    const dX = Math.abs(target.x - this.cell.x);
    const dY = Math.abs(target.y - this.cell.y);

    if (dY <= 1 && dX <= 1) {
      return true;
    }

    return false;
  }
}