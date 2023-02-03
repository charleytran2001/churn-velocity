import { useEffect, useState } from 'react';
import axios from 'axios';

// components
import CardDetails from '../components/CardDetails';
import CardForm from '../components/CardForm';

const Home = () => {
    const [cards, setCards] = useState(null);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('/api/cards/');
                setCards(response.data);
            } catch(error) {
                console.log(error);
            }
        }

        fetchCards();
    }, []);

    return (
        <div className='home'>
            <div className='cards'>
                <h2>Your Cards</h2>
                { cards && cards.map(card => (
                    <CardDetails key={card._id} card={card} />
                ))}
            </div>
            <div className='form'>
                <CardForm />
            </div>
        </div>
    );
}

export default Home;