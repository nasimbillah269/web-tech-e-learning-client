import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log('error', error)
            })
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Web-Tect-E-Learning</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='text-decoration-none me-2 text-white' to="/courses">Course</Link>
                            <Link className='text-decoration-none me-2 text-white' to="/faq">Faq</Link>
                            <Link className='text-decoration-none me-2 text-white' to="/blog">Blog</Link>

                        </Nav>
                        <Nav>
                            {
                                user?.uid ? <Button onClick={handleLogOut} variant="light">LogOut</Button>
                                    :
                                    <>
                                        <Link to='/register' className='text-decoration-none mt-2 me-2 text-white'>Register</Link>
                                        <Link to='/login' className='text-decoration-none mt-2 text-white'>Login</Link>
                                    </>
                            }

                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user?.photoURL && <Image style={{ width: "40px", height: "40px" }} roundedCircle src={user?.photoURL}></Image>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;