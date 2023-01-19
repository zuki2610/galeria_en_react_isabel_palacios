import React from 'react';
import '../App.css';
import Header from './Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Password() {
  return (
    <>
    <div className="Container bg-dark pe-5 ps-5 pt-5 pb-5">
    <Header />
    <h1 className="text-light">Iniciar Sesión</h1>
    <Form className="text-light bg-dark password pe-5 ps-5 pt-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type="email" placeholder="Escribe tu correo aquí" />
        <Form.Text className="text-muted">
          Nunca compartiremos tus datos con alguien más.<br/> 
          "No te preocupes, solo yo te Stalkearé"
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Isabel es la mejor" />
      </Form.Group>
      <Button variant="secondary" type="submit" className="button1"> Entrar </Button>
    </Form>
    </div>
    </>
  );
}
export default Password;

    