import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiVmware,
  SiAnaconda,
  SiDocker,
  SiApachekafka,
  SiApachespark,
  SiXampp,
  SiHeroku,
  SiArduino,
  SiPowerbi,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <h6>Dockerr</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>VS code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <h6>Power BI</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
        <h6>Arduino</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6>Postman</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
        <h6>Apache Kafka</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVmware />
        <h6>VMware</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
        <h6>Spark</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
        <h6>Xampp</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h6>Heroku</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
