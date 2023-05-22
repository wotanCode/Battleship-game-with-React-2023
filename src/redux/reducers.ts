import { AppPhases, GameActionsT, GameStateT, ShipStatusT } from "./types";

// Función para generar el arreglo enemigo con posiciones aleatorias
const generateEnemyBoard = (rows: number, columns: number, shipCount: number) => {
  const boardStatus = [];

  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let j = 0; j < columns; j++) {
      row.push('hidden');
    }

    boardStatus.push(row);
  }

  let shipsPlaced = 0;

  while (shipsPlaced < shipCount) {
    const randomRow = Math.floor(Math.random() * rows);
    const randomColumn = Math.floor(Math.random() * columns);

    if (boardStatus[randomRow][randomColumn] === 'hidden') {
      boardStatus[randomRow][randomColumn] = 'shipPlayer1';
      shipsPlaced++;
    }
  }

  return {
    boardStatus: boardStatus,
  };
};

const initialState: GameStateT = {
  appPhase: 'dashboard_menu_app',
  boardDimension: 8,
  playerOneplacingShips: 16,
  playerTwoplacingShips: 16,
  playerOneShipLeft: 16,
  playerTwoShipLeft: 16,
}

const rootReducer = (state = initialState, action: GameActionsT) => {
  let appPhase: AppPhases;

  switch (action.type) {
    // Esto es el menu principal cuando inicia la App
    case 'START_APP':
      appPhase = 'dashboard_menu_app';
      return {
        ...state,
        appPhase,
      }

    //Menu de configuracion de la partida
    case 'SET_SETTING_GAME':
      appPhase = 'setting_game';
      return {
        ...state,
        appPhase,
      }

    // Colocamos el numerro de naves con el que vamos a jugar
    case "SETTING_UPDATE_NUM_SHIPS":
      return {
        ...state,
        // Modifiando la cantidad de naves inicial
        playerOneplacingShips: action.payload,
        playerTwoplacingShips: action.payload,
        playerOneShipLeft: action.payload,
        playerTwoShipLeft: action.payload,
      };

    // Actualizamos la dimension del tablero antes de empezar
    case "SETTING_UPDATE_BOARD_DIMENSION":
      return {
        ...state,
        // Modifiando las dimensiones del tablero cuando se construya
        boardDimension: action.payload,
      };

    // esto se lama cuando creamos el tablero
    case "SETTING_CREATE_BOARD":
      return {
        ...state,
        playerOneBoard: action.payload,
        playerTwoBoard: action.payload,
      }

    // En esta etapa se usa para quitar y poner naves del jugador1
    case "PHASE_PLACE_SHIP":
      appPhase = 'placing_ships';
      return {
        ...state,
        appPhase,
      }

    // posicionando piezas en el tablero
    case 'PLACE_SHIP':
      const { position } = action.payload;
      const [row, col]: number[] = position.split(',').map(Number);

      const newBoard: { boardStatus: ShipStatusT[][] } = {
        ...state.playerOneBoard ?? {},
        boardStatus: state.playerOneBoard?.boardStatus.map((rowArray) => [...rowArray]) ?? [],
      };

      if (newBoard.boardStatus[row][col] === 'shipPlayer1') {
        newBoard.boardStatus[row][col] = 'hidden';
        return {
          ...state,
          playerOneBoard: newBoard,
          playerOneplacingShips: state.playerOneplacingShips + 1
        };
      } else {
        newBoard.boardStatus[row][col] = 'shipPlayer1';
        return {
          ...state,
          playerOneBoard: newBoard,
          playerOneplacingShips: state.playerOneplacingShips - 1
        };
      }

    // En este etapa juegan usuario contra computadora
    // En este etapa juegan usuario contra computadora
    case 'PHASE_START_GAMING_VS_PC':
      const newPhase = 'playingVsPc';

      // Obtener el tamaño del arreglo bidimensional existente
      const rows = state.playerTwoBoard?.boardStatus.length || 0;
      const columns = state.playerTwoBoard?.boardStatus[0]?.length || 0;

      // Obtener la cantidad de naves del estado
      const shipCount = state.playerTwoShipLeft || 0;

      // Generar el nuevo arreglo enemigo con las naves colocadas aleatoriamente
      const playerTwoBoard = generateEnemyBoard(rows, columns, shipCount);

      return {
        ...state,
        appPhase: newPhase,
        playerTwoBoard,
      };


    // Pone el juego en estado base - Tambien sirve para reiniciar el juego
    // case 'INITIAL_STATE':
    //   // const playerOneBoard = Array.from({ length }, () => Array(boardLength).fill('hidden'));
    //   // const playerTwoBoard = Array.from({ length }, () => Array(boardLength).fill('hidden'));
    //   return {
    //     'hola'
    //   }

    case 'START_GAME':
      // const newPhase = 'playing'
      // let newEnemyBoard = state.enemyBoard;
      // newEnemyBoard = generateEnemyBoard();
      // console.log('newEnemyBoard', newEnemyBoard)
      // return {
      //   ...state,
      //   enemyBoard: newEnemyBoard,
      //   phase: newPhase,
      return 'hola bebe'
    // };



    default:
      return state;
  }
};

export default rootReducer
