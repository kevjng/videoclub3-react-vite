import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

import MiLista from "../CartWidget/MiLista";
import Logo from "../logo/Logo";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Series">Series</Nav.Link>
            <Nav.Link href="#Peliculas">Peliculas</Nav.Link>
            <Nav.Link href="#NovedadesPopulares">Novedades Populares</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <>
          <Dropdown className="">
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              Usuario
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1" active>
                Usuario 1
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Usuario 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Administrar Perfiles
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-4">Cuenta</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Centro de ayuda</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-6">Cerrar Sesion</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
        <MiLista />
      </Container>
    </Navbar>
  );
};

export default NavBar;
