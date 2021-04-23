class tarefas {
    constructor (id,titulo, descricao, status, dataDeCriacao, idUser) {
        this.id = id,
        this.titulo = titulo,
        this.descricao = descricao,
        this.status = status,
        this.dataDeCriacao = dataDeCriacao,
        this.idUser = idUser
    }
}

module.exports = tarefas