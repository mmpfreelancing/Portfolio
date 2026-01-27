import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET US <span className="purple"> INTRODUCE </span> OURSELF
            </h1>
            <p className="home-about-body">
              We're Students from the Department of Artificial Intelligence and Data Science  who loves 
              transforming ideas into reliable, scalable products. 
              Over time, We've explored several technologies and  Participated in hackathons
              in building high-performance systems and intuitive user experiences. 
              We have gained a lot of experience in design and web development which 
              also our key interest.
              <br />
              <br />
              We're proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, C++, Figma, Node.js, and Java{" "}
                </b>
              </i>
              — and We also enjoy working across both backend and frontend stacks.
              <br />
              <br />
               Our key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Ui/UX Design and App Development{" "}
                </b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, We love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
