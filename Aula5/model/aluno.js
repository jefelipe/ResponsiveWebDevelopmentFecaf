//import da biblioteca do prisma client
var { PrismaClient} = require('@prisma/client');
//instancia do objeto Prismaclient()
var prisma = new PrismaClient();

//Inserir um novo aluno no db
const inserirAluno = async function(dadosAluno){

    let sql = `insert into tbl_aluno (
        nome,
        celular,
        email,
        cpf
    )values(
        '${dadosAluno.nome}',
        '${dadosAluno.celular}',
        '${dadosAluno.email}',
        '${dadosAluno.cpf}'
    )`;


//executa o script sql no banco de dados
let result = await prisma.$executeRawUnsafe(sql);

if(result)
    return true;
else
    return false;
}

//Retorna todos os alunos
const selectAllAlunos = async function(){
    //script sql
    let sql = `select * from tbl_aluno`;
    //executa no banco de dados o slq
    let rsAluno = await prisma.$queryRawUnsafe(sql);

    if(rsAluno.length > 0)
        return rsAluno;
    else return false;
}

//Retorna aluno pelo id
const selectByIdAluno = async function(id){
    //script sql
    let sql = `select * from tbl_aluno where id = ${id}`;
    //executa no banco de dados o slq
    let rsAluno = await prisma.$queryRawUnsafe(sql);

    if(rsAluno.length > 0)
        return rsAluno;
    else return false;
}

//Atualizar aluno no banco
const updateAluno = async function(dadosAluno){

    let sql = `update tbl_aluno set 
                    nome = '${dadosAluno.nome}',
                    celular = '${dadosAluno.celular}',
                    email = '${dadosAluno.email}',
                    cpf = '${dadosAluno.cpf}'
                where id = ${dadosAluno.id}
    `;


//executa o script sql no banco de dados
let result = await prisma.$executeRawUnsafe(sql);

if(result)
    return true;
else
    return false;
}

//Deletar aluno 
const deleteAluno = async function(id){

    let sql = `delete from tbl_aluno
                where id = ${id}
    `;


//executa o script sql no banco de dados
let result = await prisma.$executeRawUnsafe(sql);

if(result)
    return true;
else
    return false;
}

module.exports = {
    inserirAluno,
    selectAllAlunos,
    selectByIdAluno,
    updateAluno,
    deleteAluno
}