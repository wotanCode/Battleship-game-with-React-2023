import Button from "../Button/Button";
import "./PrincipalMenu.scss";

type PrincipalMenuT = {
  singlerPlayerOnClick: () => void,
  aboutMeOnClick: () => void,
}

const PrincipalMenu = ({ singlerPlayerOnClick, aboutMeOnClick }: PrincipalMenuT): JSX.Element => {

  return (
    <div className="principalMenuContainer">
      <Button onClick={singlerPlayerOnClick} text="Partida de un jugador" style="primaryBtn" />
      <Button onClick={aboutMeOnClick} text="Acerca de mi..." style="secondaryBtn" />
    </div>
  )
};

export default PrincipalMenu;