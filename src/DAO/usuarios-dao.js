//* SELECT, UPDATE, INSERT, DELETE
//* RUN USA PARA DELETE, PUT, POST E QUALQUER UM QUE N SEJA O GET, GUARDA O RESULTADO
//* ALL USA PRO GET, MOSTRA O RESULTADO 
class UsuariosDao  {
    constructor (bd) {
        this.bd = bd;
    }
    listaUsuarios(){
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM USUARIOS',
            (err,usuarios) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(usuarios)
                }
            })
        })

    };

    insereUsuario(usuario) {
        return new Promise((resolve, reject) => {
            this.bd.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)'
            , [usuario.nome, usuario.email, usuario.senha]
            , (err) => {
                if(err) {
                    reject('usuario não pode ser inserido')
                } else {
                    resolve('usuario inserido com sucesso')
                }
            })
        })
    }
};

module.exports = UsuariosDao;