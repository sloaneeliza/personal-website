import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjCard } from "./ProjCard";
import Eclipse from "../assets/img/Eclipse.png";
import Resilience from "../assets/img/Resilience.png";
import BUHealth from "../assets/img/BUHealth.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Proj = () => {

  const firstTabProjects = [
    {
      title: "Eclipse",
      description: "A mindfulness app dedicated to students. It includes pomodoro timers, ambient noises, and guided timed meditation.",
      imgUrl: Eclipse,
      link: "https://github.com/sloaneeliza/Eclipse"
    },
    {
      title: "Belmont Health",
      description: "Developed an app to make on-campus health services more easily accessible via mobile phones.",
      imgUrl: BUHealth,
      link: "https://github.com/sloaneeliza/Belmont-Health"
    },
    {
      title: "Cybersecurity Analyst",
      description: "Assisted with implementing proper security measures company-wide for 7 months.",
      imgUrl: Resilience,
    }
  ];

  const secondTabProjects = [
   
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Here are some of the things I've worked on</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          firstTabProjects.map((project, index) => {
                            return (
                              <ProjCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p>More things coming soon!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More things coming soon!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}
