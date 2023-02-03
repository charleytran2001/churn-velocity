const CardDetails = ({card}) => {
    return (
        <div className="cardDetails">
            <h4>{card.name}</h4>
            <p><strong>Opened: </strong>{card.opened.month}/{card.opened.year}</p>
        </div>
    );
}

export default CardDetails;