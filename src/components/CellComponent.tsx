import React from 'react';
import styles from '../App.module.css';

import { Cell } from '../models/Cell';

interface CellProps {
  cell: Cell;
}

const CellComponent: React.FC<CellProps> = ({ cell }) => {
  return (
    <div className={ [styles.cell, styles[cell.color]].join(' ') }>
      {
        cell.figure?.image && <img src={ cell.figure.image } alt=""/>
      }
    </div>
  );
};

export default CellComponent;