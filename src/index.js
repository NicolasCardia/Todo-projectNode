const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 8080
const tarefaController = require('./controllers/tarefa-controller.js');
const usuarioController = require('./controllers/usuario-controleer.js');
app.use(bodyParser.json())
app.use(logRequest)//uma função criada logo abaixo

function logRequest(req, res,next) {
  console.log(`Uma requisição ${req.method} com o caminho ${req.path}`)
  console.log(req.body)
  next()
}


tarefaController(app);
usuarioController(app);

app.listen(port, () => {
    console.log(`rastreamento sendo feito com nodemom http://localhost:${port}`)
    
  })

  
