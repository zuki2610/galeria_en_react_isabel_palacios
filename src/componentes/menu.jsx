import React from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Menu = () => {
return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/galeria_en_react_isabel_palacios/home">Toy Store</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/galeria_en_react_isabel_palacios/productos">Productos</Nav.Link>
          <Nav.Link href="#footer">About Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
</>
);

}

export default Menu;