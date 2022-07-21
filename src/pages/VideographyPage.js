import { Col, Row, Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import VideoCamera from '../app/assets/img/videocamera.png';
import FilmEditIcon from '../app/assets/img/film-editing_white.png';
import LiveIcon from '../app/assets/img/live_white.png';
import MicrophoneIcon from '../app/assets/img/microphone_white.png';
import CameraIcon from '../app/assets/img/camera_white.png';


const VideographyPage = () => {
    return (
        <Container>
            <SubHeader current="Videography" />
            <Row className="row-content">
                <Col>
                    <h1>Videography</h1>
                    <p>I got into videography around the same time I got into photography. It was very common for me to work an event solo where I would set up the video cameras, check audio levels, and then move to a DSLR and start snapping pictures of the event or show. </p>
                </Col>
                <Col>
                    <img src={VideoCamera} alt='screenshot during the editing process ' className='image' width='500rem' />
                </Col>
            </Row>

            <hr />

            <Row className="icon-background row-content container-fluid ">
                <Col md='10' lg='3'>
                    <h2>Camera</h2>
                    <img src={CameraIcon} alt='video camera icon ' width='250rem' style={{ alignSelf: 'center' }} />
                    <p>Canon Video Camera for extended recordings, Canon SLR, GoPro Hero, and a DJI drone always ready to catch the perfect shot</p>
                </Col>
                <Col md='10' lg='3'>
                    <h2>Audio</h2>
                    <img src={MicrophoneIcon} alt='microphone icon ' width='250rem' style={{ alignSelf: 'center' }} />
                    <p>RodeCaster Pro, Rode Shotgun Mic, Rode Lapel Mic and Reciever, Zoom Audio Recorder with Adobe Audition to blend and tweak audio to perfection.</p>
                </Col>
                <Col md='10' lg='3'>
                <h2>Streaming</h2>
                    <img src={LiveIcon} alt='streaming icon ' width='250rem' style={{ alignSelf: 'center' }}/>
                    <p>When streaming you got one shot to get it right. I use OBS Software, Laptop, RGB Lights, Rode Lapel and Shotgun mics, and a StreamDeck to help with streaming production.</p>
                </Col>
                <Col md='10' lg='3'>
                <h2>Editing</h2>
                    <img src={FilmEditIcon} alt='editing icon ' width='250rem' style={{ alignSelf: 'center' }} />
                    <p>Adobe Creative Cloud products such as Adobe Premiere Pro and After Effects for video. Adobe Audition for sound</p>
                </Col>
            </Row>
            <hr />


            {/* Video Section */}
            <Row>
                <Col>
                    <h2 style={{ textAlign: "center", padding: "2rem" }}>Videos</h2>
                </Col>
            </Row>
            {/* Video Row 1 */}
            <Row>
                <Col md='12' lg='6' style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* Friends Promo */}
                    <iframe width="560rem" height="315rem" src="https://www.youtube.com/embed/SeFF7zP9zuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col md='12' lg='6' style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* Zombie Promo */}
                    <iframe width="560rem" height="315rem" src="https://www.youtube.com/embed/EkaVN7wD3uU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
            {/* Video Row 2 */}
            <Row>
                <Col md='12' lg='6' style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* MidSouth Comedy Fest Promo */}
                    <iframe width="560rem" height="315rem" src="https://www.youtube.com/embed/FewUBF8kjtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col md='12' lg='6' style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* Archer Promo */}
                    <iframe width="560rem" height="315rem" src="https://www.youtube.com/embed/o1TCQs_Y72A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>

            {/* Video Row 3 */}
            <Row>
                <Col md='12' lg='6' style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* Ben Abney Music Video */}
                    <iframe width="560rem" height="315rem" src="https://www.youtube.com/embed/LFIYsC7iRt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col md='12' lg='6' style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* Jay WhiteCotton HighCotton Promo */}
                    <iframe width="560rem" height="315rem" src="https://www.youtube.com/embed/YNI72Oyf2yE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>

            {/* Video Row 4 */}
            <Row>
                <Col md='12' lg='6' style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* July Comedy Promo */}
                    <iframe width="560rem" height="315rem" src="https://www.youtube.com/embed/N_PuqDNGeBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                </Col>
                <Col md='12' lg='6' style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    {/* It worked for MTV Promo */}
                    <iframe width="560rem" height="315rem" src="https://www.youtube.com/embed/KD6iKntDdsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                </Col>
            </Row>



        </Container>
    );
};

export default VideographyPage;