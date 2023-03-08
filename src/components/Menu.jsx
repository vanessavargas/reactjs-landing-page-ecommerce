import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from "../assets/img/logotipo.svg";

export default function Menu() {
  return (
    <Navbar className='bg-light' variant="light" expand="md" widht="100%">
      <Container>
        <Navbar.Brand href="#home"><img id="logo" src={Logo} alt="Logotipo"  widht={80} height={80}
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='text-center justify-content-end'>
          <Nav className="justify-content-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#promocoes">Promoções</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
            <Nav.Link href=" " className='border rounded text-success color-success'>Solicite orçamento</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}