/* LIBRERIAS DEPENDENCIAS */
import { useState } from 'react'

/* COMPONENTES */
import NavBar from './components/NavBar/NavBar';
/* import MiLista from './components/CartWidget/MiLista';
import Logo from './components/logo/Logo'; */
import ItemListContainer from './components/container/ItemListContainer';

/* ESTILOS */
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  
  return (
    <div>
      <NavBar/>
     {/*  <MiLista />
      <Logo/> */}
      <ItemListContainer greeting={' Hola soy ItemListContainer '} />
    </div>
  );  
}


export default App
