
import React from 'react';
    //will create a function redirect that will reroute to the corresponding site
    //will create classname menu to give style to the buttons
    /* <button id= {props.market.marketId} onClick = {(e) => {
        e.preventDefault();
        const pressed = e.target.id;
        props.redirect(Number(pressed));</button>
*/
///* <button onClick = {() => {props.addRecipes()}}>Look up recipe</button> */
//onClick= {() => location.href='/recipes

const Options = props => (
    <div>
       <h2>Your new recipe book, but smarter.</h2>

        <h3>What do you want to do today?</h3>
  
          <div className="menu">
              <button onClick = {()=> props.getFromServer()} >Look up recipe</button>
              <button>Add or edit recipes</button>
              <button>Shopping list</button>

          </div>
    </div>
    )

export default Options;