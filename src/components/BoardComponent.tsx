import React, { useState } from 'react';
import styles from '../App.module.css';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';

import CellComponent from './CellComponent';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {

  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const click = (cell: Cell) => {
    if (cell.figure) {
      setSelectedCell(cell);
    }
  };

  return (
    <div className={ styles.board }>
      {
        board.cells.map((row, index) => (
            <React.Fragment key={ index }>
              {
                row.map(cell => (
                  <CellComponent
                    key={ cell.id }
                    cell={ cell }
                    selected={ cell.x === selectedCell?.x && cell.y === selectedCell?.y }
                    click={ click }
                  />
                ))
              }
            </React.Fragment>
          )
        )
      }
    </div>
  );
};

export default BoardComponent;