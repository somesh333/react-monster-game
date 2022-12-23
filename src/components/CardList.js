import React from 'react';
import './Cardlist.css';
import {CardComp} from './card/CardComp'


export const CardList = (props) => {

  return (
    <>
    <div className="card-list">
        {props.monsters.map(monster =>(
             <CardComp key={monster.id} monster={monster} />) )}
        </div>
    </>
  )
}



    {/* <div className="card" style={{width: "18rem"}}>
  <img src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp" alt="example" /> */}