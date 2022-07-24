import {
  Figure,
  FigureNames
} from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

import whiteLogo from '../../images/white-knight.png';
import blackLogo from '../../images/black-knight.png';

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = color === Colors.WHITE ? whiteLogo : blackLogo;
    this.name = FigureNames.KNIGHT;
  }

  CanMove(target: Cell): boolean {
    if (!super.CanMove(target)) return false;

    const dX = Math.abs(this.cell.x - target.x);
    const dY = Math.abs(this.cell.y - target.y);

    return ( dX === 1 && dY === 2 ) || ( dX === 2 && dY === 1 );
  }
}