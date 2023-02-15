// components
import CardDetails from '../components/CardDetails';
import CardForm from '../components/CardForm';

const Home = ({cards, refetch}) => {
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