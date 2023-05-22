import "./GameLayout.scss";

import Board from "../Board/Board.tsx";
import Button from "../Button/Button.tsx";
import { AppPhases, GameStateT, WinnerT } from "../../redux/types.ts";
import { useDispatch, useSelector } from "react-redux";
import { setPhaseGamingVsPc, setStarApp } from "../../redux/actions.ts";

type GameLayoutT = {
  player1Clickhandler?: (position: string) => void;
  player2Clickhandler?: (position: string) => void;
  winner?: WinnerT;
}

type ExcludedPhasesT = 'dashboard_menu_app' | 'setting_game';
type PhasesInGamingT = Exclude<AppPhases, ExcludedPhasesT>;

type playersMessagesT = {
  'Player-1': string,
  'Player-2': string
}


const GameLayout = ({ player1Clickhandler, player2Clickhandler, winner }: GameLayoutT): JSX.Element => {
  const getDataStore = useSelector((state: GameStateT) => state);
  const dispatch = useDispatch();

  const subBoardMessage = (player: keyof playersMessagesT) => {
    const message: Record<PhasesInGamingT, playersMessagesT> = {
      placing_ships: {
        'Player-1': `Coloca tus piezas: ${getDataStore.playerOneplacingShips}`,
        'Player-2': `Coloca tus piezas: ${getDataStore.playerTwoplacingShips}`,
      },
      playingVsPc: {
        'Player-1': `Flota: ${getDataStore.playerOneShipLeft}`,
        'Player-2': `Flota: ${getDataStore.playerTwoShipLeft}`,
      },
      end_game: {
        'Player-1': `Flota: ${getDataStore.playerOneShipLeft}`,
        'Player-2': `Flota: ${getDataStore.playerTwoShipLeft}`,
      },
    }
    return message[getDataStore.appPhase as PhasesInGamingT][player];
  }

  return (
    <div className='gameLayoutContainer'>
      {getDataStore.winner && (
        <h2>
          {(winner === 'Player-1' || winner === 'Player-2') ? `${winner} gana!` : 'Empate'}
        </h2>
      )}

      <div className='gameLayoutCScreenGame'>
        <div>
          <h2 className="gameLayoutPlayerTitle">Player-1</h2>
          {getDataStore.playerOneBoard ? <Board boardStatus={getDataStore.playerOneBoard} onSquareClick={player1Clickhandler} /> : ''}
          <div className="GameLayaoutSubBoardMessage">
            {subBoardMessage('Player-1')}
          </div>
        </div>

        <div>
          <h2>Player-2</h2>
          {getDataStore.playerTwoBoard ? <Board boardStatus={getDataStore.playerTwoBoard} onSquareClick={player2Clickhandler} /> : ''}
          <div className="GameLayaoutSubBoardMessage">
            {subBoardMessage('Player-2')}
          </div>
        </div>
      </div>

      <div className="gameLayoutButtons">

        {getDataStore.appPhase === 'placing_ships' && getDataStore.playerOneplacingShips === 0 &&
          <Button
            text={'Jugar'}
            onClick={() => dispatch(setPhaseGamingVsPc())}
            style={'primaryBtn'}
          />
        }

        <Button
          text={'Volver al menu'}
          onClick={() => dispatch(setStarApp())}
          style={getDataStore.appPhase === 'end_game' ? 'primaryBtn' : 'secondaryBtn'}
        />
      </div>
    </div >
  )
};

export default GameLayout;
