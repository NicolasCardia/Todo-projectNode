function userController(app){
    app.get('/user', (req, res)=> {
       res.send('Rastreamento da aplicação sendo feito com nodemon')
     })

     app.post('/user', (req, res)=> {
       console.log('[INFO] chegou um usuario aqui')
       
       res.send(req.body)
       //res.send('Rota POST de usuario ativada: usuário adicionado ao banco de dados')
     })
 }
 module.exports = userController