import React from "react";
import { useState } from 'react';

function Item({ name, category }) {
  
  const [ selectQuery, setSelectQuery ] = useState(false);
  
  function handleClick(){
    setSelectQuery(()=>!selectQuery);
  }

  const inCart = selectQuery ? "Remove From Cart" : "Add to Cart";
  const classCart = selectQuery ? "in-cart" : "";

  return (
    <li className={classCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {handleClick}className="add">{inCart}</button>
    </li>
  );
}

export default Item;
