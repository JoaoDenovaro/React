import { Header } from '../../components/Header'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import { useEffect } from 'react'


export function EventDetails() {
    const navigate = useNavigate()
    const { state } = useLocation()

    useEffect(() => {
        if (!state){
            navigate('/')
        }
    }, [])

    if (!state) {
        return <></>
    }

    return (
        <>
        <Header />
            <h1 className="titulo-detalhes-evento">Detalhes do evento</h1>

            <div className="container-detalhes-evento">
                <img src={state.img} />

                <div>
                    <h2>{state.nome}</h2>
                    <p className="data-evento">{state.data}</p>

                    <p>{state.descricao}</p>
                    <button>Editar evento</button>
                </div>
            </div>
        </>
    )
}