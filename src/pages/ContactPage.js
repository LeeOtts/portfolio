import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact Me' />

            {/* <Row className='row-content align-items-center'>
                <Col sm='4'>
                    <h5>Contact Me</h5>
                </Col>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+1-901-305-7070'
                    >
                        <i className='fa fa-phone' /> 1-901-305-7070
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:me@leeotts.com'
                    >
                        <i className='fa fa-envelope-o' /> me@leeotts.com
                    </a>
                </Col>
            </Row> */}

            <Row className='row-content'>
                <Col xs='12'>
                </Col>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;