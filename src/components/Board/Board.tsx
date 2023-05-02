import "./Board.scss";
import Square from '../Square/Square.tsx'

type BoardT = {
  boardStatus: {
    [key: string]: 0 | 1 | 2 | 3;
  };
  onSquareClick?: (position: string) => void;
}

const Board = ({ boardStatus, onSquareClick }: BoardT): JSX.Element => {

  return (
    <div className='boardContainer'>
      {Object.keys(boardStatus).map((key) => {
        return (
          <Square
            key={`square-${key}`}
            statusNumbers={boardStatus[key]}
            onSquareClick={onSquareClick ? () => onSquareClick(key) : undefined}
          />
        )
      })}
    </div>
  )
};

export default Board;