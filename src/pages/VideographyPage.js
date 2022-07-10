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
                    <img src={VideoEditing} alt='screenshot during the editing process ' className='image' />
                </Col>
            </Row>
            <hr />
            {/* Video Row 1 */}
            <Row className="row-content">
                <Col >
                    {/* Friends Promo */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SeFF7zP9zuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col>
                    {/* Zombie Promo */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EkaVN7wD3uU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
            <hr />
            {/* Video Row 2 */}
            <Row className="row-content">
                <Col>
                    {/* MidSouth Comedy Fest Promo */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/FewUBF8kjtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col>
                    {/* Archer Promo */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/o1TCQs_Y72A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>

            <hr />
            {/* Video Row 3 */}
            <Row className="row-content">
                <Col>
                    {/* Ben Abney Music Video */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LFIYsC7iRt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col>
                    {/* Jay WhiteCotton HighCotton Promo */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YNI72Oyf2yE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>

            <hr />

            {/* Video Row 4 */}
            <Row className="row-content">
                <Col>
                    {/* July Comedy Promo */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/N_PuqDNGeBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col>
                    {/* It worked for MTV Promo */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KD6iKntDdsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>



        </Container>
    );
};

export default VideographyPage;