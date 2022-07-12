import { Col, Row, Container } from "reactstrap";
import SubHeader from "../components/SubHeader";




const PhotographyPage = () => {
    return (
        <Container>
            <SubHeader current="Photography" />
            <Row className="row-content">
                <Col sm="6">
                    <h1>Photography</h1>
                    <p>Working on a photo gallery</p>
                </Col>
            </Row>
        </Container>
    );
};

export default PhotographyPage;
