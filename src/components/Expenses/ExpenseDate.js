// expensedate.js has no direct connection to app.js; app.js is connected to expenseitem.js which is connected to expensedate.js
// therfore the props parameter is actually getting the prop from ExpenseItem.js instead of App.js
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;