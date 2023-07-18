import "./styles.css"
import {useNavigate} from 'react-router-dom'

export function EventCard({img, data, descricao, id, nome, deletarEvento}){
  const navigate = useNavigate()
  
  function navegarParaDetalhes() {
    navigate(`/eventos/${id}`, {state: {img, data, descricao, nome, id}})
  }

  return (
      <div className='card-evento'>
      <img src={img} alt=""/>
      <div className='infos-evento'>
        <div>
          <h2>{nome}</h2>
          <span>{data}</span>
        </div>
        <div>
          <button onClick={() => deletarEvento(id)}>Deletar</button>
          <button>Editar</button>
          <button onClick={navegarParaDetalhes}> Ver detalhes</button>
        </div>
      </div>  
    </div>  
  )
}