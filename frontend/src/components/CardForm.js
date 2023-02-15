import {useState} from 'react';
import axios from 'axios';
import { compareAsc } from 'date-fns';

const CardForm = ({refetch}) => {
    const [name, setName] = useState('');
    const [openDate, setOpenDate] = useState('');

    const date = new Date();
    const currentDate = [date.getFullYear(), date.getMonth() + 1];

    const handleSubmit = async e => {
        try {
            e.preventDefault();

            if(name === '') {
                throw Error("Missing Name");
            } else if(openDate === '') {
                throw Error("Missing Date");
            }

            const date = openDate.split("-");

            if(compareAsc(new Date(date[0], date[1]), new Date(currentDate[0], currentDate[1])) === 1) {
                throw new Error("Invalid Date");
            }

            await axios.post('https://churn-velocity-api.onrender.com/api/cards/', {
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
            <label>Card Name</label>
            <input type='text' name='cardName' value={name} onChange={e => setName(e.target.value)} required/>
            <label>Opened</label>
            <input type='month' name='dateOpened' value={openDate} onChange={e => setOpenDate(e.target.value)} required/>
            <button type='submit' value='Add Card'>Add Card</button>
        </form>
    );
}

export default CardForm;