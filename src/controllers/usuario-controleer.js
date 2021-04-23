const UsuariosDao = require('../DAO/usuarios-dao');
const UserModel = require('../models/usuarioModel');
const bd = require('../infra/sqlite-db');

function userController(app){
  const DAO = new UsuariosDao(bd)

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
    const body = req.body;
    console.log(body)
    const user = new UserModel (0, body.nome, body.email, body.senha)
   
    try{
      await DAO.insereUsuario(user)
      res.send({mensagem: "usuario inserido com sucesso"})
    }  catch (error) {
      res.status(404).send({error:"usuario não cadastrado"})
    }

  });


  //? filtra o objeto chamando um id especifico pelo caminho dado
  app.get('/usuarios/:id', async (req, res) => {
    const id = req.params.id
    
    try{
        const usuario = await DAO.buscaUser(id)
        res.send(usuario)
    }
    catch(erro){
        res.send(erro)
    }
});


  //? Deleta um objeto criado no bd(banco de dados) pelo ID 
  app.delete('/usuarios/:id', async (req, res) => {
    try {
        const deleta = await DAO.deletaUsuarios(req.params.id)
        res.send(deleta)
    }
    catch(erro){
        res.send(erro)
    }
});

  //? Substitui um objeto inteiro pelo parametro passado no JSON
  app.put ('/usuarios/:id', async (req,res) => { 
    const body = req.body;
    const id = req.params.id;
    let user = new UserModel(0, body.nome, body.email, body.senha);
    console.log(body)
    try {
      await DAO.updateUser(user,id); 
      res.send("Usuario atualizado!") 
    } catch (error) {
      res.status(404).send("usuario não encontrado!")
    }
  });
  
  
}
  
 module.exports = userController;