import { useState } from 'react'
import './App.css'



function Header() {
  

  return (
    <div className='header'>
      <header>
        <button>Fábio Filho</button>
          
          <ul>
            <li>Ensino</li>
            <li>Projetos</li>
          </ul>

      </header>
    </div>
  )
}
https://github.com/FabinhoFarias/PessoalPageReact
function App() {
  

  return (
    <>
      <Header/>      
    </>
  )
}

export default App
