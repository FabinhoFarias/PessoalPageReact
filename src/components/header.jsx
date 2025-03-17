import '../App.css'

function Header() {
    return (
      <div className='header'>
        <header>
          <a>Fábio Filho</a>
            <ul>
              <li><button className='BotaoHeader' >Ensino</button></li>
              <li><button className='BotaoHeader' >Projetos</button></li>
            </ul>
        </header>
      </div>
    )
  }
export default Header;
