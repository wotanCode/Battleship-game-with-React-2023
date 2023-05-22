import React, { useRef } from "react";
import Button from "../Button/Button";
import "./SettingGameMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import { GameStateT, ShipStatusT } from "../../redux/types";
import { SettingCreateBoard, SettingUpdateBoardDimenssion, settingUpdateNumShips } from "../../redux/actions";

type SettingGameMenuT = {
  onClickStart: () => void;
  onClickExit: () => void;
};

const SettingGameMenu = ({ onClickStart, onClickExit }: SettingGameMenuT): JSX.Element => {
  const dispatch = useDispatch();
  const { playerOneplacingShips, boardDimension } = useSelector((state: GameStateT) => state);
  const numShipsInputRef = useRef<HTMLInputElement>(null);
  const dimBoardInputRef = useRef<HTMLInputElement>(null);

  const handleNumShipsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(settingUpdateNumShips(parseInt(value)));
  };

  const handleDimBoardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(SettingUpdateBoardDimenssion(parseInt(value)));
  };

  const handleInput = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      const value = ref.current.value.trim();
      ref.current.value = value;
    }
  };

  const handleStartClick = () => {
    const playersBoards = Array.from(Array(boardDimension), () => Array(boardDimension).fill('hidden') as ShipStatusT[]);
    dispatch(SettingCreateBoard(playersBoards));
    onClickStart();
  };

  const handleIsDisabled = (): boolean => {
    if (boardDimension < 2 || boardDimension > 10 || playerOneplacingShips < 1 || playerOneplacingShips >= boardDimension * boardDimension) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="settingMenuContainer">
      <form className="settingMenuForm">
        <div className="settingMenuFormInputs">
          <label className="settingMenuLabel" htmlFor="numShips">Número de naves</label>

          <input
            className="number"
            type="number"
            id="numShips"
            name="numShips"
            value={playerOneplacingShips ? playerOneplacingShips.toString() : ""}
            ref={numShipsInputRef}
            onChange={handleNumShipsChange}
            onInput={() => handleInput(numShipsInputRef)}
          />
          <div className='settingMenuNote'>El número de naves no puede superar las dimensiones del tablero</div>
        </div>

        <div className="settingMenuFormInputs">
          <label className="settingMenuLabel" htmlFor="dimBoard">Dimensiones del tablero</label>

          <input
            className="number"
            type="number"
            id="dimBoard"
            name="dimBoard"
            value={boardDimension ? boardDimension.toString() : ""}
            ref={dimBoardInputRef}
            onChange={handleDimBoardChange}
            onInput={() => handleInput(dimBoardInputRef)}
          />
          <div className='settingMenuNote'>Ingresa un número entre 2 y 10</div>
          {boardDimension ?
            <div className='settingMenuNote'>{boardDimension}x{boardDimension} = {boardDimension * boardDimension}</div>
            : ''
          }

        </div>
      </form>

      <Button onClick={handleStartClick} text="JUGAR" style={`${handleIsDisabled() === false ? 'primaryBtn' : 'disabledBtn'}`} isDisabled={handleIsDisabled()} />

      <Button onClick={onClickExit} text="VOLVER" />
    </div>
  );
};

export default SettingGameMenu;
