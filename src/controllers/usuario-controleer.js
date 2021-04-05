const User = require('../models/usuarioModel');

function userController(app){
  const usuarioGet = User.get();
  const usuarioPost = User.post(); 

  app.get('/user', (req, res)=> {
    console.log('[INFO]: Chgeou um usuario aqui por get')
    res.send(usuarioGet)
  });

     app.post('/user', (req, res)=> {
       console.log('[INFO] chegou um usuario aqui por post')
       res.send(usuarioPost)
     })
 }
 
 module.exports = userController