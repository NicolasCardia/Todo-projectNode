## To Do API
---

📝 Api de uma aplicação que permite o CRUD de tarefas e usuarios.

---

![Express](https://img.shields.io/badge/-Express-242424?style=for-the-badge&logo=express&logoColor=e82c2f)
![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=for-the-badge&logo=Node.js&logoColor=ffffff)
![Npm](https://img.shields.io/badge/-npm-CB3837?style=for-the-badge&logo=npm)
![Npm](https://img.shields.io/badge/-Express-2fc3e0?style=for-the-badge&logo=sqlite&logoColor=FFFFFF)


 ## 📌 Como instalar? 

- Faça o fork do projeto em seu computador.

``` 
git clone https://github.com/NicolasCardia/Todo-projectNode.git 
```
- Rode o seguinte comando no terminal do VSCode e ele irá baixar.todas as dependencias necessarias para que a API rode sem intercorrencias.

``` 
npm install body-parser
npm install express
npm install nodemon
npm install sqlite3

```

- Após isso, a porta na qual o servidor está configurada no arquivo "app.js" pela porta 3000, caso queira mudar, é só mudar a variavel port da linha 5.

- Rode o comando no console e o servidor ficará ligado e pronto para utilizar as CRUD's.

``` 
npm start
```


<br>
<br>


<strong><p style="text-align: center; font-size: 1.5rem; ">  🛣️ Rotas disponiveis </p> </strong>

- listar todos os usuarios:



``` js
GET: http://localhost:3000/usuarios 
// resultado
[
  {
    "ID": 1,
    "NOME": "Eugênio Oliveira",
    "EMAIL": "eugenio.oliveira@bol.com.br",
    "SENHA": "*******"
  },
  {
    "ID": 2,
    "NOME": "Olívia Ribeiro",
    "EMAIL": "olivia.ribeiro@gmail.com",
    "SENHA": "********"
  },
  {
    "ID": 3,
    "NOME": "Mirtes Faria Lima",
    "EMAIL": "mirtes_fl@yahoo.com",
    "SENHA": "********"
  },
  {
    "ID": 21,
    "NOME": "nicolas",
    "EMAIL": "agoraFOI@gmail.com",
    "SENHA": "********"
  }
]
```

- listar um usuario pelo id:



``` js
GET: http://localhost:3000/usuarios/1 (exemplo id) 
// resultado
  {
    "id": 1,
    "name": "Eugenio Oliveira",
    "email": "eugenio.oliveira@bol.com.br",
    "password": '*******'
  }

```

- Deletando um usuario pelo id:



``` 
DELETE: http://localhost:3000/usuarios/:id
```

- Editando um usuario pelo id:



``` 
PUT: http://localhost:3000/usuarios/:id
```


- Criando um usuario:



``` 
POST: http://localhost:3000/usuarios/create
```

--------------------tarefas-------------------

- listar todas as tarefas:


``` js
GET: http://localhost:3000/tarefas 
// resultado
[[
  {
    "ID": 2,
    "TITULO": "Médico",
    "DESCRICAO": "Consulta com Dr. Ayrton sexta",
    "STATUS": "TODO",
    "DATACRIACAO": "2021-01-13",
    "ID_USUARIO": 1
  },
  {
    "ID": 3,
    "TITULO": "Pagar contas",
    "DESCRICAO": "Pagar boletos de água e luz",
    "STATUS": "DOING",
    "DATACRIACAO": "2021-01-02",
    "ID_USUARIO": 2
  },
  {
    "ID": 5,
    "TITULO": "Dentista",
    "DESCRICAO": "Consulta com Dra Andreia sexta",
    "STATUS": "TODO",
    "DATACRIACAO": "2021-01-11",
    "ID_USUARIO": 1
  },
  {
    "ID": 6,
    "TITULO": "Pagar financiamento carro",
    "DESCRICAO": "Pagar parcela do mês do financiamento",
    "STATUS": "Contínuo",
    "DATACRIACAO": "2021-01-05",
    "ID_USUARIO": 3
  },
  {
    "ID": 12,
    "TITULO": "Yoga",
    "DESCRICAO": "Fazer yoga segunda e quarta",
    "STATUS": "Continuo",
    "DATACRIACAO": "2021-01-10",
    "ID_USUARIO": 1
  },
  {
    "ID": 13,
    "TITULO": "Fazer bolo",
    "DESCRICAO": "Fazer um bolo de chocolate para o café",
    "STATUS": "TODO",
    "DATACRIACAO": "2021-04-10",
    "ID_USUARIO": 5
  }
]
```

- listar uma tarefa pelo id:



``` js
GET: http://localhost:3000/tarefas/13 (exemplo do id)
// resultado
{
  "ID": 13,
  "TITULO": "Fazer bolo",
  "DESCRICAO": "Fazer um bolo de chocolate para o café",
  "STATUS": "TODO",
  "DATACRIACAO": "2021-04-10",
  "ID_USUARIO": 5
}
```

- Deletando uma tarefa pelo id:



``` 
DELETE: http://localhost:3000/tarefas/:id
```

- Editando uma tarefa pelo id:



``` 
PUT: http://localhost:3000/tarefas/:id
```


- Criando uma tarefa:



``` 
POST: http://localhost:3000/tarefas
```


This template was inspired from [Vitor Vaz](https://github.com/Vitor-Vaz)'s template.



