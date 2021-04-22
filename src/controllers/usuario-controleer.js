const { response } = require('express');
const UsuariosDao = require('../DAO/usuarios-dao');
const UserModel = require('../models/usuarioModel');
const bd = require('../infra/sqlite-db');
const DAO = new UsuariosDao(bd)

function userController(app){
  //?  trata possiveis erros que irão aparecer E pega as informações do bando de dados 
  app.get('/usuarios', async (req,res) => {
    try {
      const usuarios = await DAO.listaUsuarios() 
      res.send(usuarios)
    } catch (error) {
      res.status(404).send({mensagem:error})
    }
  })


  //? Pega um json que eu faça dentro do insomnia
  app.post('/usuarios',async (req, res)=> {
   try{
      const body = req.body;
      console.log(body)
      const user = new UserModel (0, body.nome, body.email, body.senha)
      const post = await DAO.insereUsuario(user)
      res.send({mensagem: "usuario inserido com sucesso"})
    }  catch (error) {
      res.status(404).send({error:"usuario não cadastrado"})
    }

  });

  //? filtra o objeto chamando um email especifico pelo caminho dado
  app.get('/usuarios/:id', async(req, res) => {
    try {
      const usuarioParametro = await DAO.filtraUsuario(req.params.id)
      res.send(usuarioParametro)
    } catch (error) {
      res.status(404).send("erro usuario não encontrado")
    }
  });

  //? Deleta um objeto criado no bd(banco de dados) 
  app.delete('/usuarios/:email', async (req, res) => {
    try {
        const deleta = await DAO.deletaUsuarios(req.params.email)
        res.send(deleta)
    }
    catch(erro){
        res.send(erro)
    }
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