import { useQuery } from 'react-query';
import axios from 'axios';

// components
import Navbar from '../components/Navbar';
import CardDetails from '../components/CardDetails';
import CardForm from '../components/CardForm';

const Home = () => {
    const { data: cards, refetch } = useQuery('cards', async () => {
        try {
            const { data } = await axios.get('/api/cards/');
            return data;
        } catch (error) {
            console.log(error);
        }
    });

    return (
        <div className='wrapper'>
            <Navbar cards={cards} />

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

        </div>
    );
}

export default Home;