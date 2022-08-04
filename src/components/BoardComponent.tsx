import React, { useEffect, useState } from 'react';
import styles from '../App.module.css';

import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';

import CellComponent from './CellComponent';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: React.FC<BoardProps> = (
  {
    board,
    setBoard,
    currentPlayer,
    swapPlayer
  }) => {

  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const click = (cell: Cell) => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.CanMove(cell)) {
      selectedCell.MoveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  };

  const highlightCells = () => {
    board.HighlightCells(selectedCell);
    updateBoard();
  };

  const updateBoard = () => {
    const newBoard = board.GetCopyBoard();
    setBoard(newBoard);
  };

  useEffect(() => {
    highlightCells();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCell]);

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