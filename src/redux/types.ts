type RestargaGamepAction = {
  type: 'RESTART_GAME';
}

type PlaceShipAction = {
  type: 'PLACE_SHIP';
  payload: {
    position: string;
  }
}

type StartGameAction = {
  type: 'START_GAME';
}

type EndGameAction = {
  type: 'END_GAME';
  payload: {
    winner: 'Jugador' | 'Computador';
  }
}

// otras interfaces para otras acciones...

export type GameActionT =
  RestargaGamepAction |
  PlaceShipAction |
  EndGameAction |
  StartGameAction