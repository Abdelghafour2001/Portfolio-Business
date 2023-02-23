import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiLaravel,
} from "react-icons/di";
import {
  SiMicrosoftsqlserver,
  SiNeo4J,
  SiCsharp,
  SiAngularjs,
  SiOracle,
  SiDotnet,
  SiSpring,
  SiArduino,

} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <h6>C-sharp</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngularjs />
        <h6>Angular</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>Javascript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLaravel />
        <h6>PHP Laravel</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6>Mongodb</h6>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h6>Java</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
        <h6>.Net</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
        <h6>Spring</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
        <h6>MS Sql Server</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
        <h6>Oracle</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
