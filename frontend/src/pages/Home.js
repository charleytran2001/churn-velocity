// components
import CardDetails from '../components/CardDetails';
import CardForm from '../components/CardForm';

const Home = ({cards, refetch, isLoading }) => {
    if(isLoading) {
        return (
            <div className='loading'>
                <h1>Cards Loading (This may take up to a minute)</h1>
            </div>
        );
    }

    return (
        <div className='home'>
            <div className='cards'>
                <h2>Your Cards</h2>
                {cards && cards.map(card => (
                    <CardDetails key={card._id} card={card} refetch={refetch} />
                ))}
            </div>

            <div className='form'>
                <CardForm refetch={refetch} />
            </div>
        </div>
    );
}

export default Home;