import './App.css';
import {Header} from '../components/Header'
import { EventCard } from '../components/EventCard';

let eventosEstaticos = [
  {
    id: 1,
    nome: "Protesto pelas férias de 3 meses",
    data: "SEX, 31/12/2023",
    img: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/09/PHO20210912064.jpg?w=876&h=484&crop=1"
  },
  {
    id: 2,
    nome: "Roda de conversa: Efeitos do Javascript na cognição",
    data: "SAB, 26/06/2023",
    img: "https://www.maringa.pr.gov.br/sistema/imagens/gd_37a69188fcb2.jpg"
  },
  {
    id: 3,
    nome: "Dia de todo mundo sair na mão",
    data: "TER, 28/05/2023",
    img: "https://www.tnh1.com.br/fileadmin/_processed_/3/0/csm_deputado-alencar-agredi-manifestante-696x418_91244b6c05.jpg"
  }

]
 
function App() {
  return (
    <> {/* fragmento de tag, serve para envolver tags para que tenham apenas 1 elemneto pai */}
    
    <Header/>
    <h1> Bem-Vindo ao site de eventos </h1>

    <div className="container">
      <form>
        <div>
          <label htmlFOR='nome'>Nome do evento: </label>
          <input id='nome' type='text' />
        </div>
        <div>
          <label htmlFOR='data'>Data: </label>
          <input id='data' type='text' />
        </div>
        <div>
          <label htmlFOR='descricao'>Descrição: </label>
          <input id='descricao' type='text' />
        </div>
        <div>
          <label htmlFOR='imagem'>Selecione uma imagem: </label>
          <input id='imagem' type='file' />
        </div>

        <button>Cadastrar</button>
      </form>

      <div className='container-eventos'>
        {eventosEstaticos.map(evento => {
          return (
          <EventCard
            key={evento.id}
            nome={evento.nome}
            data={evento.data}
            img={evento.img}
          />)
        })}


      </div>
    </div>
    </>
  );
}

export default App;
