import "./styles.css"
import eventLogo from "../../assets/evento.png"

export function Header() {
    return (
        <header className="header-app">
            <div>
                <h1>Eventos</h1>
                <img src={eventLogo} alt="logo"/>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Página Inicial</a>
                    </li>
                    <li>
                        <a href="#">Meus eventos</a>
                    </li>
                    <li>
                        <a href="#">Acesse sua conta</a>
                    </li>
                    <li>
                        <a href="#">Cadastrar</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
  