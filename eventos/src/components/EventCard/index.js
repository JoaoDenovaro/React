import "./styles.css"

export function EventCard(evento){
    return (
        <div className='card-evento'>
        <img src={evento.img} alt=""/>
        <div className='infos-evento'>
          <div>
            <h2>{evento.nome}</h2>
            <span>{evento.data}</span>
          </div>
          <div>
            <button>Deletar</button>
            <button>Editar</button>
          </div>
        </div>  
      </div>  
    )
}