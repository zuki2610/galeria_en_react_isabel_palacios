import React from 'react';
import '../App.css';
import Header from './Header';
import Image from 'react-bootstrap/Image';


function Home()  {
return (
    <>
     <div className="App bg-dark p-5">
    
    <Header titulo="Donde encontrarás los mejores juguetes y accesorios de Marvel Comics para ti"/>
    <Image className="p-5" src="./assets/img/Logo1.png"/>
  
    </div>
    </>
)

}
export default Home;