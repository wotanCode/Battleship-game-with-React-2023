import { GameActionT } from "./types";
interface BoardState {
  playerBoard: {
    [key: string]: 0 | 1 | 2 | 3;
  };
  enemyBoard: {
    [key: string]: 0 | 1 | 2 | 3;
  };
  phase: 'place-ships' | 'playing' | 'endGame';
  shipsLeft: number;
  winner?: 'Jugador' | 'Computador'
  turn: 'Jugador' | 'Computador',
  ammo: 0 | 1 | 2 | 3
}

function generateEnemyBoard() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const enemyBoard: { [key: string]: 0 | 1 | 2 | 3 } = {};

  for (const letter of letters) {
    for (let i = 1; i <= 8; i++) {
      enemyBoard[`${letter}${i}`] = 0;
    }
  }

  let count = 0;
  while (count < 16) {
    const position = getRandomPosition();
    if (enemyBoard[position] === 0) {
      enemyBoard[position] = 1;
      count++;
    }
  }

  return enemyBoard;
}

// Funcion para obtener una posicion del tablero aleatoriamente.
function getRandomPosition() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const randomLetter = letters[Math.floor(Math.random() * letters.length)]
  const randomNumber = Math.floor(Math.random() * 8) + 1
  return `${randomLetter}${randomNumber}`
}

const initialGameState: BoardState = {
  playerBoard: {
    'A1': 0, 'A2': 0, 'A3': 0, 'A4': 0, 'A5': 0, 'A6': 0, 'A7': 0, 'A8': 0,
    'B1': 0, 'B2': 0, 'B3': 0, 'B4': 0, 'B5': 0, 'B6': 0, 'B7': 0, 'B8': 0,
    'C1': 0, 'C2': 0, 'C3': 0, 'C4': 0, 'C5': 0, 'C6': 0, 'C7': 0, 'C8': 0,
    'D1': 0, 'D2': 0, 'D3': 0, 'D4': 0, 'D5': 0, 'D6': 0, 'D7': 0, 'D8': 0,
    'E1': 0, 'E2': 0, 'E3': 0, 'E4': 0, 'E5': 0, 'E6': 0, 'E7': 0, 'E8': 0,
    'F1': 0, 'F2': 0, 'F3': 0, 'F4': 0, 'F5': 0, 'F6': 0, 'F7': 0, 'F8': 0,
    'G1': 0, 'G2': 0, 'G3': 0, 'G4': 0, 'G5': 0, 'G6': 0, 'G7': 0, 'G8': 0,
    'H1': 0, 'H2': 0, 'H3': 0, 'H4': 0, 'H5': 0, 'H6': 0, 'H7': 0, 'H8': 0,
  },
  enemyBoard: {
    'A1': 0, 'A2': 0, 'A3': 0, 'A4': 0, 'A5': 0, 'A6': 0, 'A7': 0, 'A8': 0,
    'B1': 0, 'B2': 0, 'B3': 0, 'B4': 0, 'B5': 0, 'B6': 0, 'B7': 0, 'B8': 0,
    'C1': 0, 'C2': 0, 'C3': 0, 'C4': 0, 'C5': 0, 'C6': 0, 'C7': 0, 'C8': 0,
    'D1': 0, 'D2': 0, 'D3': 0, 'D4': 0, 'D5': 0, 'D6': 0, 'D7': 0, 'D8': 0,
    'E1': 0, 'E2': 0, 'E3': 0, 'E4': 0, 'E5': 0, 'E6': 0, 'E7': 0, 'E8': 0,
    'F1': 0, 'F2': 0, 'F3': 0, 'F4': 0, 'F5': 0, 'F6': 0, 'F7': 0, 'F8': 0,
    'G1': 0, 'G2': 0, 'G3': 0, 'G4': 0, 'G5': 0, 'G6': 0, 'G7': 0, 'G8': 0,
    'H1': 0, 'H2': 0, 'H3': 0, 'H4': 0, 'H5': 0, 'H6': 0, 'H7': 0, 'H8': 0,
  },
  phase: 'place-ships',
  shipsLeft: 16,
  turn: 'Jugador',
  ammo: 3,
};

const rootReducer = (state = initialGameState, action: GameActionT) => {
  switch (action.type) {
    case 'RESTART_GAME':
      return {
        ...initialGameState
      };

    case 'START_GAME':
      const newPhase = 'playing'
      let newEnemyBoard = state.enemyBoard;
      newEnemyBoard = generateEnemyBoard();
      console.log('newEnemyBoard', newEnemyBoard)
      return {
        ...state,
        enemyBoard: newEnemyBoard,
        phase: newPhase,
      };

    case 'PLACE_SHIP': {
      if (state.shipsLeft > 0) {
        const { position } = action.payload;
        const newBoard = { ...state.playerBoard };
        const newShipleft = newBoard[position] === 1 ? state.shipsLeft + 1 : state.shipsLeft - 1;
        newBoard[position] = newBoard[position] === 1 ? 0 : 1;
        return {
          ...state,
          playerBoard: newBoard,
          shipsLeft: newShipleft,
        };
      } else {
        return state;
      }
    }

    default:
      return state;
  }
};

export default rootReducer
