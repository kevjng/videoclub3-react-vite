import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import list from "../../images/list.svg";

const MiLista = () => {
  return (
    <div>
      <Nav>
        <img src={list} alt="Mi Lista" className="ms-5" />
        <NavDropdown title="Mi Lista" id="collasible-nav-dropdown">
          Este seria mi CartWidget, aca van a ir las peliculas seleccionadas👌
        </NavDropdown>
      </Nav>
    </div>
  );
}

export default MiLista
