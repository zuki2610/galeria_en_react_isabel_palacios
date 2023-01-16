import React from 'react';
import '../App.css';
import Header from './Header';
import Cards from './Cards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function Productos() {
    const contenido =   [
      { 
         id: "1",
         nombre: "Escudo Capitan America",
         imagen: "/assets/img/escudo.png",
         url: "https://simple.ripley.cl/figura-de-accion-escudo-falcon-capitan-america-legends-series-mpm00066126514?s=mdco"
      },

      {
        id: "4",
        nombre: "Guantelete de Tony Stark",
        imagen: "/assets/img/guantetony.png",
        url: "https://simple.ripley.cl/guante-electronico-hasbro-marvel-ironman-2000385310044p?color_80=rojo&s=mdco"
       },
        {
          id: "5",
          nombre: "Casco de Ironman",
          imagen: "/assets/img/helmet.png",
          url: "https://simple.ripley.cl/casco-iron-man-avengers-mpm00006358710?s=mdco"
        },
        {
          id: "6",
          nombre: "Funko Loki",
          imagen: "/assets/img/loki.png",
          url: "https://simple.ripley.cl/pop-loki-pop-6-mpm00060171410?s=mdco"
        },
      ];
      return (
        <div className="App bg-dark"> 
       <Header titulo = "Donde podrás comprar los mejores juguetes para ti" />
    <Container fluid className="productos">
         <Row key="1">{ 
           contenido.map((item) => {
              return <Col key={item.id}><Cards key={item.id} nombre={item.nombre} imagen={item.imagen} url={item.url} /></Col>
            }
          )}
          </Row>
          </Container>
        </div>
      );
    }
    
    export default Productos;
    