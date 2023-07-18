import "./styles.css"

export function EventTypeDisplay({name, photo}) {
    return (
        <div className="event-type-display zoom">
            <img src={photo}  alt={name}></img>
            <p >{name}</p>
        </div>
    )
}