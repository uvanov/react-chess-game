import React from 'react';
import styles from '../App.module.css';
import { Board } from '../models/Board';
import CellComponent from './CellComponent';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
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