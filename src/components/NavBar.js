import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import LinkedIn from '../assets/img/linkedin.svg';
import GitHub from '../assets/img/Github.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="d-flex justify-content-between align-items-center position-relative">
          <Navbar.Brand href="/" className="ms-0">
            <span style={{ color: "#fff", fontWeight: "bold" }}>Sloane Wright</span>
          </Navbar.Brand>
          <div className="d-flex flex-grow-1 justify-content-center position-absolute w-100">
            <Nav className="mx-auto">
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#experiences"
                className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('experiences')}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
          </div>
          <span className="navbar-text ms-auto" style={{ marginLeft: 'auto' }}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sloane-wright/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
              <a href="https://github.com/sloaneeliza" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="GitHub" />
              </a>
            </div>
            <a href="mailto:sloane.elizaw@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="vvd"><span>Let’s Connect</span></button>
            </a>
          </span>
        </Container>
      </Navbar>
    </Router>
  );
};
