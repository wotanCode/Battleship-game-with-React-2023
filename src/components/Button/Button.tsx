import "./Button.scss";

type buttonT = {
  text: string;
  handleCLick: () => void;
}

const Button = ({ text, handleCLick }: buttonT): JSX.Element => {

  return (
    <button
      className="color"
      onClick={handleCLick}
    >
      {text}
    </button>
  )
};

export default Button;