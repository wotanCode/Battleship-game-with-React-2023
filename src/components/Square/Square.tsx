import "./Square.scss";

type SquareT = {
  statusNumbers: 0 | 1 | 2 | 3
  text?: number;
  onSquareClick?: () => void;
}
const status = {
  0: 'hidden',
  1: 'ship',
  2: 'selected',
  3: 'destroyed'
}

const Square = ({
  statusNumbers,
  text,
  onSquareClick
}: SquareT): JSX.Element => {

  return (
    <div
      className={`square ${status[statusNumbers]}`}
      onClick={onSquareClick}
    >
      {text}
    </div>
  )
};

export default Square;