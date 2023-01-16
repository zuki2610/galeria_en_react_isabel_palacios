import React from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
    const {nombre, imagen, url, id} = props;
    return (
        <>
    <Card key={id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" href={url}>Comprar</Button>
      </Card.Body>
    </Card>
    </>
    );
}
export default Cards;