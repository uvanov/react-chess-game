import {
  Figure,
  FigureNames
} from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

import whiteLogo from '../../images/white-queen.png';
import blackLogo from '../../images/black-queen.png';

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = color === Colors.WHITE ? whiteLogo : blackLogo;
    this.name = FigureNames.QUEEN;
  }

  CanMove(target: Cell): boolean {
    if (!super.CanMove(target)) return false;
    if (this.cell.IsEmptyVertical(target)) return true;
    if (this.cell.IsEmptyHorizontal(target)) return true;
    if (this.cell.IsEmptyDiagonal(target)) return true;
    return false;
  }
}