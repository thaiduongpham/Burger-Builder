import React from 'react';
import classes from './Order.css';

const order = (props) => {
  
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return <span
              style={{
                textTransform: 'capitalize', 
                display: 'inline-block',
                margin: '0 8px 10px',
                border: '1px solid #ccc',
                padding: '5px 10px'
              }}
              key={ig.name}>{ig.name} ({ig.amount})</span>
  })

  return (
    <div className={classes.Order}>
      <p>Ingredient: {ingredientOutput}</p>
      <p>Price: <b>USD {props.price.toFixed(2)}</b></p>
    </div>
  );
}

export default order;