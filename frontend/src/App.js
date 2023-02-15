import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
const queryClient = new QueryClient();

// pages
import Home from './pages/Home';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className='App'>
                <Home />
            </div>
        </QueryClientProvider>
    );
}

export default App;