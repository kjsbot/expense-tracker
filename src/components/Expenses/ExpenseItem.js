import React, { useState } from 'react'; // useStates: changes to usestate values, means it should be called again by React
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => { // must retearn only one root html tag , one parameter that holds all the received attributes from app.js in keyvalue pairs
    // <ExpenseDate date={props.date}/> gets the date property from App.js and gives it to ExpenseDate as a property
    // props -> way of passing data from component A to another child component B; ex App.js can't pass date to ExpenseDate.js
    const [title, setTtitle] = useState(props.title); // returns arrayof size 2: 0: value, 1: function that updates variable value
// title points to value stored in props.title
    
    const clickHandler = () => {
        setTtitle('New Title'); //state updating function, and the whole component is called again
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button> 
        </Card>
    ); // jsx code, componet brings jsx code on screen
    // onCLick is an event listener that points to a function (doesn't excecute it so don't have to write clickHandler())
}

export default ExpenseItem;