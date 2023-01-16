import React from 'react';
import '../App.css';
import Header from './Header';
import Cards from './Cards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Productos() {
    const contenido =   [
      { 
         id: "1",
         nombre: "Escudo Capitan America",
         imagen: "/assets/img/escudo.png",
         url: "https://simple.ripley.cl/figura-de-accion-escudo-falcon-capitan-america-legends-series-mpm00066126514?s=mdco"
      },
      {
        id: "2",
        nombre: "Guantes de Hulk",
        imagen: "/assets/img/hulk.png",
        url: "https://simple.ripley.cl/juguete-punos-de-hulk-agarre-gamma-verde-marvel-hasbro-mpm00066126558?s=mdco"
     },
     {
      id: "3",
      nombre: "Guantelete de Thanos",
      imagen: "/assets/img/guantelete.png",
      url: "https://simple.ripley.cl/avengers-guante-electronico-thor-mpm00037422884?s=mdco"
    },
       ]
    const contenido2 =   [
      {
        id: "4",
        nombre: "Guantelete de Tony Stark",
        imagen: "/assets/img/guantetony.png",
        url: "https://simple.ripley.cl/guante-electronico-hasbro-marvel-ironman-2000385310044p?color_80=rojo&s=mdco"
       },
        {
          id: "5",
          nombre: "Juguete Armadura de Ironman",
          imagen: "/assets/img/armadura.png",
          url: "https://www.falabella.com/falabella-cl/product/16396701/Marvel-Avn-Ms-Monster-Dlx-Figure-Iron-Man/16396701"
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
    
         <Row key="1">{ 
           contenido.map((item) => {
              return <Col key={item.id}><Cards key={item.id} nombre={item.nombre} imagen={item.imagen} url={item.url} /></Col>
            }
          )}
          </Row>
          <Row key="2">{ 
           contenido2.map((item) => {
              return <Col key={item.id}><Cards key={item.id} nombre={item.nombre} imagen={item.imagen} url={item.url} /></Col>
            }
          )}
          </Row>
        </div>
      );
    }
    
    export default Productos;
    