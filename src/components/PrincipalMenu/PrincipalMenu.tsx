import Button from "../Button/Button";
import "./PrincipalMenu.scss";

type PrincipalMenuT = {
  onClick: () => void,
}

const PrincipalMenu = ({ onClick }: PrincipalMenuT): JSX.Element => {

  return (
    <Button onClick={onClick} text="Partida de un jugador" style="primaryBtn" />
  )
};

export default PrincipalMenu;