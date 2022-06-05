/*
    Aula 2 - Introdução a Lógica de programação

    https://www.maisprati.com.br/

    - TIPO DE VARIÁVEL STRING
    - MÉTODOS PARA VARIÁVEL DO TIPO STRING
        - TAMANHO DA STRING
        - EXTRAÇÃO DE PARTES DE UMA STRING
        - SUBSTITUINDO UM VALOR ESPECÍFICO EM UMA STRING
        - CONVERTER PARA UPPER CASE OU LOWER CASE
        - REMOVER ESPAÇOS EM BRANCO DE UMA STRING
        - PREENCHIMENTO DE ESPAÇOS EM UMA STRING
        - CONVERTENDO UMA STRING EM UM ARRAY
    - TIPO DE VARIÁVEL ARRAY
    - MÉTODOS PARA VARIÁVEL DO TIPO ARRAY
        - COMO DECLARAR UM ARRAY
        - SABER O TAMANHO DE UM ARRAY
        - RETORNAR UMA STRING COM A LISTA
        - RETORNAR UMA STRING COM A LISTA, SEPARADA POR ALGUM CARACTER OU TEXTO
        - INCLUIR UM ELEMENTO NA LISTA
        - REMOVER O ULTIMO ELEMENTO DA LISTA
        - REMOVER O PRIMEIRO ELEMENTO DA LISTA
        - REMOVER UM ELEMENTO ESPECÍFICO
        - DEIXAR VAZIA UMA POSIÇÃO DA LISTA
        - ORDENAR OS ELEMENTOS DO ARRAY DE FORMA ASCENDENTE (A-z)
        - ORDENAR OS ELEMENTOS DO ARRAY DE FORMA DESCENDENTE (Z-a)

    - EXERCICIOS

*/ 
    console.log("Boa sorte!");

    //EXERCICIO PROPOSTO 1
    // Entrada: coletar 5 idades exibir a média 
    // Processamento: soma todos os valores e divide pelo 
    // número de idades dos dois valores
    // Saída: resultado da média dos valores
    
    var idades = [];
    idades.push(Number(prompt("Valor da idade 1? ")));
    idades.push(Number(prompt("Valor da idade 2? ")));
    idades.push(Number(prompt("Valor da idade 3? ")));
    idades.push(Number(prompt("Valor da idade 4? ")));
    idades.push(Number(prompt("Valor da idade 5? ")));

    var media = (idades[0]+idades[1]+idades[2]+idades[3]+idades[4])/idades.length;
    var somaidades = idades[0]+idades[1]+idades[2]+idades[3]+idades[4];

    console.log(" EP 01 => Soma de idades = ", somaidades.toFixed(2));
    console.log(" EP 01 => Nr. Elementos = ", idades.length);
    console.log(" EP 01 => Resposta = ", media.toFixed(2));

    //EXERCICIO PROPOSTO 2
    // Entrada: 1 nome 
    // Processamento: contar quantas letras tem o nome inserido
    // Saída: tamanho do nome, ex.: Nome possui 5 letras  

    var nome = prompt("Digite um nome ");
    var saida = nome + " possui " + nome.length + " letras";
    console.log(" EP 02 => Resposta = ", saida);


    //EXERCICIO PROPOSTO 3
    // Entrada: 1 nome
    // Processamento: contar quantas letras diferentes tem o nome inserido
    // Saída: tamanho do nome, ex.: Nome possui 5 letras diferentes

    //EXERCICIO PROPOSTO 4
    // Entrada: 1 lista de valores numéricos
    // Processamento: ordenar os valores da lista em ordem Ascendente
    // Saída: lista ordenada de valores numéricos
    
    var idades = [];
    idades.push(Number(prompt("Valor da idade 1? ")));
    idades.push(Number(prompt("Valor da idade 2? ")));
    idades.push(Number(prompt("Valor da idade 3? ")));
    idades.push(Number(prompt("Valor da idade 4? ")));
    idades.push(Number(prompt("Valor da idade 5? ")));
    idades.sort();
    console.log(" EP 04 => Resposta = ", idades);


     //EXERCICIO PROPOSTO 5
    // Entrada: 1 lista de nomes
    // Processamento: ordenar os valores da lista em ordem Descendente
    // Saída: lista ordenada de nomes
    
    var nomes = [];
    nomes.push(prompt("Digite um nome 1? "));
    nomes.push(prompt("Digite um nome 2? "));
    nomes.push(prompt("Digite um nome 3? "));
    nomes.push(prompt("Digite um nome 4? "));
    nomes.push(prompt("Digite um nome 5? "));
    nomes.sort().reverse();
    console.log(" EP 05 => Resposta Z-a = ", nomes);
    console.log(" EP 05 => Resposta A-z = ", nomes.sort());


     //EXERCICIO PROPOSTO 6
    // Entrada: lista = 'abacate,mamão,limão,abacaxi,laranja,bergamota';
    // Processamento: transformar a string lista em array e 
    //                ordenar os valores da lista em ordem Descendente
    // Saída: lista ordenada de nomes
    /*
    var lista = 'abacate,mamão,limão,abacaxi,laranja,bergamota';
    var arrOrdenado = lista.split(",");
    console.log(" EP 06 => Resposta Z-a = ", arrOrdenado.sort().reverse());
*/


// Comando 'if'
var a        = Number(prompt("Digite um valor para 'a'"));
var b        = (prompt("Digite um valor para 'b'"));
var operador = prompt("Digite um operador '+', '-', '*' ou '/' para fins de calculo");

if( a >= b ){
    if(a == b){
        console.log(a + " igual a " + b);
        if(a !== b){
            console.log(a +  " igual a " + b + " e tipo diferentes");
            console.log("O tipo de a = ", typeof(a));
            console.log("O tipo de b = ", typeof(b));
        }
    }
    else{
        console.log(a, " maior ou igual a ",b);
    }
} 
else{
    console.log(a, " menor que ",b);
}

if(operador != '+' && operador != '-' && operador != '*' && operador != '/'){
    console.log(operador," nao é válido!");
    console.log("Digite um operador '+', '-', '*' ou '/' para fins de calculo");
}

var resposta = null;
if(operador == '+'){
     resposta  = a+b;
}
else if(operador == '-'){
     resposta = a-b;    
}
else if(operador == '*'){
     resposta =  a*b;
}
else if(operador == '/'){
     resposta =  a/b;
}
else{
    console.log(operador," nao é válido!");
    console.log("Digite um operador '+', '-', '*' ou '/' para fins de calculo");
}


if(resposta != null){
    console.log("Resposta de ",a," ",operador," ", b," = ", resposta.toFixed(2));
}
