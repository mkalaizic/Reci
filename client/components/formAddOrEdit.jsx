

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


const mapStateToProps = state => ({
    lastRecipeList : state.recipes.recipesList,
    lastId: state.recipes.lastRecipeId,
})

//recipe_name,ingredient,quantity,comment
const mapDispatchToProps = dispatch => ({
   addRecipes: (name,ingr,quant,com) => dispatch(actions.addRecipeActionCreator(name,ingr,quant,com)),
   addRecipesCounter: () => dispatch(actions.addRecipeToCounterActionCreator()),
});


class FormAddOrEdit extends Component {
    constructor(props) {
      super(props);
    }
    
  render() {
    return(
        <div className="recipeForm">
          <div className="inputs">
           <label>Recipe name: (*)</label>
            <input placeholder="Recipe name (i.e. bread)" id="name" type="text" required="required"></input>
            <label>Ingredient: (*)</label>
            <input placeholder="Ingredient (i.e. sugar)" id="ingredient" type="text" required="required"></input>
            <label>Quantity: (*)</label>
            <input placeholder="Quantity needed" id="quantity" type="number" required="required"></input>
            <label>Comments:</label>
            <input id="comment" type="text"></input>
          
            </div>
            <button id= "saveRecipe" onClick = {() => {
              //the first state gives me the old ID, so when the list is empty I add one to have the correct ID
              let id;
              if(this.props.lastRecipeList.length === 0){
                this.props.addRecipesCounter();
                id = this.props.lastId+1;
              } 
              else id = this.props.lastId;

              const recipe_name = document.getElementById('name').value;
              const ingr = document.getElementById('ingredient').value;
              const quant = document.getElementById('quantity').value;
              const com = document.getElementById('comment').value;
              
              this.props.addRecipes(recipe_name,ingr,quant,com);

              document.getElementById('ingredient').value = '';
              document.getElementById('quantity').value = '';
              document.getElementById('comment').value = '';
              
              const body= {
                id,
                recipe_name,
                ingr,
                quant,
                com
              }
              // console.log(body);
              fetch('/create',{
                method: 'POST',
                headers: {
                  'Content-Type': 'Application/JSON'
                },
                body: JSON.stringify(body)
              })
                .catch(err => console.log('CreateRecipe fetch: ERROR: ', err));

          
              }}>Save</button>
        </div>
        );
    }
};


// export default connect(mapStateToProps, mapDispatchToProps)(Menu)
export default connect(mapStateToProps, mapDispatchToProps)(FormAddOrEdit);