import './App.css';
function App() {
  return (
    <>
    <h1> Bem-vindo ao site </h1>

    <div className="App" class="container">
      <form>
        {/* NOME, DATA, IMAGEM E DESCRIÇÃO */}
        <div>
          <label htmlFor="nome" > Nome do evento </label>
          <input id="nome" type="text"/>
        </div>

        <div>
          <label htmlFor="data" > Data do evento </label>
          <input id="data" type="text"/>
        </div>

        <div>
          <label htmlFor="descricao" > Descrição </label>
          <input id="descricao" type="text"/>
        </div>

        <div>
          <label htmlFor="imagem" > Selecione uma imagem </label>
          <input id="imagem" type="file"/>
        </div>

        <button> Cadastrar </button>
      </form>

      <div className="conteiner-eventos">

      </div>
    </div>
    </>
  );
}

export default App;