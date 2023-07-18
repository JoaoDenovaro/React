import "./styles.css"

export function EventCities({name, photo}) {
    return (
        <div className="event-cities zoom">
            <img src={photo} alt={name}></img>
            <p>{name}</p>
        </div>
    )
}