export type AppPhases = 'dashboard_menu_app' | 'setting_game' | 'placing_ships' | 'playingVsPc' | 'end_game' | 'about_me';

export type ShipStatusT = 'hidden' | 'miss' | 'shipPlayer1' | 'shipPlayer2' | 'hit';

type PlayersT = 'Player-1' | 'Player-2' | 'tie';

export type WinnerT = PlayersT | 'tie';

export type GameStateT = {
  appPhase: AppPhases;
  winner?: WinnerT;
  // Dimensiones del tablero con el que se va a crear
  boardDimension: number,
  // Status del tablero de los jugadores
  playerOneBoard?: { boardStatus: ShipStatusT[][] };
  playerTwoBoard?: { boardStatus: ShipStatusT[][] };
  // Esto solo se usa al momento de colocar las naves
  playerOneplacingShips: number;
  playerTwoplacingShips: number;
  // Esto se utiliza para saber cuantas naves quedan vivas
  playerOneShipLeft: number;
  playerTwoShipLeft: number;
}

// fase dashboard de la app
export type StartAppT = {
  type: 'START_APP';
}

// Vamos a la fase de configuracion
export type SettingGameT = {
  type: 'SET_SETTING_GAME';
}

// transformar esto para que solo sean numerros
export type SettingUpdateNumShipsT = {
  type: "SETTING_UPDATE_NUM_SHIPS",
  payload: number,
}

// Actualiza las dimensiones de las variables que maneja el tablero
export type SettingUpdateBoardDimenssionT = {
  type: "SETTING_UPDATE_BOARD_DIMENSION",
  payload: number,
}

// Creamos el tablero
export type SettingCreateBoardT = {
  type: "SETTING_CREATE_BOARD",
  payload: {
    boardStatus: ShipStatusT[][],
  },
};

// Colocar piezas en el tablero
export type PhasePlaceShipActionT = {
  type: 'PHASE_PLACE_SHIP';
}

// Colocar piezas en el tablero
export type PlaceShipActionT = {
  type: 'PLACE_SHIP';
  payload: {
    position: string;
  }
}

// Cuando esto se ejecuta posiciona las piezas en el tablero enemigo NPC
export type PhasePlayingVsPcTurnT = {
  type: 'PHASE_START_GAMING_VS_PC';
}

// Actualmente esto solo sirve para single player donde atacas y de una vez ataca el enemigo
export type Player1AttackEnemyT = {
  type: 'PLAYER_1_ATTACK_ENEMY';
  payload: {
    position: string;
  }
}

// Fase final del juego cuando termina la partida
export type EndGameActionT = {
  type: 'PHASE_END_GAME';
  payload: WinnerT
}

// Fase about me
export type PhaseAboutMeT = {
  type: 'PHASE_ABOUT_ME';
}

export type GameActionsT =
  StartAppT |
  SettingGameT |
  SettingUpdateNumShipsT |
  SettingUpdateBoardDimenssionT |
  SettingCreateBoardT |
  PhasePlaceShipActionT |
  PlaceShipActionT |
  PhasePlayingVsPcTurnT |
  Player1AttackEnemyT |
  EndGameActionT |
  PhaseAboutMeT