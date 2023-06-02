/* 
 * Objetivo:Aplicação para realizar calculos matemáticos. (função que realiza calculos)
 * Data: 01/06/2023
 * Autor: Jean Felipe
 * Versão: 1.0
 * 
 *
*/

/*

Ao criar uma função devemos seguir os seguintes passos:
    - Definir as entradas da função
    - Definir o processamento da função
    - Definir qual o retorno da função
    - Uma função deve ser unica
        -Desmembrar uma função em varias;

    Existem 3 modelos de criação de função
    function
    Ex: function nomeDaFunção(variavel){

    }

    CallBack
    ex: const nomeDaFunção = function (variavel){

    }

    Arrow function
    ex: cont nomeDaFunção => {}
*/

//Retorna o resultado de uma operação matemática, com base em dois valores
const calculadora = function (numero1, numero2, tipoCalculo){
    //Recebe os argumentos da função
    let valor1 = numero1;
    let valor2 = numero2;
    let resultado;
    let operacao = String (tipoCalculo).toUpperCase();

    if(valor1 == '' || typeof(valor1) != 'number' || valor2 == '' || typeof(valor2) != 'number')
        return false;
    else{

    //Processamento da função
    if(operacao == 'SOMAR')
        resultado = valor1 + valor2;
    else if(operacao == 'SUBTRAIR')
        resultado = valor1 - valor2;
    else if(operacao == 'MULTIPLICAR')
        resultado = valor1 * valor2;
    else if(operacao == 'DIVIDIR')
        resultado = valor1 / valor2;
    else
        return false

    return Number(resultado);

    }   
}

let resultado = calculadora(10, 30, 'somar');

if(resultado)
    console.log(resultado);
else
    console.log('Não foi possivel realizar o calculo')