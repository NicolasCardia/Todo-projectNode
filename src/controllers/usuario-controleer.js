const { response } = require('express');
const UsuariosDao = require('../DAO/usuarios-dao');
const UserModel = require('../models/usuarioModel');
const bd = require('../infra/sqlite-db')
const DAO = new UsuariosDao(bd)

function userController(app){
  //?  trata possiveis erros que irão aparecer E pega as informações do bando de dados 
  app.get('/usuarios', (req,res) => {
    DAO.listaUsuarios()
    .then((usuarios) => res.send(usuarios))
    .catch((err) => res.send(err))
  })


  //? Pega um json que eu faça dentro do insomnia
  app.post('/usuarios', (req, res)=> {
    const body = req.body;
    console.log(body)
    const user = new UserModel (0, body.nome, body.email, body.senha)
    console.log(user)
    DAO.insereUsuario(user)
    .then((mensagemSucesso) => res.send({mensagem: mensagemSucesso}))
    .catch((mensagemFalha) => res.send({mensagem: mensagemFalha}))
  });

  //? filtra o objeto chamando um email especifico pelo caminho dado
  app.get('/usuarios/:email', (req, res) => {
    
    const email = req.params.email  ;
    const users = bd.usuarios.find(user => user.email == email) //! error 500 find of undefined

    res.send(users)
  });

  //? Deleta um objeto criado no bd(banco de dados) 
  app.delete('/usuarios/:email', (req,res) => {
  const email = req.params.email;
  const users = bd.usuarios
  
  for(let i = 0; i < users.length; i++) { //! of undefined
    if (email === users[i].email) {
      users.splice(i,1) 
    }
  }
  res.send({mensagem: `${email} deletado`}) 
  
  });

  //? Substitui um objeto inteiro pelo parametro passado no JSON
  app.put ('/usuarios/:email', (req,res) => { //
    const email = req.params.email;
    bd.usuarios.forEach((usuarios) => {  //! forEach of undefined
      if(email == usuarios.email){
        usuarios.nome = req.body.nome;
        usuarios.password = req.body.password;
        res.send({mensagem: `${email} Usuario alterado com sucesso`})
      }

    })

  })

}
  
 module.exports = userController;