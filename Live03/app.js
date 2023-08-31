//cria um array vaziu
const listaDeNome = [];
//colocando no array vaziu
listaDeNome.push('jean');
listaDeNome.push('Sara');
listaDeNome.push('Maria');

//unshifit adiciona no inicio mas altera todos os outros
listaDeNome.unshift('Luana');


const listaDeProdutosFrutas = ['laranja', 'pera', 'maça', 'abacate', 'banana'];

//pop apaga o ultimo elemento do array
listaDeProdutosFrutas.pop();

//pop apaga o primeiro elemento do array
listaDeProdutosFrutas.shift();
//console.table(listaDeNome);

//console.log(listaDeProdutosFrutas);

const listaDeDisciplinas = ['Banco de dados', 'Lógica', 'Back-End', 'Front-End'];

const buscarProduto = function(item){
    if(listaDeDisciplinas.find(item) >= 0);
        console.log('Item encontrado');
    else
        console.log('Item não encontrado');
}





