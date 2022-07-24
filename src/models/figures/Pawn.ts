import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import whiteLogo from '../../images/white-pawn.png';
import blackLogo from '../../images/black-pawn.png';

export class Pawn extends Figure {

  IsFirstStep: boolean = true;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = color === Colors.WHITE ? whiteLogo : blackLogo;
    this.name = FigureNames.PAWN;
  }

  CanMove(target: Cell): boolean {
    if (!super.CanMove(target)) {
      return false;
    }

    const direction = this.cell.figure?.color === Colors.BLACK ? -1 : 1;
    const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? -2 : 2;

    const isOnDirection = target.y === this.cell.y + direction || ( this.IsFirstStep && ( target.y === this.cell.y + firstStepDirection ) );
    const isForwardBlocked = !this.cell.board.GetCell(this.cell.x, this.cell.y + direction).IsEmpty();


    if (!isForwardBlocked && isOnDirection && target.x === this.cell.x && target.IsEmpty()) {
      return true;
    }

    if (target.y === this.cell.y + direction
      && ( target.x === this.cell.x + 1 || target.x === this.cell.x - 1 )
      && this.cell.IsEnemy(target)) {
      return true;
    }
    return false;
  }

  MoveFigure(target: Cell) {
    super.MoveFigure(target);
    this.IsFirstStep = false;
  }
}