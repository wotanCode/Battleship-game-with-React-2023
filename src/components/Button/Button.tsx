import "./Button.scss";

type buttonT = {
  text: string;
  onClick: () => void;
  style?: 'primaryBtn' | 'secondaryBtn' | 'disabledBtn';
  isDisabled?: boolean;
}

const Button = ({ text, onClick, style, isDisabled = false }: buttonT): JSX.Element => {

  return (
    <>
      <button
        onClick={onClick}
        className={style}
        disabled={isDisabled}
      >
        {text}
        {style === 'primaryBtn' && (
          <>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </button>

    </>
  )
};

export default Button;