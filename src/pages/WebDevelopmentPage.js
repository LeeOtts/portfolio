import { Col, Row, Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import NORMLMEMPHIS from '../app/assets/img/normlmemphis.png';
import RushHempFarms from '../app/assets/img/rushhempfarms.png';
import MSHF from '../app/assets/img/midsouthhempfest.png';
import BrokenShooter from '../app/assets/img/brokenshooter.png';
import CodingWithWhiskey from '../app/assets/img/coding_with_whiskey.jpg';

const WebDevelopmentPage = () => {
    return (
        <Container>
            <SubHeader current="Web Development" />
            <Row>
                <Col>
                <h2>Web Development</h2>
                </Col>
            </Row>
            <Row className="row-content">
                <Col md="12" lg='7'>
                    
                    <p>
                        I got into Web Developing while working security at a local private highschool around 2017. From there an idea was born and I started to work on making it a reality. After some trial and error I pieced together a working prototype using a variety of WordPress plugins. It worked but was slow and bloated.
                    </p>
                    <p>
                        Unfortunately, I had a ruptured disc and that required another surgery with a long recovery including physical therapy and rest. It ended up being the one that helped relieve a lot of the pain I had every day but it did stop the development of that site
                    </p>
                    <p>
                        After about 6 months of physical therapy I felt well enough and I started a non-profit. I used my newfound wordpress skills to build the nonprofit's website. After some success with NORML Memphis that led to some small business's in the hemp industry to reach out and inquire about me making them a WordPress site.
                    </p>
                    <p>
                        Wanting to build on my years of WordPress experience I enrolled in and graduated from NuCamp's "Web Development Fundamentals" and "Backend, SQL, and DevOps with Python". Currently I am enrolled in their "Full Stack Web + Mobile Development" with plans to graduate September 2022.
                    </p>
                </Col>
                <Col md='12' lg='5'>
                    <img width='300rem' style={{  marginLeft: "2rem" }} src={CodingWithWhiskey} alt='Lee and his rescue pup, Whiskey' className='image' />
                </Col>
            </Row>
            <hr />
            <Row className="row-content">
                <h2 style={{ textAlign: "center", paddingBottom: '2rem' }}>My Portfolio</h2>
                <Col style={{ textAlign: "center" }} >
                    <h3 style={{ textAlign: "center", paddingBottom: "2rem" }}>Rush Hemp Farms</h3>
                    <a href="https://rushhempfarms.com" target='_blank' rel="noreferrer">
                        <img width='500rem' src={RushHempFarms} alt='Rush Hemp Farms WordPress site' className='image' style={{ textAlign: "center", paddingBottom: "2rem" }} />
                    </a>
                </Col>
                <Col style={{ textAlign: "center" }}>
                    <h3 style={{ textAlign: "center", paddingBottom: "2rem" }}>MidSouth HempFest</h3>
                    <a href="https://midsouthhempfest.com" target='_blank' rel="noreferrer">
                        <img width='500rem' src={MSHF} alt='MidSouth HempFest WordPress site' className='image' style={{ textAlign: "center", paddingBottom: "2rem" }} />
                    </a>
                </Col>
            </Row>
            <Row className="row-content">
                <Col style={{ textAlign: "center" }}>
                    <h3 style={{ textAlign: "center", paddingBottom: "2rem" }}>NORML Memphis</h3>
                    <img width='500rem' src={NORMLMEMPHIS} alt='NORML Memphis Wordpress site' className='image' style={{ textAlign: "center", paddingBottom: "2rem" }} />

                </Col>
                <Col style={{ textAlign: "center" }}>
                    <h3 style={{ textAlign: "center", paddingBottom: "2rem" }}>Broken Shooter</h3>
                    <a href="https://brokenshooter.com" target='_blank' rel="noreferrer">
                        <img width='500rem' src={BrokenShooter} alt='Broken Shooter Wordpress site' className='image' style={{ textAlign: "center", paddingBottom: "2rem" }} />
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default WebDevelopmentPage;