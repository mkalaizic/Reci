

import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as actions from './actions/actions.js';

    //will create a function redirect that will reroute to the corresponding site
    //will create classname menu to give style to the buttons
    /* <button id= {props.market.marketId} onClick = {(e) => {
        e.preventDefault();
        const pressed = e.target.id;
        props.redirect(Number(pressed));</button>
*/


// const mapStateToProps = state => ({
//     totalRecipes : state.recipes.totalRecipes,
// })

//recipe_name,ingredient,quantity,comment
const mapDispatchToProps = dispatch => ({
   addRecipes: (name,ingr,quant,com) => dispatch(actions.addRecipeActionCreator(name,ingr,quant,com)),
});

class FormAddOrEdit extends Component {
    constructor(props) {
      super(props);
    }

  render() {
    return(
        <div className="recipeForm">
          
           <label>Recipe name:</label>
            <input id="name" type="text"></input>
            <label>Ingredient:</label>
            <input id="ingredient" type="text"></input>
            <label>Quantity:</label>
            <input id="quantity" type="text"></input>
            <label>Comments:</label>
            <input id="comment" type="text"></input>
            
            <button onClick = {() => {
              const name = document.getElementById('name').value
              const ingr = document.getElementById('ingredient').value
              const quant = document.getElementById('quantity').value
              const com = document.getElementById('comment').value
              console.log(name,ingr,quant,com);
              this.props.addRecipes(name,ingr,quant,com);
              document.getElementById('ingredient').value = '';
              document.getElementById('quantity').value = '';
              document.getElementById('comment').value = '';
              
              }}>Save</button>
        </div>
        );
    }
};


// export default connect(mapStateToProps, mapDispatchToProps)(Menu)
export default connect(null, mapDispatchToProps)(FormAddOrEdit);