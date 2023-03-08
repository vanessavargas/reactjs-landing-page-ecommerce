import { Button, Container, Nav, Navbar } from 'react-bootstrap';

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
            <Button variant='success'className='btnOrcamento'>Solicite orçamento</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}