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
  app.post('/tarefas',async (req, res)=> {
    const body = req.body;
    const tarefa = new tarefasModel(0, body.titulo, body.descricao, body.status, body.dataDeCriacao, body.idUsuario)
    console.log(body.dataDeCriacao)
    
    try{
       await DAO.insereTarefa(tarefa)  
       res.send({mensagem: "tarefa inserida com sucesso!"})
     }  catch (error) {
       res.status(404).send({error:"tarefa não cadastrada!"}) 
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
  app.put ('/tarefas/:id', async (req,res) => { 
    const body = req.body;
    const id = req.params.id;
    let TAREFA = new tarefasModel(0, body.titulo, body.descricao, body.status, body.dataDeCriacao, body.idUsuario);
    console.log(id)
    try {
      await DAO.updateTarefa(TAREFA,id); 
      res.send("Usuario atualizado!") 
    } catch (error) {
      res.status(404).send("usuario não encontrado!")
    }
  });

}

  module.exports = taskController