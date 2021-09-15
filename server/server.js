const express = require('express');
const app = express();
const path = require('path');
const reciController = require('./controllers/reci_controller');

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });

// app.get('/recipes', (req, res) => {
//   res.status(200).json('hola');
//   });
  
app.listen(3000); //listens on port 3000 -> http://localhost:3000/