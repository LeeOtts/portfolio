import { Col, Row, Container } from "reactstrap";
import selfportrait from "../app/assets/img/self_portrait.jpg"
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
                    <img className="image" src={selfportrait} alt='Lee self portrait in backyard' />
                </Col>
                <Col>
                    <p>
                        I got into photography as a means to escape a couple of years after breaking my neck and back. It started off as astrophotography in my backyard with my telescope and that grew into stage, event, and magazine photography.
                    </p>
                    <p>
                        Once I started putting together WordPress sites for small businesses I got to pull out my cameras and lightbox for e-commerce product photography.
                    </p>
                </Col>

            </Row>
            <hr />
            <Row>
                <Col>
                    <h2 className="center row-content">Photo Gallery</h2>
                    <MasonryImageList />
                </Col>
            </Row>
        </Container>
    );
};

export default PhotographyPage;
