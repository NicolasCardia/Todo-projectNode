let usuarioGet = {
    nome: "Claudio",
    idade: "26",
    genero: "masculino",
    verbo: "GET"
}

let usuarioPost = {
    nome: "Claudio",
    idade: "26",
    genero: "masculino",
    verbo: "POST"
}

module.exports = {
    get(){
        return usuarioGet; //retorna requisição com GET
    },
    post(){
        return usuarioPost //retorna requisição com POST
    }
}