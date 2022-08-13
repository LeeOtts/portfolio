import { Col, Row, Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import ThingiverseLogo from '../app/assets/img/thingiverse_logo.png';
import PrintablesLogo from '../app/assets/img/printables_logo.png';
import LackEnclosure from '../app/assets/img/lack_enclosure.jpg';
import GiftForWife from '../app/assets/img/gift_for_wife.jpg';
import GiftForMomLit from '../app/assets/img/gift_for_mom_lit.jpg';
import Grogu from '../app/assets/img/babyyoda.jpg';
import HempCartHolder from '../app/assets/img/hemp_holder.jpg';
import BowlHolder from '../app/assets/img/bowlholder.jpg';
import MandoAndChild from '../app/assets/img/jesus_mando.jpg';

const ThreeDPrintingPage = () => {
    return (
        <Container>
            <SubHeader current="3d Printing" />
            <Row className="row-content">
                <Col>
                    <h2>3D Printing</h2>
                    <p>Late 2021 I bought a Creality Ender 3v2 3d printer. I started with just downloading a STL file and printing that but slowly through creating my own remixes of several parts I was able to create my own file from scratch. The company I work for needed some more bowl holders and instead of buying them I designed a custom one with shop name and printed that. Luckily I had a couple weeks to learn Fusion 360 uninterupted as I was quarantined with covid those 2 weeks. </p>

                </Col>
            </Row>
            <Row className="row-content">
                <Col xl='6'>
                    <h2>Lack Enclosure</h2>
                    <p>I wanted a way to enclose my printer. I bought 2 Ikea Lack tables, printed some parts, and had smoke acrylic panels cut to shape</p>
                    <img width='500px' src={LackEnclosure} alt='Lack Enclosure' className='image' />
                </Col>
                <Col>
                    <h2>Baby Yoda</h2>
                    <p>I love Star Wars and I am a little obsessed with Baby Yoda</p>
                    <img width='500px' src={Grogu} alt='Baby Yoda' className='image' />
                </Col>
            </Row>
            <hr />
            <Row className="row-content">
                <Col>
                    <h2>14mm Bowl Holder</h2>
                    <p> This was my first design from scratch. When I had COVID in January 2022 I used the time out of work to learn Fusion 360. </p>
                    <img width='500px' src={BowlHolder} alt='14mm bowl holder' className='image' />
                </Col>
                <Col>
                    <h2>Hemp Cart Holder</h2>
                    <p> Printed with hemp bio mass plastic</p>
                    <img width='500px' src={HempCartHolder} alt='Cart and battery holder made from hemp' className='image' />
                </Col>
            </Row>
            <hr />
            <Row className="row-content">
                <h2>Lithophanes</h2>
                <p>3D printed lithophane images are created by the different thickness in the plastic  </p>
                <Col xl='4'>
                    <h2>Gift for wife</h2>
                    <p>Designed this one from scratch</p>
                    <img width='400px' src={GiftForWife} alt='Lithophane for wife' className='image' />
                </Col>
                <Col xl='4'>
                    <h2>Gift for mom</h2>
                    <p>Photo of mom, son, and me at my wedding</p>
                    <img width='400px' src={GiftForMomLit} alt='Lithophane for mom' className='image' />
                </Col>
                <Col xl='4'>
                    <h2>Mando and Child</h2>
                    <p>My first lithophane. Mando and the Child</p>
                    <img width='400px' src={MandoAndChild} alt='Mando and Grogu' className='image' />
                </Col>
            </Row>
            <hr />
            <Row className="row-content">
                <h1 style={{ textAlign: "center", paddingBottom: "2rem" }}>Check out more of my designs</h1>
                <Col>
                    <a href="https://www.thingiverse.com/leeotts/designs" target='blank'>
                        <img width='500px' src={ThingiverseLogo} alt='Thingiverse Logo' />
                    </a>
                </Col>
                <Col>
                    <a href="https://www.printables.com/social/182421-leeotts/about" target='blank'>
                        <img width='500px' src={PrintablesLogo} alt='Printables Logo' />
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default ThreeDPrintingPage;