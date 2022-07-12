import { Container, Row, Col } from "reactstrap";
//import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    {/* <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/webdev'>Web Dev</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Photography</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Videography</Link>
                            </li>
                            <li>
                                <Link to='/threedprinting'>3D Printing</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </Col> */}
                    <Col className='row-content' style={{ textAlign: "center", paddingBottom: "2rem" }}>
                        <h5>Find Me</h5>
                        <a
                            className='btn btn-social-icon btn-github'
                            href='http://github.com/leeotts' target='blank'
                        >
                            <i className='fa fa-github' />
                        </a>{'  '}
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/leeotts' target='blank'
                        >
                            <i className='fa fa-instagram' />
                        </a>{'  '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/leeotts' target='blank'
                        >
                            <i className='fa fa-facebook' />
                        </a>{'  '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/leeotts' target='blank'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='https://www.youtube.com/channel/UC8KGfoPR656qaKOZWb53T8w' target='blank'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>

                </Row>
            </Container>

        </footer>
    )
}

export default Footer;