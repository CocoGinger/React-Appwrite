import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'



const Header = () => {
    return (
        <header className='p-3'>

            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className='rounded-lg'>
                <Container>
                    <Navbar.Brand className='font-weight-bolder font-italic'>QCB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className='font-weight-bolder font-bold'> Home</Nav.Link>
                            <Nav.Link className='font-weight-bolder font-bold'> Services</Nav.Link>
                            <Nav.Link className='font-weight-bolder font-bold'> About Us</Nav.Link>
                            <Nav.Link className='font-weight-bolder font-bold'> Blog</Nav.Link>
                            <Nav.Link className='font-weight-bolder font-bold'> Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          

        </header>
    )
}

export default Header
