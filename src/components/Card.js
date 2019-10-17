import React from 'react';

const Card = (props) => {
    
    
    return (
        <div className="card">
          <h1>Drink: {props.name}</h1>
          <span>Small</span>
          <input type="radio" name="size" onChange={() => props.clickHandler(props.name, "small", 1.40)} />
          <br />
          <span>Medium</span>
          <input type="radio" name="size" onChange={() => props.clickHandler(props.name, "medium", 3.2)} />
          <br />
          <button onClick={props.addToOrder}>
              Add to Order
          </button>
        </div>
    )
}

export default Card;