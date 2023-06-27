import "./styles.css"

export function EventCard({img, data, descricao, id, nome, deletarEvento}){
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
          </div>
        </div>  
      </div>  
    )
}