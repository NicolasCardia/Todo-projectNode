const Task = require('../models/tarefaModel'); //requisitando o site

function taskController(app) {
  const taskGet = Task.get(); 
  const taskPost = Task.post()

  app.get('/tarefa', (req,res) => {
    console.log('[INFO]: Chegou uma tarefa aqui por GET')
    res.send(taskGet); //mostrando o conteudo dentro do tarefamodel
  });

     app.post('/tarefa', (req, res)=> {
      console.log('[INFO]: chegou uma tarefa aqui por POST')
      res.send(taskPost); //mostrando o conteudo dentro do tarefa model
    })
  }

  module.exports = taskController