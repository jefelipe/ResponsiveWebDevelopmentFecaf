
//importe das dependencias do projeto
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


//instancia da classe express
const app = express();

//request = receber uma requisição
//response = enviar dados/reposta para requisição


//restrições do cors -  responsavel pela segurança
app.use((request, response, next) => {
    //DEFINE A ORIGEN DA REQUISIÇÃO
    response.header('Access-Control-Allow-Origin', '*');
    //DEFINE QUAIS AÇÕES QUE A API IRÁ REALIZAR
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS' );
    
    app.use(cors());
    next();

});

//Endpoint
//versionando os endpoints da API
    //verção + nome do projeto + ação
//Endpoint =  retorna livros
app.get('/v1/livraria/livro', cors(), async function(request, response){
    let livros = {
        nome : 'Harry Potter',
        valor: 50
    };

    response.json(livros);
    response.status(200);
});


//permite que a API fique aguardando as requisições
app.listen(8080, function(){
    console.log('API de livros aguardando requisições')
});