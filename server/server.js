const express = require('express');
const app = express();
const path = require('path');
const reciController = require('./controllers/reci_controller');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'

app.get('/recipes', reciController.getRecipes, (req, res) => {
  res.status(200).json(res.locals.recipes);
  });

app.get('/recipeAmount', reciController.getRecipeAmount, (req, res) => {
  res.status(200).json(res.locals.recipeAmount);
});

app.post('/create', reciController.createRecipe, (req,res)=>{
  res.status(200).json({});
});

app.get('/deleteRecipes', reciController.deleteRecipes,(req,res)=>{
  res.status(200).json({});
})

app.get('/', reciController.getRecipes, (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });

app.get('*', (req, res) => {
  return res.status(404).send('ERROR');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


  
app.listen(3000); //listens on port 3000 -> http://localhost:3000/