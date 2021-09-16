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
      res.locals.recipeAmount = result.length;
    })
    .then(() => next())
    .catch(() => next({
      log: 'ERROR in getting recipes amount',
      message: {err: 'ERROR in reciController.getRecipesAmount middleware'}
    }));
};
reciController.deleteRecipes = (req, res,next) => {
  const deleteRecipes = 
  `DELETE FROM my_recipes`;
  
  db.query(deleteRecipes)
  .then(()=>next())
  .catch(()=>next({
    log: 'ERROR in deleting recipes',
    message: {err: 'ERROR in reciController.deleteRecipes middleware'}
  }))
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

   const {id, recipe_name, ingr, quant, com} = req.body;
  // console.log(id,recipe_name,ingr, quant, com)
  const newRecipe = 
  `INSERT INTO my_recipes (recipe_id, recipe_name, ingredient, quantity, comment) 
  VALUES ($1, $2, $3, $4, $5);`;
  
  db.query(newRecipe,[id.toString(), recipe_name.toString(), ingr, quant.toString(), com.toString()])
  .then(() => next())
  .catch(() => next({
    log: 'ERROR in adding recipes',
    message: {err: 'ERROR in reciController.createRecipes middleware'}
  }));
};

module.exports = reciController;