import { useDispatch } from "react-redux";
import "./AboutMe.scss";
import Button from "../Button/Button";
import { setStarApp } from "../../redux/actions";

const AboutMe = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className="aboutMeContainer">
      <div className="card">
        <img id="background-image" src="src/components/AboutMe/images/landscape_4.png" />
        <img id="profile-image" src="src/components/AboutMe/images/justMe.jpeg" />

        <div className="name">
          <p id="users-name">Pedro Yanez</p>
          <p id="job-title">Software Developer</p>
        </div>

        <div className="flex first">
          <img id='linkedin' src="src/components/AboutMe/images/linkedin.png" />
          <a href="https://www.linkedin.com/in/pedro-yanez/" target="_blank">LinkedIn</a>
        </div>

        <div className="flex">
          <img id='github' src="src/components/AboutMe/images/github.png" />
          <a href="https://github.com/wotanCode" target="_blank">GitHub</a>
        </div>

      </div>


      <Button onClick={() => dispatch(setStarApp())} text="VOLVER" style="primaryBtn" />
    </div>
  )
};

export default AboutMe;