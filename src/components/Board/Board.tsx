import "./Board.scss";
import Square from '../Square/Square.tsx'
import { ShipStatusT } from "../../redux/types.ts";

type BoardT = {
  boardStatus: { boardStatus: ShipStatusT[][] };
  onSquareClick?: (position: string) => void;
}

const Board = ({ boardStatus, onSquareClick }: BoardT): JSX.Element => {

  return (
    <div className='boardContainer'>
      {boardStatus.boardStatus.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="boardRow">
          {row.map((squareStatus, columnIndex) => (
            <Square
              key={`square-${rowIndex}-${columnIndex}`}
              statusSquare={squareStatus}
              onSquareClick={onSquareClick ? () => onSquareClick(`${rowIndex},${columnIndex}`) : undefined}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
