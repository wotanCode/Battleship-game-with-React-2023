import { ShipStatusT } from "../../redux/types";
import "./Square.scss";

type SquareT = {
  text?: number;
  onSquareClick?: () => void;
  statusSquare: ShipStatusT
}

const Square = ({
  statusSquare,
  text,
  onSquareClick
}: SquareT): JSX.Element => {

  return (
    <div
      className={`square ${statusSquare}`}
      onClick={onSquareClick ? () => onSquareClick() : undefined}
    >
      {text}
    </div>
  )
};

export default Square;