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

    filtraUsuario(buscar) {
        return new promise ((resolve,reject) => {
            this.db.all('SELECT * FROM USUARIOS WHERE ID = ?', buscar, (error,results) => {
                if(error) {
                    reject ("Erro ao buscar o usuários informado, certifique-se que o id informado exista");
                } else {
                    resolve ({mensagem: "usuário encontrado com sucesso"})
                }
            })

        })
    }

    deletaUsuarios(deletar) {
        return new Promise((resolve, reject) => {
            this.db.run("DELETE FROM USUARIOS WHERE EMAIL = ?", deletar, (error) => {
                if (error) reject("Erro encontrado na tentativa de deletar usuario");
                else resolve("Tentativa de deletar dados bem sucedida!");
            })
        })
    }   
        
       
        /*return new promise ((resolve,reject) => {
            this.db.run('DELETE FROM USUARIOS WHERE ID = ?', deleta, (error) => {
                if (error) {
                    reject("[ERROR]")
                } else {
                    resolve("Usuario deletado com sucesso!")
                }   
            })
        })
    }*/
}

module.exports = UsuariosDao;