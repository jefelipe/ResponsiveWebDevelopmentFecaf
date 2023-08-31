/****************************************
 * Objetivo: Criar a primeira APi utilizando o metodo Get
 * 10/06/2023
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

//EndPoint
app.get('/lista/filmes', cors(), async function(request, response){
    let filmes = { filmes: 
                            [
                                {id: 1, nome : 'Jhown wiki'},
                                {id: 2, nome : 'Senhor dos aneis'},
                                {id: 3, nome : 'Death note'},
                                {id: 4, nome : 'God of war'},
                            ]
                };
    response.json(filmes);
    response.status(200);
});


app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080');
});


