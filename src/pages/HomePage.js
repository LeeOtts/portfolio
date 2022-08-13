import { Col, Row, Container } from 'reactstrap';
import Memphis_Flyer_Logo from '../app/assets/img/memphis_flyer_logo.png';
import Click_Logo from '../app/assets/img/click_logo.png';
import Commercial_Appeal_Logo from '../app/assets/img/commercial_appeal_logo.png';
import Xray from '../app/assets/img/xray.jpg'
import HeadShot from '../app/assets/img/lee_headshot_blacksuit.jpg'

const HomePage = () => {
    return (
        <Container>

            <Row className='row-content'>
                <Col sm='12' lg='5'>
                    <img width='300rem' src={HeadShot} alt='Headshot of Lee in front of computer' className='headshot' />
                </Col>
                <Col sm='12' lg='7'>
                    <h2>
                        A little about me...
                    </h2>
                    <p>
                        Hey, y’all! My name is Lee and I am a web developer born and raised in Memphis, TN currently residing in Bartlett, TN with my wife and our kids, 2 cats, and 1 rescue pup named Whiskey.
                    </p>
                    <p>
                        I have several years of practical WordPress, e-commerce, and SEO experience freelancing for numerous small businesses. This website is using ReactJs. Wanting to build on my WordPress knowledge I am currently attending NuCamp’s <span style={{ fontWeight: 'bold' }}>“Full Stack Web + Mobile Development“</span>. I have completed their <span style={{ fontWeight: 'bold' }}>“Backend, SQL, and DevOps with Python”</span> and <span style={{ fontWeight: 'bold' }}>“Web Development Fundamentals”</span> courses. Feel free to check out some of my WordPress work <a href='https//:brokenshooter.com'>here</a>.
                    </p>
                </Col>

            </Row>
            <hr />
            <Row className='row-content'>

                <Col sm='12' lg='7'>

                    <p>
                        In 2012, I broke 8 vertebrae and had multiple surgeries to repair the damage.
                    </p>
                    <p>
                        I needed to find something to do, a means of escape, and that is how I found photography. I started in the backyard with astrophotography because that was about all I could physically do. Slowly as I healed, I began taking pictures of everyday life, and then a friend asked me to take some pictures. Next thing you know I have multiple cameras, boom mics, and wireless mics, and I built a computer to handle all that.
                    </p>
                    <p>
                        Next came trying to figure out what to call my business. It’s common for photographers to refer to themselves as shooters, even in the dictionary.
                    </p>
                </Col>
                <Col sm='12' lg='5' >
                    <img width='500rem' src={Xray} alt='xray after my 2017 surgery' className='image' />

                </Col>
            </Row>
            <hr />
            <Row className="row-content">
                <h1 style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    My work has been featured in
                </h1>

                <Col md='12' lg='4' className='center'>
                    <a href='https://www.myclickmag.com/' target='_blank' rel="noreferrer">
                        <img width='350rem' src={Click_Logo} alt='click magazine logo' />
                    </a>
                </Col>

                <Col md='12' lg='4' className='center' style={{ padding: "3rem" }}>
                    <a href='https://www.memphisflyer.com/' target='_blank' rel="noreferrer">
                        <img width='350rem' src={Memphis_Flyer_Logo} alt='memphis flyer logo' />
                    </a>
                </Col>

                <Col md='12' lg='4' className='center'>
                    <a href='https://www.commercialappeal.com/' target='_blank' rel="noreferrer">
                        <img width='350rem' src={Commercial_Appeal_Logo} alt='commercial appeal logo' />
                    </a>
                </Col>

            </Row>
        </Container>
    );
};

export default HomePage;