import { useQuery } from 'react-query';
import axios from 'axios';

// components & pages
import Nav from './components/Navbar';
import Home from './pages/Home';

function App() {
    const { data: cards, refetch } = useQuery('cards', async () => {
        try {
            const { data } = await axios.get('https://churn-velocity-api.onrender.com/api/cards/');
            return data;
        } catch (error) {
            console.log(error);
        }
    });

    return (
        <div className='App'>
            <Nav cards={cards} />
            <Home cards={cards} refetch={refetch} />
        </div>
    );
}

export default App;