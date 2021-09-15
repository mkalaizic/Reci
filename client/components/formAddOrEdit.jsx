

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
    totalRecipes : state.recipes.totalRecipes,
})

//recipe_name,ingredient,quantity,comment
const mapDispatchToProps = dispatch => ({
   addRecipes: () => dispatch(actions.addRecipeActionCreator()),
});

class FormAddOrEdit extends Component {
    constructor(props) {
      super(props);
    }

  render() {
    return(
        <div id= "SearchTitle">
       
          <h4>Hola a todes!</h4>
        </div>
        );
    }
};


// export default connect(mapStateToProps, mapDispatchToProps)(Menu)
export default connect(mapStateToProps, mapDispatchToProps)(FormAddOrEdit);