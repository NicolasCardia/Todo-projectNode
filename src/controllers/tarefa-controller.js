const tarefasModel = require('../models/tarefaModel'); //requisitando o site
const tarefasDAO = require('../DAO/tarefas-dao')
const bd = require('../infra/sqlite-db');

function taskController(app) {
const DAO = new tarefasDAO(bd)

  //?  trata possiveis erros que irão aparecer E pega as informações do bando de dados 
  app.get('/tarefas', async (req,res) => {
    try {
      const tarefas = await DAO.listaTarefas() 
      res.send(tarefas)
    } catch (error) {
      res.status(404).send({mensagem:error})
    }
  });

    //? cria uma nova tarefa (titulo,descrição,status,dataCriacao,idUsuario)
    //! dataDeCriacao não esta inserindo resultado
  app.post('/tarefas',async (req, res)=> {
    const body = req.body;
    const tarefa = new tarefasModel(0, body.titulo, body.descricao, body.status, body.dataCriacao, body.idUsuario)
    
    try{
       console.log(dataDeCriacao)
       await DAO.insereTarefa(tarefa)  
       res.send({mensagem: "tarefa inserida com sucesso!"})
     }  catch (error) {
       res.status(404).send({error:"tarefa não cadastrada!"}) //! agr não ta mais funcionando 
     }
 
  });

  //? filtra o objeto chamando um id especifico pelo caminho dado
  app.get('/tarefas/:id', async (req, res) => {
    const id = req.params.id
    
    try{
        const tarefa = await DAO.buscaTarefa(id)
        res.send(tarefa)
    }
    catch(erro){
        res.status(404).send("usuário não encontrado")
    }
});


  //? Deleta um objeto criado no bd(banco de dados) pelo ID 
  app.delete('/tarefas/:id', async (req, res) => {
    const id = req.params.id

    try {
        const deleta = await DAO.deletaTarefa(id)
        res.send(deleta)
    }
    catch(erro){
        res.send(erro)
    }
});


  //? Substitui um objeto inteiro pelo parametro passado no JSON
  //Todo: falta atualizar
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

  module.exports = taskController