import './card.css';

function Card(props) {
    const classes = 'card ' + props.className; // make sure classname is applied to children tangs
// have to make sure the Card component can accept className, so you have to explicitly tell it it can support/set 
// classNames, bc it's a custom component
    return <div className={classes}>{props.children}</div>; // chlidern: content between the opening and closing tags of custom component
}

export default Card;