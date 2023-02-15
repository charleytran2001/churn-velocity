import axios from 'axios';

const CardDetails = ({card, refetch}) => {
    const handleClick = async () => {
        await axios.delete('https://churn-velocity-api.onrender.com/api/cards/' + card._id);
        refetch();
    }

    return (
        <div className="cardDetails">
            <h4>{card.name}</h4>
            <p><strong>Opened: </strong>{card.opened.month}/{card.opened.year}</p>

            <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
        </div>
    );
}

export default CardDetails;