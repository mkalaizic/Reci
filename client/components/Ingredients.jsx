import React from 'react';

const Ingredients = props => (
  <div id="recipesTable">
    <button onClick={()=>{
      fetch('/')
    }} id= "buttonRecipe">{props.recipeName}</button>
  </div>
);

export default Ingredients;