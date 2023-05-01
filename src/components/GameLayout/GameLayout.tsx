import "./GameLayout.scss";

import Board from "../Board/Board.tsx";
import Button from "../Button/Button.tsx";
import { phaseStateT, winnerT } from '../Layout/Layout.tsx';

type GameLayoutT = {
  phase: phaseStateT
  winner?: winnerT;
  playerBoardClicking?: (position: string) => void;
  enemyBoardClicking?: (position: string) => void;
  playerBoard: {
    [key: string]: 0 | 1 | 2 | 3;
  };
  enemyBoard: {
    [key: string]: 0 | 1 | 2 | 3;
  };
  primayButtonText: string;
  handleCLickPrimaryButton: () => void;
  instructionMessage: string;
  ammoOrShipsLeft: number;
}

const GameLayout = ({
  phase,
  winner,
  playerBoardClicking,
  enemyBoardClicking,
  playerBoard,
  enemyBoard,
  primayButtonText,
  handleCLickPrimaryButton,
  instructionMessage,
  ammoOrShipsLeft
}: GameLayoutT): JSX.Element => {

  return (
    <div className='GameLayoutContainer'>
      <h1>React BattleShip</h1>

      {winner && (
        <h2>
          {winner === 'Jugador' ? '¡Player gana!' : '¡Computador Gana!'}
        </h2>
      )}

      <div className='ScreenGame'>
        {/* Tablero del jugador */}
        <div>
          <h2>Jugador</h2>
          <Board boardStatus={playerBoard} onSquareClick={playerBoardClicking} />
        </div>

        {/* Tablero del computador */}
        <div>
          <h2>Computador</h2>
          <Board boardStatus={enemyBoard} onSquareClick={enemyBoardClicking} />
        </div>
      </div>

      {/* Instrucciones del juego */}
      <h3>{instructionMessage}</h3>

      {/* Cantidad de piezas - Solo en primera fase debe salir este mensaje */}

      <p>{phase === 'place-ships' ? `Piezas: ${ammoOrShipsLeft}` : `Munición: ${ammoOrShipsLeft}`}</p>

      <Button
        text={primayButtonText}
        handleCLick={handleCLickPrimaryButton}
      />
    </div >
  )
};

export default GameLayout;
