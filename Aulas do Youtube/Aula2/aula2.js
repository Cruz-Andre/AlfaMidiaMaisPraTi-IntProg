/*
    Aula 2 - Introdução a Lógica de programação
    URL: https://www.maisprati.com.br/


    + Editores para código usados nas aulas:

        VSCODE    : https://code.visualstudio.com/
        
        NOTEPAD++ : https://notepad-plus-plus.org/downloads/


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


//- MÉTODOS PARA VARIÁVEL DO TIPO STRING
// .length 
//- RETORNA O TAMANHO DA STRING
   var nome = "Nome";
   console.log("Tamanho da string = ",nome.length);

//- EXTRAÇÃO DE PARTES DE UMA STRING

// RETORNA PARTE DE UMA STRING DE ACORDO COM A POSIÇÃO start E end INFORMADA
// .slice(start, end)

// RETORNA PARTE DE UMA STRING DE ACORDO COM A POSIÇÃO start E end INFORMADA
// DIFERENÇA QUE O substring não aceita indices negativos
// .substring(start, end)

// RETORNA PARTE DE UMA STRING DE ACORDO COM A POSIÇÃO start E end INFORMADA
// DIFERENÇA QUE O SEGUNDO PARÂMETRO É O TAMANHO DE EXTRAÇÃO E NÃO A POSIÇÃO
// .substr(start, length)

//- SUBSTITUINDO UM VALOR ESPECÍFICO EM UMA STRING

// PROCURA E SUBSTITUI UM TEXTO EM UMA STRING (CASE SENSITIVE)
// .replace(search,replace)
var texto = "Texto para substituir o texto"
console.log(" Texto novo = " ,texto.replace('Texto',"Palavra"));

//  /TEXT/i
console.log(" Texto novo = " ,texto.replace(/Texto/i,"Palavra"));

//  /TEXT/g
console.log(" Texto novo = " ,texto.replace(/Texto/g,"Palavra"));

console.log(" Texto novo = " ,texto.replace(/Texto/gi,"Palavra"));


//- CONVERTER PARA UPPER CASE OU LOWER CASE
var texto = "Texto para substituir o texto"
console.log(" Texto original = " ,texto);

//CONVERTE PARA UPPER CASE
// .toUpperCase()
console.log(" Texto novo = " ,texto.toUpperCase());

//CONVERTE PARA LOWER CASE
// .toLowerCase()
console.log(" Texto novo = " ,texto.toLowerCase());

//- REMOVER ESPAÇOS EM BRANCO DE UMA STRING
var texto = "      Texto para substituir o texto    "
// REMOVER ESPAÇOS NO INÍCIO E NO FIM
// .trim()
console.log(" Texto novo = " ,texto.trim());

//- PREENCHIMENTO DE ESPAÇOS EM UMA STRING
var texto = "5";

// PREENCHE A PARTIR DO COMEÇO
// .padStart(TAMANHO,'O QUE PREENCHER')
console.log(" Texto novo = " ,texto.padStart(5,'0'));

// PREENCHE A PARTIR DO FIM
// .padEnd(TAMANHO,'O QUE PREENCHER')
console.log(" Texto novo = " ,texto.padEnd(5,'0'));

// - CONVERTENDO UMA STRING EM UM ARRAY
// .split('char')
//???????????????????????????????
var texto = 'Banana,Maça,Laranja,Abacate';
var ListaTexto = texto.split(',');
console.log("Minha Lista a partir do texto = " , ListaTexto);

/*
    TIPO DE VARIÁVEL ARRAY
        - COMO DECLARAR UM ARRAY
        - SABER O TAMANHO DE UM ARRAY
        - RETORNAR UMA STRING COM A LISTA
        - RETORNAR UMA STRING COM A LISTA, SEPARADA POR ALGUM CARACTER OU TEXTO
        - INCLUIR UM ELEMENTO NA LISTA
        - REMOVER O ULTIMO ELEMENTO DA LISTA
        - REMOVER O PRIMEIRO ELEMENTO DA LISTA
        - REMOVER UM ELEMENTO ESPECÍFICO
        - DEIXAR VAZIA UMA POSIÇÃO DA LISTA
        - ORDENAR OS ELEMENTOS DO ARRAY DE FORMA ASCENDENTE  (A-z)
        - ORDENAR OS ELEMENTOS DO ARRAY DE FORMA DESCENDENTE (Z-a)
*/






// TIPO DE VARIÁVEL ARRAY
/*
 Estrutura de dados que armazena uma coleção de elementos de tal forma que cada um dos 
 elementos possa ser identificado por, pelo menos, um índice ou uma chave. 
 Essa estrutura de dados também é conhecida como variável indexada, vetor e matriz.
*/
//- COMO DECLARAR UM ARRAY
var meuArray = ['Banana','Maça','Laranja','Abacate'];
var meuArrayVazio = [];
console.log(" meuArray = ",meuArray);

