import React, { useEffect, useState } from 'react';
import styles from './App.module.css';

import BoardComponent from './components/BoardComponent';

import { Board } from './models/Board';
import { Player } from './models/Player';
import { Colors } from './models/Colors';
import CapturedFigures from './components/CapturedFigures';

const App: React.FC = () => {
  const [board, setBoard] = useState(new Board());

  const [whitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);


  const restart = () => {
    const newBoard = new Board();
    newBoard.InitCells();
    newBoard.AddFigures();
    setBoard(newBoard);
  };

  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  };

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={ styles.app }>
      <BoardComponent
        board={ board }
        setBoard={ setBoard }
        currentPlayer={ currentPlayer }
        swapPlayer={ swapPlayer }
      />
      <CapturedFigures board={ board }/>
    </div>
  );
};

export default App;