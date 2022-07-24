import React from 'react';
import styles from '../App.module.css';
import { Board } from '../models/Board';

interface CapturedFiguresProps {
  board: Board;
}

const CapturedFigures: React.FC<CapturedFiguresProps> = ({ board }) => {
  return (
    <div className={ styles.capturedFigures }>
      {
        board.capturedFigures.map(figure => figure.image && (
          <img
            src={ figure.image }
            alt={ figure.name }
            title={ figure.name }
          />
        ))
      }
    </div>
  );
};

export default CapturedFigures;