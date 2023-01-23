import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const Menu = (props) => {
	const { isLogin } = props;
	if (isLogin === false) {

		return (
			<>
				<Navbar bg="dark" variant="dark">
					<Container>
						<LinkContainer to="/galeria_en_react_isabel_palacios/home">
							<Navbar.Brand>Toy Store</Navbar.Brand>
						</LinkContainer>
						<Nav className="me-auto">
							<LinkContainer to="/galeria_en_react_isabel_palacios/home">
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/galeria_en_react_isabel_palacios/productos">
								<Nav.Link>Productos</Nav.Link>
							</LinkContainer>
							<Nav.Link href="#footer">About Us</Nav.Link>
							<LinkContainer to="/galeria_en_react_isabel_palacios/">
								<Nav.Link>Login</Nav.Link>
							</LinkContainer>
						</Nav>
					</Container>
				</Navbar>

			</>
		);

	}
}

export default Menu;