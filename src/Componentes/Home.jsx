import React from 'react';
import '../App.css';
import Header from './Header';
import Image from 'react-bootstrap/Image';
import Menu from './Menu';
import Footer from './Footer';



const Home = () => {
    return (
        <>
            <Menu isLogin={false} />
            <div className="home App bg-dark p-5">
                <div className="marvel">
                    <Header titulo="Donde encontrarás los mejores juguetes y accesorios de Marvel Comics para ti" />
                    <Image className="p-5" src="./assets/img/Logo1.png" />
                </div>
                <Footer />
            </div>
        </>
    )

}
export default Home;