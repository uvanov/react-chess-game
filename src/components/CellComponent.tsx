import React from 'react';
import styles from '../App.module.css';

import { Cell } from '../models/Cell';

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: React.FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <div
      className={[styles.cell, styles[cell.color], selected ? styles.selected : ''].join(' ')}
      onClick={ () => click(cell) }
    >
      {
        cell.figure?.image && <img src={ cell.figure.image } alt=""/>
      }
    </div>
  );
};

export default CellComponent;