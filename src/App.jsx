/* LIBRERIAS DEPENDENCIAS */
import { useState } from 'react'
/* import { BrowserRouter, Routes, Route } from 'react-router-dom'*/

/* COMPONENTES */
import NavBar from './components/NavBar/NavBar';
/* import MiLista from './components/CartWidget/MiLista';
import Logo from './components/logo/Logo'; */
import ItemListContainer from './components/container/itemListContainer/ItemListContainer';

/* ESTILOS */
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  
  return (
        <div className=''>
          <NavBar />       
          <ItemListContainer />
      </div>
  );  
}

export default App;