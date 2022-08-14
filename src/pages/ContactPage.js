import { Container, Col, Row } from 'reactstrap';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <Row className='row-content'>
                <Col xs='12'>
                </Col>
                <Col md='10'>
                    <h2>Contact Form</h2>
                    <p>Still learning react and node so it doesn't work right now</p>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;