const tarefas = require("../models/tarefaModel")

class tarefasDAO{
    constructor(db){
        this.db = db
    }

    listaTarefas(){
        return new Promise((resolve, reject) => {
            this.db.all('SELECT * FROM TAREFAS',
                (err, results) => {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                })
        })
    }

    insereTarefa(tarefas) {
        return new Promise((resolve, reject) => {
            this.db.run('INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)'
            , [tarefas.titulo, tarefas.descricao, tarefas.status, tarefas.dataCriacao, tarefas.idUser]
            , (err) => {
                if(err) {
                    reject('tarefa não pode ser inserido!')
                } else {
                    resolve('tarefa inserido com sucesso!')
                }
            })
        })
    };

    buscaTarefa(id){
        return new Promise((resolve, reject) => {
            this.db.get("SELECT * FROM TAREFAS WHERE ID = ?", id, (err, tarefa) => {
                if (err) {
                    reject("Erro encontrado na tentativa de consultar o id do usuário");
                } else {
                    resolve(tarefa);
                } 
            })
        })
    };

    deletaTarefa(deletar){
        return new Promise((resolve, reject) => {
            this.db.run("DELETE FROM TAREFAS WHERE ID = ?", deletar, (error) => {
                if (error) {
                    reject("Erro encontrado na tentativa de deletar tarefa!");    
                } else {  
                    resolve("Tentativa de deletar dados bem sucedida!");
                } 
            })
        })
    }
}

module.exports = tarefasDAO