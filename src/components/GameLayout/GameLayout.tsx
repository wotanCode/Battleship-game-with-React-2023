import "./GameLayout.scss";

import Board from "../Board/Board.tsx";
import Button from "../Button/Button.tsx";
import { AppPhases, GameStateT } from "../../redux/types.ts";
import { useDispatch, useSelector } from "react-redux";
import { setPhaseGamingVsPc, setStarApp } from "../../redux/actions.ts";

type GameLayoutT = {
  player1Clickhandler?: (position: string) => void;
  player2Clickhandler?: (position: string) => void;
}

type ExcludedPhasesT = 'dashboard_menu_app' | 'setting_game';
type PhasesInGamingT = Exclude<AppPhases, ExcludedPhasesT>;

type playersMessagesT = {
  'player-1': string,
  'player-2': string
}

const instructiveMessage: Record<string, string> = {
  placing_ships: 'Posiciona tus naves!',
  playing: '',
  end_game: '',
}

const GameLayout = ({ player1Clickhandler, player2Clickhandler }: GameLayoutT): JSX.Element => {
  const getDataStore = useSelector((state: GameStateT) => state);
  const dispatch = useDispatch();

  const subBoardMessage = (player: keyof playersMessagesT) => {
    const message: Record<PhasesInGamingT, playersMessagesT> = {
      placing_ships: {
        'player-1': `¡Posiciona tus naves!: ${getDataStore.playerOneplacingShips}`,
        'player-2': `¡Posiciona tus naves!: ${getDataStore.playerTwoplacingShips}`,
      },
      playingVsPc: {
        'player-1': `Flota: ${getDataStore.playerOneShipLeft}`,
        'player-2': `Flota: ${getDataStore.playerTwoShipLeft}`,
      },
      end_game: {
        'player-1': `Flota: ${getDataStore.playerOneShipLeft}`,
        'player-2': `Flota: ${getDataStore.playerTwoShipLeft}`,
      },
    }
    return message[getDataStore.appPhase as PhasesInGamingT][player];
  }

  return (
    <div className='gameLayoutContainer'>
      {getDataStore.winner && (
        <h2>
          {getDataStore.winner === 'player-1' ? '¡Player 1 gana!' : '¡Player 2 gana!'}
        </h2>
      )}

      <div className='gameLayoutCScreenGame'>
        <div>
          <h2>Jugador 1</h2>
          {getDataStore.playerOneBoard ? <Board boardStatus={getDataStore.playerOneBoard} onSquareClick={player1Clickhandler} /> : ''}
          <div>
            {subBoardMessage('player-1')}
          </div>
        </div>

        <div>
          <h2>Jugador 2</h2>
          {getDataStore.playerTwoBoard ? <Board boardStatus={getDataStore.playerTwoBoard} onSquareClick={player2Clickhandler} /> : ''}
          <div>
            {subBoardMessage('player-2')}
          </div>
        </div>
      </div>

      <div className="gameLayoutButtons">
        <div>{instructiveMessage[getDataStore.appPhase]}</div>

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
        />
      </div>
    </div >
  )
};

export default GameLayout;
