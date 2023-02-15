import {useState} from 'react';
import axios from 'axios';

const CardForm = ({refetch}) => {
    const [name, setName] = useState('');
    const [openDate, setOpenDate] = useState('');

    const handleSubmit = async e => {
        try {
            e.preventDefault();
            const date = openDate.split("-");

            await axios.post('/api/cards/', {
                name: name,
                opened: {
                    month: date[1],
                    year: date[0]
                }
            });

            setName('');
            setOpenDate('');

            refetch();
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <form className='cardForm' onSubmit={handleSubmit}>
            <h2>Add a New Card</h2>
            <label><strong>Card Name</strong></label>
            <input type='text' name='cardName' value={name} onChange={e => setName(e.target.value)} />
            <label><strong>Opened</strong></label>
            <input type='month' name='dateOpened' value={openDate} onChange={e => setOpenDate(e.target.value)}/>
            <input type='submit' value='Add' />
        </form>
    );
}

export default CardForm;