//- SABER O TAMANHO DE UM ARRAY
// RETORNA O TAMANHO DE UM ARRAY, NÚMERO DE ELEMENTOS DA LISTA
// .length
var tamanho = meuArray.length;
console.log("Tamanho do meuArray = ", meuArray.length);

//- RETORNAR UMA STRING COM A LISTA
// .toString()
console.log("Elementos do meuArray = ", meuArray.toString());

//- RETORNAR UMA STRING COM A LISTA, SEPARADA POR ALGUM CARACTER OU TEXTO
// .join()
console.log("Elementos do meuArray = ", meuArray.join('#'));

//- INCLUIR UM ELEMENTO NA LISTA
// .push(novo elemento)
meuArray.push("Kiwi");
console.log("Tamanho do meuArray = ", meuArray.length);
console.log("Elementos do meuArray = ", meuArray.join('#'));

//- REMOVER O PRIMEIRO ELEMENTO DA LISTA
// .shift()
var removido = meuArray.shift();
console.log("Tamanho do meuArray = ", meuArray.length);
console.log("Elementos do meuArray = ", meuArray.join('#'));
console.log("Elementos removido = ", removido);

//- REMOVER O ULTIMO ELEMENTO DA LISTA
// .pop()
var removido = meuArray.pop();
console.log("Tamanho do meuArray = ", meuArray.length);
console.log("Elementos do meuArray = ", meuArray.join('#'));
console.log("Elementos removido = ", removido);

//- DEIXAR VAZIA UMA POSIÇÃO DA LISTA
// delete meuArray[0];
var removido = meuArray[0];
delete meuArray[0];

console.log("Tamanho do meuArray = ", meuArray.length);
console.log("Elementos do meuArray = ", meuArray.join('#'));
console.log("Elementos removido = ", removido);

meuArray[0] = "Banana";
console.log("Tamanho do meuArray = ", meuArray.length);
console.log("Elementos do meuArray = ", meuArray.join('#'));
console.log("Elementos inserido = ", meuArray[0]);

//- ORDENAR OS ELEMENTOS DO ARRAY DE FORMA ASCENDENTE (A-z)
var meuArray = ['Banana','Maça','Laranja','Abacate'];
meuArray.sort();
console.log(" meuArray.sort() = ",meuArray.sort());

//- ORDENAR OS ELEMENTOS DO ARRAY DE FORMA ASCENDENTE (Z-a)
var meuArray = ['Banana','Maça','Laranja','Abacate'];
meuArray.reverse();
console.log(" meuArray.reverse() = ",meuArray);

//- UNIFICANDO LISTAS
var meuArray1 = ['Banana','Maça','Laranja','Abacate'];
var meuArray2 = ['Morango','Abacaxi','Bergamota','Uva'];
var meuArray = meuArray1.concat(meuArray1,meuArray2);
console.log(" meuArray1 = ",meuArray1);
console.log(" meuArray2 = ",meuArray2);
console.log(" meuArray.concat(meuArray1,meuArray2) = ",meuArray);


//TIPO OBJETO
//
var objeto = {};






/*
//EXERCICIO PROPOSTO 1
    // Entrada: coletar 5 idades exibir a média 
    var =
    // Processamento: soma todos os valores e divide pelo 
    // número de idades dos dois valores
    // Saída: resultado da média dos valores 


    //EXERCICIO PROPOSTO 2
    // Entrada: 1 nome 
    // Processamento: contar quantas letras tem o nome inserido
    // Saída: tamanho do nome, ex.: Nome possui 5 letras    

    //EXERCICIO PROPOSTO 3
    // Entrada: 1 nome
    // Processamento: contar quantas letras diferentes tem o nome inserido
    // Saída: tamanho do nome, ex.: Nome possui 5 letras diferentes

    //EXERCICIO PROPOSTO 4
    // Entrada: 1 lista de valores numéricos
    // Processamento: ordenar os valores da lista em ordem Ascendente
    // Saída: lista ordenada de valores numéricos

     //EXERCICIO PROPOSTO 5
    // Entrada: 1 lista de nomes
    // Processamento: ordenar os valores da lista em ordem Descendente
    // Saída: lista ordenada de nomes

     //EXERCICIO PROPOSTO 6
    // Entrada: lista = 'abacate,mamão,limão,abacaxi,laranja,bergamota';
    // Processamento: transformar a string lista em array e 
    //                ordenar os valores da lista em ordem Descendente
    // Saída: lista ordenada de nomes
   

*/