import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

function Footer() {
  return (
    <Accordion id="footer" defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>About Us</Accordion.Header>
        <Accordion.Body>
          Tienda de Juguetes de Marvel, donde encontraras el link ideal para comprar directamente los mejores artículos de colección con temática de Marvel 
          Comics. 
<br/> 
Creado con amor por Isabel Palacios 2023
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default Footer;