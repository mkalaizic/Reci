const db = require('../models/reci_model');

const reciController = {};

reciController.getRecipes = (req, res, next) => {

  const allRecipes = 
  `SELECT my_recipes ingredient
  FROM recipes`;
  db.query(allRecipes)
    .then(res => {const {rows} = res; return rows;})
    .then(data => {
      console.log(data);
      res.locals.recipes = data;
    })
    .then(() => next())
    .catch(() => next({
      log: 'ERROR in getting recipes',
      message: {err: 'ERROR in reciController.getRecipes middleware'}
    }));
};

module.exports = reciController;