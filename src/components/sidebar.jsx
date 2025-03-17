import '../App.css'
import profileImg from   '../assets/perfil.jpg';
import locationIcon from '../assets/loc.png';
import emailIcon from    '../assets/email.png';
import githubIcon from   '../assets/github.png';

function Sidebar() {
  return (
    <>
      <nav>
        <img className='FotoDePerfil' src={profileImg} alt="Foto de perfil" />
        <h2>Fábio Filho</h2>
        <h3 className="DescricaoSidebar">
          Graduando em Sistemas de Informação na Universidade Federal de Pernambuco.
        </h3>
        <ul className='container'> 
          <li>
            <a className='BotaoNav' href="#">
              <img className="ImagemSidebar" src={locationIcon} alt="Ícone de localização" /> Centro de Informática, UFPE
            </a>
          </li>
          <li>
            <a className='BotaoNav' href="#">
              <img className="ImagemSidebar" src={emailIcon} alt="Ícone de email" /> fabio.filho@ufpe.br
            </a>
          </li>
          <li>
            <a className='BotaoNav' href="https://github.com/FabinhoFarias" target="_blank" rel="noopener noreferrer">
              <img className="ImagemSidebar" src={githubIcon} alt="Ícone do GitHub" /> Fabinho Farias
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Sidebar;
