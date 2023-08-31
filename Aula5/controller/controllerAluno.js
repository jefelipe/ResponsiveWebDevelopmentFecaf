var aluno = require ('../model/aluno.js');

//Inserir novo Aluno
const inserirAluno = async function (dadosAluno){
    
    let result = await aluno.inserirAluno(dadosAluno);

    if(result)
        return true;
    else
        return false;

    
}

//Retorna todos os alunos
const listarAlunos = async function(){
    //chama função da model para buscar no banco de dados
    let dados = await aluno.selectAllAlunos();

    if (dados)
        return dados;
    else return false;
}

//Busca o aluno pelo id
const buscarAluno = async function(id){
    //chama função da model para buscar no banco de dados
    let dados = await aluno.selectByIdAluno(id);

    if (dados)
        return dados;
    else return false;
}

//Atualiza o Aluno
const atualizarAluno = async function (dadosAluno, id){
    //Recebe o ID
    let idAluno = id;

    //Adiciona o Id do aluno junto com os dados do JSON
    dadosAluno.id = idAluno;

    //Chama a função para atualizar os dados do aluno
    let result = await aluno.updateAluno(dadosAluno);

    if(result)
        return true;
    else
        return false;

    
}

//Excluir o aluno pelo id
const excluirAluno = async function(id){
    //chama função da model para buscar no banco de dados
    let result = await aluno.deleteAluno(id);

    if (result)
        return result;
    else return false;
}


module.exports = {
    inserirAluno,
    listarAlunos,
    buscarAluno,
    atualizarAluno,
    excluirAluno
}