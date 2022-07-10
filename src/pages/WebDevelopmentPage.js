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
            <Row className="row-content">
                <Col sm="6">
                    <h1>Web Development</h1>
                    <p>Starting off setting small business's up with a WordPress site to expand brand awareness and set up a e-commerce site. Wanting to build on my years of WordPress experience I enrolled in and graduated from NuCamp's "Web Development Fundamentals" and "Backend, SQL, and DevOps with Python". Currently I am enrolled in their "Full Stack Web + Mobile Development" with plans to graduate September 2022. </p>
                </Col>
                <Col>
                    <img width='300px' src={CodingWithWhiskey} alt='Lee and his rescue pup, Whiskey' className='image' />
                </Col>
            </Row>
            <Row className="row-content">
                <Col>
                    <h2 style={{ textAlign: "center", paddingBottom: "2rem" }}>Rush Hemp Farms</h2>
                    <a href="https://rushhempfarms.com">
                        <img width='500px' src={RushHempFarms} alt='Rush Hemp Farms WordPress site' className='image' />
                    </a>
                </Col>
                <Col>
                    <h2 style={{ textAlign: "center", paddingBottom: "2rem" }}>MidSouth HempFest</h2>
                    <a href="https://midsouthhempfest.com">
                        <img width='500px' src={MSHF} alt='MidSouth HempFest WordPress site' className='image' />
                    </a>
                </Col>
            </Row>
            <hr />
            <Row className="row-content">
                <Col>
                    <h2 style={{ textAlign: "center", paddingBottom: "2rem" }}>NORML Memphis</h2>
                    <img width='500px' src={NORMLMEMPHIS} alt='NORML Memphis Wordpress site' className='image' />

                </Col>
                <Col>
                    <h2 style={{ textAlign: "center", paddingBottom: "2rem" }}>Broken Shooter</h2>
                    <a href="https://brokenshooter.com">
                        <img width='500px' src={BrokenShooter} alt='Broken Shooter Wordpress site' className='image' />
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default WebDevelopmentPage;