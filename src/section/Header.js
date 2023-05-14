import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GiSpaceShuttle } from "react-icons/gi";
import "./header.css";

function Header() {
  return (
    <nav>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link className="link" to="/">
              <div className="title">
                <GiSpaceShuttle />
                <h2>Space~X</h2>
              </div>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="link" to="/launch">
                <h5>LAUNCHES</h5>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/rockets">
                <h5>ROCKETS</h5>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </nav>
  );
}

export default Header;
