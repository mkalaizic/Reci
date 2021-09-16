/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

 import * as types from '../components/constants/actionTypes.js';

const initialState = {
  totalRecipes: 0,
  recipesList: [],
  lastRecipeId: 0,
};

const recipesReducer = (state = initialState, action) => {
  let recipesList;
  let totalRecipes;
  let lastRecipeId;
  let newRecipe;

  switch (action.type) {
    case types.ADD_RECIPE: {

       // addMarket(lastMarketId, totalMarkets);
        // create the new market object from provided data
       newRecipe = {
        // what goes in here?
        recipeId: state.lastRecipeId,
        recipe_name: action.payload.recipe_name,
        ingredient: action.payload.ingredient,
        quantity: action.payload.quantity,
        comment: action.payload.comment,
        
      };

  
      // push the new market onto a copy of the market list
      recipesList = state.recipesList.slice();
      recipesList.push(newRecipe);
  
      // return updated state
      return {
        ...state,
        recipesList,
      };
    }
    case types.ADD_RECIPECOUNTER: {


     lastRecipeId = state.lastRecipeId + 1;
     totalRecipes = state.totalRecipes + 1;
 
     // return updated state
     return {
       ...state,
       lastRecipeId,
       totalRecipes,
     };
   }

    // case types.UPDATE_RECIPE:{

    //   state.marketList.forEach(market =>{
    //     if(market.marketId === action.payload)
    //       newMarket = {
    //         ...market,
    //         cards: market.cards + 1,
    //       };
    //   });

    //   marketList = state.marketList.slice();
    //   marketList.splice(marketList.indexOf(action.payload));
    //   marketList.push(newMarket);
      
    //   totalCards = state.totalCards + 1;
      
    //   return {
    //     ...state,
    //     marketList,
    //     totalCards,
    //   };
    // }
    // case types.DELETE_RECIPE: 
    // marketList = state.marketList.slice();
    // marketList.splice(marketList.indexOf(action.payload));
    
    // totalCards = state.totalCards + 1;
    // totalMarkets = state.totalMarkets + 1;

    //   return {
    //     ...state,
    //     marketList,
    //     totalCards,
    //     totalMarkets
    //   };

    default: {
      return state;
    }
  }
};

export default recipesReducer;


