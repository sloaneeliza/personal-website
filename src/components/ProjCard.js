import { Col } from "react-bootstrap";
import GitHub from "../assets/img/Github.svg";

export const ProjCard = ({title, description, imgUrl, link}) => {
    return(
        <Col sm={6} md={4}>
            <div className ="proj-imgbx">
                <img src ={imgUrl} />
                <div className ="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <h4> </h4>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} alt="GitHub" className="github-icon" /></a>
                </div>
            </div>
        </Col>
    )
}
