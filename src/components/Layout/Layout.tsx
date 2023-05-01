import { useDispatch, useSelector } from "react-redux";
import { setPlaceShip, setRestartGame, setStartGame } from '../../redux/actions';
import GameLayout from "../GameLayout/GameLayout.tsx";
import "./Layout.scss";

export type phaseStateT = 'place-ships' | 'playing' | 'endGame';
export type winnerT = 'Jugador' | 'Computador';
export type shipStatusT = 0 | 1 | 2 | 3;

export type GameStateT = {
  phase: phaseStateT;
  shipsLeft: number;
  winner?: winnerT;
  playerBoard: {
    [key: string]: shipStatusT;
  };
  enemyBoard: {
    [key: string]: shipStatusT;
  };
  ammo: number;
}

const Layout = (): JSX.Element => {
  const {
    playerBoard, enemyBoard, phase,
    shipsLeft, winner, ammo
  } = useSelector((state: GameStateT) => state);
  const dispatch = useDispatch();

  // handlers
  // Colocar o sacar naves
  const handlePlaceShips = (position: string) => {
    dispatch(setPlaceShip(position));
  }

  // reinicia el juego
  const handleRestartGame = () => {
    dispatch(setRestartGame())
  }

  // Inicia el juego
  const handleStartGame = () => {
    dispatch(setStartGame())
  }

  //Dispara enemigo
  //colocar handler aqui

  // motor de pasos.
  switch (phase) {
    case 'playing':
      return (
        <GameLayout
          phase={phase}
          playerBoard={playerBoard}
          enemyBoard={enemyBoard}

          instructionMessage={'Derrota a tu enemigo'}

          ammoOrShipsLeft={ammo}

          // Boton primario
          primayButtonText={'Reiniciar partida'}
          handleCLickPrimaryButton={handleRestartGame}
        />
      )
    case 'endGame':
      return (
        <GameLayout
          phase={phase}
          winner={winner}
          playerBoard={playerBoard}
          enemyBoard={enemyBoard}

          instructionMessage={'Fin de la partida'}

          ammoOrShipsLeft={ammo}

          // Boton primario
          primayButtonText={'Reiniciar partida'}
          handleCLickPrimaryButton={handleRestartGame}
        />
      )

    case 'place-ships':
    default:
      return (
        <GameLayout
          phase={phase}
          playerBoardClicking={handlePlaceShips}
          playerBoard={playerBoard}
          enemyBoard={enemyBoard}

          instructionMessage={'Posiciona tus piezas en el tablero'}

          ammoOrShipsLeft={shipsLeft}

          // Boton primario
          primayButtonText={'Empezar partida'}
          handleCLickPrimaryButton={handleStartGame}
        />
      )
  }
};

export default Layout;
