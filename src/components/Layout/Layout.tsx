import { useDispatch, useSelector } from "react-redux";
import { setPhasePlaceShip, setPlaceShip, setPlaye1AttackEnemy, setSettingGame, setStarApp } from '../../redux/actions';
import GameLayout from "../GameLayout/GameLayout.tsx";
import "./Layout.scss";
import { GameStateT } from "../../redux/types.ts";
import PrincipalMenu from "../PrincipalMenu/PrincipalMenu.tsx";
import SettingGameMenu from "../SettingGameMenu/SettingGameMenu.tsx";

const Layout = (): JSX.Element => {
  const dispatch = useDispatch();
  const getStore = useSelector((state: GameStateT) => state);

  const handlePlaceShips = (position: string) => {
    if (getStore.playerOneplacingShips > 0 && getStore.playerTwoplacingShips > 0) {
      dispatch(setPlaceShip(position));
    }
  }

  const handlep1AttackEnemy = (position: string) => {
    dispatch(setPlaye1AttackEnemy(position));
  }

  // // motor de pasos.
  switch (getStore.appPhase) {
    case 'setting_game':
      return (
        <SettingGameMenu onClickStart={() => dispatch(setPhasePlaceShip())} onClickExit={() => dispatch(setStarApp())} />
      )

    case 'placing_ships':
      return (
        <GameLayout
          player1Clickhandler={handlePlaceShips}
        />
      )

    case 'playingVsPc':
      return (
        <GameLayout
          player2Clickhandler={handlep1AttackEnemy}
        />
      )

    case 'dashboard_menu_app':
    default:
      return (
        <PrincipalMenu onClick={() => dispatch(setSettingGame())} />
      )
  }
};

export default Layout;