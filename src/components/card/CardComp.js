import React from 'react';
import './CardComp.css';

export const CardComp = (props) => {
  return (
    <div className='card-container'>
        <div className="card" style={{width: "18rem"}}>
        <img alt="monster" src={`https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp`} />
        </div>
        <h3>{props.monster.name}</h3>
        <p>{props.monster.email}</p>
    </div>
  )
}
