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
        <Route path='/galeria_en_react_isabel_palacios/productos' element={<Productos />} />
        <Route path='/galeria_en_react_isabel_palacios/' element={<Home />} />
        <Route path='/' element={<Home />} />
    </Routes>
  </main>
  <Footer />
</BrowserRouter>
)
}

export default App;
