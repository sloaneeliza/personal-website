import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Computer Science Student", "Cybersecurity Analyst", "Web Developer", "Software Engineer", "App Developer", "Data Analyst" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 50);  // Typing and deleting speed
    const period = 2000;  // Pause duration

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };  
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        setDelta(100 - Math.random() * 50);  // Set delta for both typing and deleting

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100 - Math.random() * 50);  // Reset delta after deleting
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{`Hi! I'm Sloane,`} <span className="wrap">{text}</span></h1>
                        <p>I am currently a junior at Belmont University. I am majoring in computer science with a minor in cybersecurity. Although cybersecurity is my main focus, I also enjoy software development!</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
