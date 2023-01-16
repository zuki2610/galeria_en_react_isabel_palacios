import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Componentes/Menu';
import Footer from './Componentes/Footer';
import Productos from './Componentes/Produtos';
import Home from './Componentes/Home';


function App() {
  return (
  <BrowserRouter>
  <Menu />
  <main>
    <Routes>
        <Route path='/productos' element={<Productos />} />
        <Route path='/' element={<Home />} />
    </Routes>
  </main>
  <Footer />
</BrowserRouter>
)
}

export default App;
