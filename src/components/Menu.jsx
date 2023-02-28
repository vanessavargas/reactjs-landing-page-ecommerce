import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from "../assets/img/logotipo.svg";

export default function Menu() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><img id="logo" src={Logo} alt="Logotipo"  widht={80} height={80}
        /></Navbar.Brand>
          <Nav className="me-auto text-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#promocoes">Promoções</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}