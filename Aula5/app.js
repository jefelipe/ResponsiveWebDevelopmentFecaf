/****************************************
 * Objetivo: Criar a primeira APi utilizando o metodo Post
 * 21/06/2023
 * Autor: Jean Felipe
 * Versão: 1.0
 ****************************************/

//Import das dependencias a semrem utilizadas no projeto
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Instanciando o objetodo express
const app = express();

//Request - requisições (solicitações que vão chegar para a API)
//Response - Respostas que a API irá realizar tendo como base as requisições

//função para atribuir permissões de acesso na API
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS');

    app.use(cors());

    next();
});

//define que o formato de dados chegará no Post será do tipo json
const bodyParserJSON = bodyParser.json();
//Import da controller do aluno
const controllerAluno = require('./controller/controllerAluno.js')

//EndPoint
app.post('/aluno', cors(), bodyParserJSON, async function(request, response){
    let dados = request.body;
    //import da controller do aluno
    

    let result = await controllerAluno.inserirAluno(dados);

    if(result){
        response.status(201);
        response.json();
    }else{
        response.status(400);
        response.json();
    }

    
})


//Endpoint: listar aluno
app.get('/aluno', cors(), async function(request, response){
    let dadosAluno = await controllerAluno.listarAlunos();

    if (dadosAluno){
        response.status(200);
        response.json(dadosAluno);
    }else{
        response.status(404);
        response.json({message: 'Não foram encontrados registros no banco de dados!'})
    }
    
});


//Endpoint: buscar aluno pelo id
app.get('/aluno/:id', cors(), async function(request, response){

    let idAluno = request.params.id;
    //verifica se o id foi informado na requisição
    if (idAluno == '' || idAluno == undefined || typeof(idAluno) != 'number'){
        response.status(200);
        response.json({messaeg:'O id deve ser informado na requisição!!!'});
    }else{
        //Encaminha a chamada para a controller filtrar pelo ID
        let dadosAluno = await controllerAluno.buscarAluno(idAluno);

    if (dadosAluno){
        response.status(200);
        response.json(dadosAluno);
    }else{
        response.status(404);
        response.json({message: 'O id informado não foi encontrado no banco de dados!!!'})
    }
    }


})

//Endpoint: Alterar aluno
app.put('/aluno/:id', cors(), bodyParserJSON, async function(request, response){

    let idAluno = request.params.id;
    let dados = request.body;

    let result = controllerAluno.atualizarAluno(dados, idAluno);

    if(result){
        response.status(200);
        response.json();
    }else{
        response.status(400);
        response.json({message : 'Não foi possivel atualizar os dados no banco de dados!!!'})
    }
});

//Endpoint: Excluir aluno
app.delete('/aluno/:id', cors(), async function (request, response){
    let idAluno = request.params.id;

    let result = controllerAluno.excluirAluno(idAluno);

    if(result){
        response.status(200);
        response.json();
    }else{
        response.status(400);
        response.json({message : 'Não foi possivel excluir os registros do banco de dados!!!'})
    }
})


app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080');
});