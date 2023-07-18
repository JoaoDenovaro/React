import './styles.css';
import {Header} from '../../components/Header'
import { EventCard } from '../../components/EventCard';
import { useState } from 'react';
import { eventsTypes } from "../../data/events-types"; 
import { EventTypeDisplay } from '../../components/EventTypeDisplay';
import { EventCities } from '../../components/EventCities';
import { eventCities } from '../../data/events-cities';

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
 
export function Home() {

  const [eventos, setEventos] = useState(eventosEstaticos)
  const [nome, setNome] = useState("")
  const [data, setData] = useState("")
  const [descricao, setDescricao] = useState("")
  const [imagem, setImagem] = useState("")

function converterImagem (evento){
  const reader = new FileReader()
  reader.readAsDataURL(evento.target.files[0])
  
  reader.onload = () => {
    setImagem(reader.result)
  }
}

function cadastrarEvento(evento) {
  evento.preventDefault()

  const id = eventos.length + 1
  const dataFormatada = new Date(data).toLocaleDateString('pt-br', { weekday:"short", year:"numeric", month:"short", day:"numeric"}) 

  const novoEvento = {
    id,
    nome, 
    data: dataFormatada, 
    descricao,
    img: imagem
  }

  setEventos([...eventos, novoEvento])

  evento.target.reset()
  setImagem("")
  
}

function deletarEvento(id) {
  const confirmar = window.confirm("Tem certeza de que quer deletar este evento?")

  if (confirmar) {
    const eventosAtualizados = eventos.filter(evento => evento.id !== id)
    setEventos(eventosAtualizados)
  }

}
  
  return (
    <> {/* fragmento de tag, serve para envolver tags para que tenham apenas 1 elemneto pai */}
    
    <Header/>

    <h1> Bem-Vindo ao site de eventos </h1>

    <div className='container-tipos-eventos'>
      {eventsTypes.map(eventType => {
        return (
          <EventTypeDisplay
          name={eventType.name}
          photo={eventType.photo}
          />
        )
      })}
    </div>

    <div className="container">
      <form onSubmit={cadastrarEvento}>
        <div>
          <label htmlFor='nome'>Nome do evento: </label>
          <input onChange={(e) =>  {setNome(e.target.value)}} id='nome' type='text' />
        </div>
        <div>
          <label htmlFor='data'>Data: </label>
          <input onChange={(e) => {setData(e.target.value)}} id='data' type='datetime-local' />
        </div>
        <div>
          <label htmlFor='descricao'>Descrição: </label>
          <input onChange={(e) => {setDescricao(e.target.value)}} id='descricao' type='text' />
        </div>
        <div>
          <label htmlFor='imagem'>Selecione uma imagem: </label>
          <input onChange={converterImagem} id='imagem' type='file' />
        </div>
        <div>
          <img style={{display: imagem ? "block" : "none"}} src={imagem} alt="" className="preview"></img>
        </div>

        <button>Cadastrar</button>
      </form>

      <div className='container-eventos'>
        {eventos.map(evento => {
          return (
          <EventCard
            key={evento.id}
            id={evento.id}
            nome={evento.nome}
            data={evento.data}
            img={evento.img}
            deletarEvento={deletarEvento}
          />)
        })}
      </div>
    </div>
      <h1>O melhor de cada cidade</h1>
      <div className='container-cidades'>
        {eventCities.map(city => {
          return (
            <EventCities
            name={city.name}
            photo={city.photo}
            />
          )
        })}
      </div>
    </>
  );
}


