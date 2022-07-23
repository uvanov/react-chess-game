import React from 'react';
import styles from '../App.module.css';

import { Cell } from '../models/Cell';

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: React.FC<CellProps> = ({ cell, selected, click }) => {

  const classNames = [
    styles.cell,
    styles[cell.color],
    selected ? styles.selected : '',
    cell.available && cell.figure ? styles.availableToAttack : ''
  ].join(' ')

  return (
    <div
      className={ classNames }
      onClick={ () => click(cell) }
    >
      { cell.available && !cell.figure && <div className={ styles.available }/> }
      { cell.figure?.image && <img src={ cell.figure.image } alt=""/> }
    </div>
  );
};

export default CellComponent;