const db = require('../models/reci_model');

const reciController = {};

reciController.getRecipeAmount = (req, res,next) => {

  const allRecipes = 
  `SELECT recipe_name
  FROM my_recipes`;
  
  db.query(allRecipes)
    .then(res => {const {rows} = res; return rows;})
    .then(rows => {
      const result = [];
      rows.forEach((el)=>{
        if(!result.includes(el.recipe_name)) result.push(el.recipe_name);
      })
      return result;
    })
    .then(result => {
      console.log(result);
      res.locals.recipes = result.length;
    })
    .then(() => next())
    .catch(() => next({
      log: 'ERROR in getting recipes',
      message: {err: 'ERROR in reciController.getRecipes middleware'}
    }));
};

reciController.getRecipes = (req, res,next) => {

  const allRecipes = 
  `SELECT recipe_name
  FROM my_recipes`;
  
  db.query(allRecipes)
    .then(res => {const {rows} = res; return rows;})
    .then(rows => {
      const result = [];
      rows.forEach((el)=>{
        if(!result.includes(el.recipe_name)) result.push(el.recipe_name);
      })
      return result;
    })
    .then(result => {
      console.log(result);
      res.locals.recipes = result;
    })
    .then(() => next())
    .catch(() => next({
      log: 'ERROR in getting recipes',
      message: {err: 'ERROR in reciController.getRecipes middleware'}
    }));
};

reciController.createRecipe = (req,res,next) =>{
  const {recipe_name} = req.query;
  console.log(recipe_name);
  const newRecipe = 
  `INSERT INTO my_recipes (recipe_id, recipe_name, ingredient, quantity, comment) 
  VALUES (2, $1, 'sugar', 200, 'hi');`;
  
  db.query(newRecipe,[recipe_name])
  .then(() => next())
  .catch(() => next({
    log: 'ERROR in addingrecipes',
    message: {err: 'ERROR in reciController.createRecipes middleware'}
  }));
};

module.exports = reciController;