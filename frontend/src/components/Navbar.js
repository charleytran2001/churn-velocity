import { differenceInCalendarMonths, subMonths, compareAsc } from 'date-fns';

const Navbar = ({cards}) => {
    const date = new Date();
    const currentDate = [date.getFullYear(), date.getMonth() + 1];

    const newestCardDate = [cards && cards.length !== 0 && cards[0].opened.year || currentDate[0], 
                            cards && cards.length !== 0 && cards[0].opened.month || currentDate[1]];

    const calculateCardMonthStats = monthsAgo => {
        let counter = 0;
        const compareDate = subMonths(new Date(currentDate[0], currentDate[1]), monthsAgo);

        cards && cards.map(card => {
            if(compareAsc(new Date(card.opened.year, card.opened.month), compareDate) === 1) {
                counter++;
            }
        })

        return counter;
    }

    return (
        <header>
            <nav>
                <h1>Churn Velocity</h1>
            </nav>

            <div className='cardStats'>
                <h2>Number of Cards: {cards && cards.length}</h2>
                <h2>Months Since Last Card: {differenceInCalendarMonths(
                    new Date(currentDate[0], currentDate[1]),
                    new Date(newestCardDate[0], newestCardDate[1])
                )}</h2>
                <h2>New Accounts Opened: {calculateCardMonthStats(6)}/6, {calculateCardMonthStats(12)}/12, {calculateCardMonthStats(24)}/24</h2>
            </div>
        </header>
    );
}

export default Navbar;