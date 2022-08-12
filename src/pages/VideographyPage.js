import { Col, Row, Container } from "reactstrap";
import VideoCamera from '../app/assets/img/videocamera.png';
import FilmEditIcon from '../app/assets/img/film-editing_white.png';
import LiveIcon from '../app/assets/img/live_white.png';
import MicrophoneIcon from '../app/assets/img/microphone_white.png';
import CameraIcon from '../app/assets/img/camera_white.png';


const VideographyPage = () => {
    return (
        <Container>

            <Row>
                <Col>
                    <h2>Videography</h2>
                </Col>
            </Row>
            <Row className="row-content">
                <Col md='12' lg='6'>

                    <p>
                        I got into videography at the same time I got into photography. Bought my first video and DSLR at the same time. It was very common for me to work an event solo where I would set up the video cameras, check audio levels, and then move to a DSLR and start snapping pictures of the event or show. I got started with political event work then one event the MC also hosted comedy shows around Memphis. Next thing you know I am shooting and editing the monthly promos and the monthly event. This led to other local comedians reaching out and getting more gigs. Word got around and next thing you know I am editing music videos and short films as well. Nothing like seeing a project you worked on being projected in theaters and the drive in!
                    </p>
                </Col>
                <Col md='12' lg='6'>
                    <img src={VideoCamera} alt='screenshot during the editing process ' className='center image' width='500rem' />
                </Col>
            </Row>

            <hr />

            <Row className="icon-background row-content" style={{ position: '' }} >
                <Col md='10' lg='3'>
                    <h2>Camera</h2>
                    <img src={CameraIcon} alt='video camera icon ' width='250rem' className="center" />
                    <p>Canon XA20 Video Camera for extended recordings (most DLSRs have 20-30 minute continuous), Canon SLR, GoPro Hero, and a DJI drone always ready to catch the perfect shot. I also have RGB lights and white lights for the perfect lighting</p>
                </Col>
                <Col md='10' lg='3'>
                    <h2>Audio</h2>
                    <img src={MicrophoneIcon} alt='microphone icon ' width='250rem' className="center" />
                    <p>Audio is just as important as video. How many times have you watched a youtube video with poor audio and just stop halfway through because of it? My  usual equipment includes a RodeCaster Pro, Rode Shotgun Mic, Rode Lapel Mic and Receiver, Zoom Audio Recorder all being edited with Adobe Audition to blend and tweak audio to perfection.</p>
                </Col>
                <Col md='10' lg='3'>
                    <h2>Streaming</h2>
                    <img src={LiveIcon} alt='streaming icon ' width='250rem' className="center" />
                    <p>When streaming you got one shot to get it right. I use OBS Software, Laptop, RGB Lights, Rode Lapel and Shotgun mics, and a StreamDeck loaded with effects to help with the streaming production.</p>
                </Col>
                <Col md='10' lg='3' >
                    <h2 >Editing</h2>
                    <img src={FilmEditIcon} alt='editing icon ' width='250rem' className="center" />
                    <p >My primary editing software are from Adobe Creative Cloud. Such as Adobe Premiere Pro for editing. After Effects for motion graphics and effects. Once its all cut I work on the audio with Adobe Audition. A great video needs a great thumbnail and that is where Photoshop and Illustrator come in handy</p>
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