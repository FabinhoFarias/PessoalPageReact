import '../App.css';
import '../CSScomponents/conteudos.css';
import Icone from '../assets/iconeLivro.png';
import jsonTeste from '../assuntos.js';

function Conteudo({ assunto }) {
  return (
    // implementar tema branco
    <div className='ContainerPrincipal'>
      <img src={Icone} alt="Ícone do Assunto" />
      <div className='ConteudoInfo'>
        <h4>{assunto.NomeAssunto ?? "Sem Nome"}</h4>
        <p>{assunto.Descricao ?? "Descrição não disponível."}</p>
      </div>
      <div className='ContainerBotoes'>
        {assunto.leitura && (
          <button onClick={() => window.open(assunto.leitura, "_blank")}>
            Leitura
          </button>
        )}
        {assunto.video && (
          <button onClick={() => window.open(assunto.video, "_blank")}>
            Vídeo
          </button>
        )}
      </div>
    </div>
  );
}

function MacroAssunto({ nome, assuntos }) {
  return (
    <>
      <h3>{nome}</h3>
      {Object.keys(assuntos).map((key) => {
        const assunto = assuntos[key];
        return <Conteudo key={key} assunto={assunto} />;
      })}
    </>
  );
}

function Conteudos() {
  return (
    <main>
      <h2>Conteúdos</h2>
      {Object.keys(jsonTeste).map((macroAssuntoKey) => {
        const macroAssunto = jsonTeste[macroAssuntoKey];
        return (
          <MacroAssunto
            key={macroAssuntoKey}
            nome={macroAssunto.NomeCorreto}
            assuntos={macroAssunto.Assuntos}
          />
        );
      })}
    </main>
  );
}

export default Conteudos;
