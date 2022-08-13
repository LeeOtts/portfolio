import { Col, Row, Container } from "reactstrap";

import MasonryImageList from "../components/Gallery";


const PhotographyPage = () => {
    return (
        <Container>
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
