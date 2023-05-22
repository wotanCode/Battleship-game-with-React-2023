import { SettingGameT, StartAppT, SettingUpdateNumShipsT, SettingUpdateBoardDimenssionT, SettingCreateBoardT, ShipStatusT, PhasePlaceShipActionT, PlaceShipActionT, PhasePlayingVsPcTurnT } from "./types";

//INICIAR LA APP
export const setStarApp = (): StartAppT => {
  return {
    type: 'START_APP',
  };
};

// Configuraciones basicas del juego, numero de naves, tamaño del tablero etc
export const setSettingGame = (): SettingGameT => {
  return {
    type: 'SET_SETTING_GAME',
  }
}

// Guarda en el store las configuraciones de la cantidad de naves
export const settingUpdateNumShips = (numShips: number): SettingUpdateNumShipsT => {
  return {
    type: "SETTING_UPDATE_NUM_SHIPS",
    payload: numShips,
  };
};

// Guarda las dimensiones del tablero con el que se va a crear
export const SettingUpdateBoardDimenssion = (boardDimenssion: number): SettingUpdateBoardDimenssionT => {
  return {
    type: "SETTING_UPDATE_BOARD_DIMENSION",
    payload: boardDimenssion,
  };
};

// Crea el tablero
export const SettingCreateBoard = (numberOfSquare: ShipStatusT[][]): SettingCreateBoardT => {
  return {
    type: "SETTING_CREATE_BOARD",
    payload: {
      boardStatus: numberOfSquare,
    },
  };
};

// Posicionar las naves en el tablero
export const setPhasePlaceShip = (): PhasePlaceShipActionT => {
  return {
    type: 'PHASE_PLACE_SHIP',
  };
};

// Posicionar las naves del jugador 1 en el tablero
export const setPlaceShip = (position: string): PlaceShipActionT => {
  return {
    type: 'PLACE_SHIP',
    payload: {
      position,
    }
  }
}

// Posicionar las naves en el tablero
export const setPhaseGamingVsPc = (): PhasePlayingVsPcTurnT => {
  return {
    type: 'PHASE_START_GAMING_VS_PC',
  };
};








// reinicia el juego con los parametros ya iniciados por el jugador
export const setRestartGame = () => {
  return {
    type: 'RESTART_GAME',
  };
};



// Comenzar la partida
export const setStartGame = () => {
  return {
    type: 'START_GAME',
  };
};