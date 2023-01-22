import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Componentes/Footer';
import Productos from './Componentes/Produtos';
import Home from './Componentes/Home';
import Password from './Componentes/Password';


function App() {
  return (
  <BrowserRouter>
  
  <main>
    <Routes>
        <Route path='/galeria_en_react_isabel_palacios/productos' element={<Productos />} />
        <Route path='/galeria_en_react_isabel_palacios/' element={<Password />} />
        <Route path='/galeria_en_react_isabel_palacios/home' element={<Home />} />
    </Routes>
  </main>
</BrowserRouter>
)
}

export default App;
