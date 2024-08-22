import { Col } from "react-bootstrap";

export const ProjectCard = ({title, company, description, date, link}) => {
    return(
        <Col sm={6} md={4}>
            <div className="exp-imgbx">
                <div className="exp-txtx">
                    <h4>{title}</h4>
                    <h3>{company}</h3>
                    <span>{description}</span>
                    <h4> </h4>
                    <span><p1>{date}</p1></span>
                </div>
            </div>
        </Col>
    )
}
