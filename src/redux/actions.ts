export const setRestartGame = () => {
  return {
    type: 'RESTART_GAME',
  };
};

export const setPlaceShip = (position: string) => {
  return {
    type: 'PLACE_SHIP',
    payload: {
      position,
    }
  };
};

// Comenzar la partida
export const setStartGame = () => {
  return {
    type: 'START_GAME',
  };
};