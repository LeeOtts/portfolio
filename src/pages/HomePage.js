import { Col, Row, Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import Memphis_Flyer_Logo from '../app/assets/img/memphis_flyer_logo.png';
import Click_Logo from '../app/assets/img/click_logo.png';
import Commercial_Appeal_Logo from '../app/assets/img/commercial_appeal_logo.png';
import Xray from '../app/assets/img/xray.jpg'
import ZombieLee from '../app/assets/img/zombie_lee.jpg'

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <Row className='row-content'>
                <Col>
                    <h1>
                        Hey Y'all!
                    </h1>
                    <p>
                        My name is Lee Otts. I was born and raised in Memphis, Tennessee. I just married the love of my life January 2022. We have 3 kids, 2 cats, and 1 dog. I am currently learning to program through NuCamp. The picture to the right was from a video shoot. Check out the final video under the "Videography" tab.
                    </p>
                </Col>
                <Col>
                    <img width='500rem' src={ZombieLee} alt='dressed as a zombie for video shoot' className='image' />
                </Col>
            </Row>

            <Row className='row-content'>
                <Col sm='6'  style={{ textAlign: "center", marginRight: "3rem" }}>
                    <img width='500rem' src={Xray} alt='xray after my 2017 surgery' className='image' />

                </Col>
                <Col>
                    <h3>A little more about me…</h3>
                    <p>
                        In 2012, I broke 8 vertebrae and had multiple surgeries to repair the damage. Luckily I can walk.

                        I needed to find something to do, a means of escape, and that is how I found photography. I started in the backyard with astrophotography because that was about all I could physically do. Slowly as I healed I started taking pictures of everyday life and then a friend asked me to take some pictures. Next thing you know I have multiple cameras, boom mics,  wireless mics, and built a computer to handle all that.
                    </p>
                </Col>
            </Row>
            <hr />
            <Row className="row-content">
                <h1 style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    My work has been featured in
                </h1>

                
                <Col xs='12' md='12' xl='4' style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    <a href='https://www.commercialappeal.com/'>
                        <img width='350rem' src={Commercial_Appeal_Logo} alt='commercial appeal logo' />
                    </a>
                </Col>
                <Col xs='12' md='12' xl='4'style={{ textAlign: "center", paddingBottom: "2rem", paddingTop: "2rem" }}>
                    <a href='https://www.memphisflyer.com/'>
                        <img width='350rem' src={Memphis_Flyer_Logo} alt='memphis flyer logo' />
                    </a>
                </Col>
                <Col xs='12' md='12' xl='4' style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    <a href='https://www.myclickmag.com/'>
                        <img width='350rem' src={Click_Logo} alt='click magazine logo' />
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;