//* SELECT, UPDATE, INSERT, DELETE
//* RUN USA PARA DELETE, PUT, POST E QUALQUER UM QUE N SEJA O GET, GUARDA O RESULTADO
//* ALL USA PRO GET, MOSTRA O RESULTADO 
class UsuariosDao  {
    constructor (db) {
        this.db = db;
    }

    listaUsuarios(){
        return new Promise((resolve, reject) => {
            this.db.all('SELECT * FROM USUARIOS',
                (err, results) => {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                })
        })
    }


    insereUsuario(usuario) {
        return new Promise((resolve, reject) => {
            this.db.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)'
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


    buscaUser(id) {
        return new Promise((resolve, reject) => {
            this.db.get("SELECT * FROM USUARIOS WHERE ID = ?", id, (err, user) => {
                if (err) {
                    reject("Erro encontrado na tentativa de consultar o id do usuário");
                } else {
                    resolve(user);
                } 
            })
        })
    }

    deletaUsuarios(deletar) {
        return new Promise((resolve, reject) => {
            this.db.run("DELETE FROM USUARIOS WHERE ID = ?", deletar, (error) => {
                if (error) {
                    reject("Erro encontrado na tentativa de deletar usuario");    
                } else {  
                    resolve("Tentativa de deletar dados bem sucedida!");
                } 
            })
        })
    }
    
    updateUser(usuario,id) {
        return new Promise((resolve,reject) => {
            this.db.run("UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE ID = ?", [usuario.nome, usuario.email, usuario.senha, id],(err) =>{
                if (err){
                    reject(err)
                } else {
                    resolve("usuario atualizado com sucesso")
                }
            })
        })
    }
        
}

module.exports = UsuariosDao;