//React
import React, { useState } from "react";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//React-Bootstrap
import { Container, Row, Col } from "react-bootstrap";
//css
import "../css/app.css";
//Componentes importados
import { MenuSup } from "./components/MenuSup";
import { MenuInf } from "./components/MenuInf";

// function creatematrix() {
//   const square = React.createElemente;
//   const maquina_t = document.querySelector(".tablero-maquina");
//   for (let i = 0; i++; i < 100) {
//     square("div", null, null);
//     maquina_t.appendChild(square);
//   }
// }

function App(props) {
  //Colocar Barco
  const [barco, setBarco] = useState(false);
  const ToggleClass = () => {
    setBarco(!barco); 
  };
  //ARREGLO
  let matrix = Array(100).fill(0);
  //let matrix = Array(100).fill(0).map((key, keyindex) => keyindex);

  return (
    <Container fluid id="windoned">
      <Container>
        <MenuSup />
        <Row>
          <Col className="mb-3">
            <h4>Player</h4>
            <div className="tablero">
              {matrix.map((pa, key) => {
                return (
                  <div
                    onClick={() => ToggleClass()}
                    className={barco ? "coordenada_activa" : "coordenada"}
                    key={key}
                  />
                );
              })}
            </div>
          </Col>
          <Col className="mb-3">
            <h4>IA</h4>
            <div className="tablero-maquina">
            {matrix.map((pa, key) => {
                return (
                  <div
                    onClick={() => ToggleClass()}
                    className={barco ? "coordenada_activa" : "coordenada"}
                    key={key}
                  />
                );
              })}
            </div>
          </Col>
          {/* <Col className="mb-3">
            <h4>Testeando tablero</h4>
            <div className="tablero-prueba">
              <div className="ship fragata-container" draggable="true">
                <div id="fragata-0"></div>
                <div id="fragata-1"></div>
              </div>
              <div className="ship destructor-container" draggable="true">
                <div id="destructor-0"></div>
                <div id="destructor-1"></div>
                <div id="destructor-2"></div>
              </div>
              <div className="ship crucero-container" draggable="true">
                <div id="crucero-0"></div>
                <div id="crucero-1"></div>
                <div id="crucero-2"></div>
                <div id="crucero-3"></div>
              </div>
              <div className="ship battleship-container" draggable="true">
                <div id="battleship-0"></div>
                <div id="battleship-1"></div>
                <div id="battleship-2"></div>
                <div id="battleship-3"></div>
                <div id="battleship-4"></div>
              </div>
            </div>
          </Col> */}
        </Row>
        {/* <button>Start</button> */}
        <MenuInf />
      </Container>
    </Container>
  );
}

export default App;
