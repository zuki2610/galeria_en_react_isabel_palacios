import React from 'react';
import '../App.css';
import Header from './Header';
import Image from 'react-bootstrap/Image';


function Home()  {
return (
    <>
     <div className="App bg-dark"> 
    <Header titulo="Donde encontrarás los mejores juguetes y accesorios de Marvel Comics para ti"/>
    <Image src="/assets/img/Logo1.png"/>
    </div>
    </>
)

}
export default Home;