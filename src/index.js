const express = require('express');
const app = express();

const bodyParser = require('body-parser')
const port = 3000

const tarefaController = require('./controllers/tarefa-controller.js');
const usuarioController = require('./controllers/usuario-controleer.js');


app.use(bodyParser.json())
app.use(logRequest)//uma função criada logo abaixo

//mostra a mensagem no console log sempre que eu faço um requisição no insomnia
function logRequest(req, res,next) {
  console.log(`Uma requisição ${req.method} com o caminho ${req.path}`)
  console.log(req.body)
  next()
}


usuarioController(app);
tarefaController(app);

app.listen(port, () => {
    console.log(`rastreamento sendo feito com nodemom http://localhost:${port}`)
    
  })

  
