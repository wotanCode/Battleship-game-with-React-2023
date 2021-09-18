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

function creatematrix() {
  const e = React.createElement;
  for (let i=0; i++; i<100){
    return e('div', null, null);
  }
}

function App() {
  const [state, setstate] = useState("");

  return (
    <Container fluid id="windoned">
      <Container>
        <MenuSup />
        <Row>
          <Col className="mb-3">
            <h4>Player</h4>
            <div className="tablero">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Col>
          <Col className="mb-3">
            <h4>IA</h4>
            <div className="tablero">
            {
                creatematrix()
            }
            </div>
          </Col>
          <Col className="mb-3">
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
          </Col>
        </Row>
        <button>Start</button>
        <MenuInf />
      </Container>
    </Container>
  );
}

export default App;
