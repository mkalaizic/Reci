/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes.js';

export const addRecipeActionCreator = (recipe_name,ingredient,quantity,comment) => ({
  type: types.ADD_RECIPE,
  payload: {
    recipe_name,
    ingredient,
    quantity,
    comment,
  }
});
export const addRecipeToCounterActionCreator = () => ({
  type: types.ADD_RECIPECOUNTER,
  }
);
  // add market
export const updateRecipeActionCreator = () => ({
  type: types.UPDATE_RECIPE,
});

export const deleteRecipeActionCreator = (recipe_name) => ({
  type: types.DELETE_RECIPE,
  payload: recipe_name,
});

