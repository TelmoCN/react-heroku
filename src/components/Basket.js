import React from 'react';

const Basket = (props) => {
    console.log(props.orders);
    const drinks = props.orders.map( (drink) => {
        return <li>My drink is a {drink.size} {drink.name}</li>
    })
    return (
        <div className="Basket">
            <ul>
                {drinks}
            </ul>
        </div>
    )
}

export default Basket;