import { useQuery } from 'react-query';
import axios from 'axios';

// components & pages
import Nav from './components/Navbar';
import Home from './pages/Home';

function App() {
    const { data: cards, refetch, isLoading, isFetching } = useQuery('cards', async () => {
        try {
            const { data } = await axios.get('https://churn-velocity-api.onrender.com/api/cards/');
            return data;
        } catch (error) {
            console.log(error);
        }
    });

    if(isLoading || isFetching) {
        return (
            <h1>Cards Loading</h1>
        );
    }

    return (
        <div className='App'>
            <Nav cards={cards} />
            <Home cards={cards} refetch={refetch} />
        </div>
    );
}

export default App;