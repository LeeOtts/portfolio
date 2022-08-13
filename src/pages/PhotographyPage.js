import { Col, Row, Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import MasonryImageList from "../components/Gallery";


const PhotographyPage = () => {
    return (
        <Container>
            <SubHeader current="Photography" />
            <Row className="row-content">
                <Col sm="6">
                    <h2>Photography</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <MasonryImageList />
                </Col>
            </Row>
        </Container>
    );
};

export default PhotographyPage;
