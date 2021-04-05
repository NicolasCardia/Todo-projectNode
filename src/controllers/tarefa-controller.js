function taskController(app){
    app.get('/task', (req, res)=> {
       res.send('Rota ativida com GET e recurso user: Valores de user devem ser retornados')
     })
     app.post('/task', (req, res)=> {
      console.log('[INFO]: chegou uma tarefa')

      res.send(req.body)
      //res.send('Rota POST de usuario ativada: usuario adicionado ao banco de dados')
    })
  }
  module.exports = taskController