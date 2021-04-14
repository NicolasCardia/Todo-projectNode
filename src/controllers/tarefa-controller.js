const Task = require('../models/tarefaModel'); //requisitando o site

function taskController(app, bd) {

 //? PEGA OS OBJETOS REFERENTES A TAREFA
  app.get('/tarefas', (req,res) => {

    bd.all("SELECT * FROM TAREFAS", function (err,rows){
      if(err) {
        throw new Error(`Erro ao rodar consulta ${err}`);
      } else {
        res.send(rows)
        console.log("ta funcionando")
      }
    })
  });

  //? Filtra um objeto
  app.get('/tarefas/:TITULO', (req, res) => {
    
    const tarefas = req.params.TAREFAS  ;
    const titulo = bd.usuarios.find(TAREFAS => TAREFAS.TITULO == tarefas) //! find of undefined

    res.send(titulo)
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

  module.exports = taskController