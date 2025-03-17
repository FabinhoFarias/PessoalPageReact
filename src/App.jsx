import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Main from './components/main.jsx'
import Sidebar from './components/sidebar.jsx'
import Conteudos from './components/conteudos.jsx'

// https://github.com/FabinhoFarias/PessoalPageReact
function App() {
  return (
    <>
      <Header/>
      <div className='containerPrincipal'>
        <Sidebar/>
        {/* <Main/> */}
        <Conteudos/>

      </div>
    </>
  );
}
export default App
