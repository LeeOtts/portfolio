import { Col, Row, Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
//import VideoCamera from '../app/assets/img/videocamera.png';
import VideoEditing from '../app/assets/img/videoediting.png';

const VideographyPage = () => {
    return (
        <Container>
            <SubHeader current="Videography" />
            <Row className="row-content">
                <Col>
                    <h1>Video Editing</h1>
                    <p>For editing I use Adobe Premier, Adobe After Effects, Adobe Audition and other specialized software to deliver high quality results. Check out some of my work below</p>
                </Col>
                <Col>
                    <img src={VideoEditing} alt='screenshot during the editing process ' className='image' width='500rem'/>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <h2 style={{ textAlign: "center", padding: "2rem" }}>Videos</h2>
                </Col>
            </Row>
            {/* Video Row 1 */}
            <Row>
                <Col style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* Friends Promo */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SeFF7zP9zuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* Zombie Promo */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EkaVN7wD3uU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
            {/* Video Row 2 */}
            <Row>
                <Col style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* MidSouth Comedy Fest Promo */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/FewUBF8kjtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* Archer Promo */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/o1TCQs_Y72A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>

            {/* Video Row 3 */}
            <Row>
                <Col style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* Ben Abney Music Video */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LFIYsC7iRt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* Jay WhiteCotton HighCotton Promo */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YNI72Oyf2yE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>

            {/* Video Row 4 */}
            <Row>
                <Col style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* July Comedy Promo */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/N_PuqDNGeBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                </Col>
                <Col style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* It worked for MTV Promo */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KD6iKntDdsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                </Col>
            </Row>



        </Container>
    );
};

export default VideographyPage;