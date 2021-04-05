let taskGet = {
    tarefa: "limpar a casa",
    prazo: "hoje",
    importancia: "média",
    verbo: "GET"
}

  let taskPost = {
    tarefa: "limpar a casa",
    prazo: "hoje",
    importancia: "média",
    verbo: "POST"
}

    module.exports = {
      get(){
          return taskGet; //retorna requisição com GET
      }, 
      post(){
          return taskPost; //retorna requisição com POST
      }
  }