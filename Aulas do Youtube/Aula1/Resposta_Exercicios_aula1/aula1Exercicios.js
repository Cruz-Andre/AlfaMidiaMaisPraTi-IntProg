/*
    Aula 1 - Introdução a Lógica de programação

    https://www.maisprati.com.br/

    - VARIÁVEIS
        - TIPO DE UMA VARIÁVEL
    - SAIDAS DE DADOS/TEXTO
    - ENTRADA DE DADOS/TEXTO
    - OPERADORES MATEMÁTICOS
    - COMPARADORES
    - OPERADORES LÓGICOS
    - OPERADOR TERNÁRIO OU CONDICIONAL
    - EXERCICIOS


*/ 
    console.log("Boa sorte!");
    //aqui estou declarando uma variável
    //var v1 = "9";
    //var v2 = 9;
    //aqui estou pergunto algo lógico para o interpretador
    //var resposta = ( v1 === v2 );
    //aqui mostro na console o resultado
    //console.log(" resposta = " , resposta); 




/*
    //EXERCICIO PROPOSTO 1
    // Entrada: 2 valores numéricos
    // Processamento: soma dos dois valores
    // Saída: resultado da soma dos valores 
    
    //entrada de dados
    var valor1 = prompt("digite um valor para valor 1");
    var valor2 = prompt("digite um valor para valor 2");
    //tratamento dos dados
    valor1 = Number(valor1);
    valor2 = Number(valor2);
    //processamento dos dados
    var valor3 = valor1+ valor2;
    //saída de dados 
    console.log("EXERCICIO PROPOSTO 1 => resultado = ", valor3);
*/

/*
    //EXERCICIO PROPOSTO 2
    // Entrada: 2 valores numéricos
    // Processamento: divisão dos dois valores
    // Saída: resultado da divisão dos valores 

    //entrada de dados
    var valor1 = prompt("digite um valor para valor 1");
    var valor2 = prompt("digite um valor para valor 2");
    //tratamento dos dados
    valor1 = Number(valor1);
    valor2 = Number(valor2);
    //processamento de dados
    var resposta = valor1/valor2;
    //saída de dados
    console.log("EXERCICIO PROPOSTO 2 => resultado = ", resposta.toFixed(2));
*/
/*
    //EXERCICIO PROPOSTO 3
    // Entrada: 2 valores numéricos
    // Processamento: Multiplicação dos dois valores
    // Saída: resultado da multiplicação dos valores 
    //entrada de dados
    console.log("EXERCICIO PROPOSTO 3");
    var valor1 = prompt("digite um valor para valor 1");
    var valor2 = prompt("digite um valor para valor 2");
    //tratamento dos dados
    valor1 = Number(valor1);
    console.log(" Valor 1 = ", valor1);
    valor2 = Number(valor2);
    console.log(" Valor 2 = ", valor2);
    //processamento de dados
    var resposta = valor1 * valor2;
    //saída de dados
    console.log("EXERCICIO PROPOSTO 3 => resultado = ", resposta.toFixed(2));
*/
/*
    //EXERCICIO PROPOSTO 4
    // Entrada: 2 valores numéricos
    // Processamento: Resto da divisão dos dois valores
    // Saída: resultado do resto da divisão dos valores 
    //entrada de dados
    console.log("EXERCICIO PROPOSTO 4");
    var valor1 = prompt("digite um valor para valor 1");
    var valor2 = prompt("digite um valor para valor 2");
    //tratamento dos dados
    valor1 = Number(valor1);
    console.log(" Valor 1 = ", valor1);
    valor2 = Number(valor2);
    console.log(" Valor 2 = ", valor2);
    //processamento de dados
    var resposta = valor1 % valor2;
    //saída de dados
    console.log("EXERCICIO PROPOSTO 4 => resultado = ", resposta);
*/

/*
    //EXERCICIO PROPOSTO 5
    // Entrada: 2 valores numéricos
    // Processamento: Cálculo IMC
    //                O índice é calculado da seguinte maneira: divide-se o 
    //                peso do paciente pela sua altura elevada ao quadrado. 
    //                Diz-se que o indivíduo tem peso normal quando o resultado 
    //                do IMC está entre 18,5 e 24,9.
    //                Fórmula: IMC = peso / (altura x altura)
    //
    // Saída: resultado do valor IMC     
    //entrada de dados
    console.log("EXERCICIO PROPOSTO 5");
    var valor1 = prompt("digite um valor para o peso");
    var valor2 = prompt("digite um valor para a altura");
        //tratamento dos dados
        valor1 = Number(valor1);
        console.log(" Peso   = ", valor1, " kg");
        valor2 = Number(valor2);
        console.log(" Altura = ", valor2, " m ");
    //processamento    
    var IMC = valor1 / (valor2 * valor2);
    //saida de dados
    console.log("EXERCICIO PROPOSTO 5 => IMC = ",  IMC.toFixed(2));
*/
    
/*
    //EXERCICIO PROPOSTO 6
    // Entrada: 1 nome da pessoa e 2 valores numéricos
    // Processamento: Cálculo IMC
    //                O índice é calculado da seguinte maneira: divide-se o 
    //                peso do paciente pela sua altura elevada ao quadrado. 
    //                Diz-se que o indivíduo tem peso normal quando o resultado 
    //                do IMC está entre 18,5 e 24,9.
    //                Fórmula: IMC = peso / (altura x altura)
    //
    // Saída: Nome digitado seguido do resultado do valor IMC
    //   Ex.: Fulano 18.5  
    //entrada de dados
    console.log("EXERCICIO PROPOSTO 6");
    var nome = prompt("digite seu nome ");
    var valor1 = prompt("digite um valor para o peso");
    var valor2 = prompt("digite um valor para a altura");
        //tratamento dos dados
        valor1 = Number(valor1);
        console.log(" Peso   = ", valor1, " kg");
        valor2 = Number(valor2);
        console.log(" Altura = ", valor2, " m ");
    //processamento    
    var IMC = valor1 / (valor2 * valor2);
    //saida de dados
    console.log(nome," ",  IMC.toFixed(2));
*/

    //EXERCICIO PROPOSTO 7
    // Entrada: 1 nome da pessoa e 2 valores numéricos
    // Processamento: Cálculo Troco 
    //                Manuel é dono de uma fruteira, ele recebe o nome do comprador 
    //                , recebe o valor em dinheiro e calcula o troco. 
    //                Ex.: Se Manuel recebesse uma nota de 200 Reais 
    //                e vendesse um produto que custa 15 Reais.
    //                como seria composto o troco desta venda:
    //                0 x R$ 200.00
    //                1 x R$ 100
    //                1 x R$ 50
    //                1 x R$ 20
    //                1 x R$ 10
    //                1 x R$ 5
    //                0 x R$ 1
    //                0 x R$ 0.50
    //                0 x R$ 0.25
    //                0 x R$ 0.10
    //                0 x R$ 0.05
    //                0 x R$ 0.01
    //
    // Saída: Nome digitado seguido do resultado do troco
    //   Ex.: Fulano  
    //                0 x R$ 200.00
    //                1 x R$ 100.00
    //                1 x R$ 50.00
    //                1 x R$ 20.00
    //                1 x R$ 10.00
    //                1 x R$ 5.00
    //                0 x R$ 1.00
    //                0 x R$ 0.50
    //                0 x R$ 0.25
    //                0 x R$ 0.10
    //                0 x R$ 0.05
    //                0 x R$ 0.01  
    //         ----------------------- 
    //            TROCO = R$ 185.00   

    //Solução do E.P. 07
        //entrada de dados
        console.log("EXERCICIO PROPOSTO 7");
        var nome  = prompt("Digite o Nome do Cliente ");
        var vprod = prompt("Digite o valor do produto");
        var vdinh = prompt("Digite o valor em dinheiro recebido do Cliente");

        //tratamento dos dados numéricos
        vprod = Number(vprod);
        vdinh = Number(vdinh);

        //processamento
        var troco = vdinh - vprod;
        
        var dn200 = (troco / 200);
        var tn200 = (dn200 > 0)?  parseInt(dn200) : 0; 
        var rn200 = (troco % 200);

        var dn100 = (rn200 / 100);
        var tn100 = (dn100 > 0 )? parseInt(dn100) : 0;
        var rn100 = (rn200 % 100);

        var dn50 = (rn100 / 50); // 1
        var tn50 = (dn50 > 0 )? parseInt(dn50) : 0;
        var rn50 = (rn100 % 50);  

        var dn20 = (rn50 / 20);
        var tn20 = (dn20 > 0)?  parseInt(dn20) : 0; 
        var rn20 = (rn50 % 20);

        var dn10 = (rn20 / 10);
        var tn10 = (dn10 > 0)?  parseInt(dn10) : 0; 
        var rn10 = (rn20 % 10);

        var dn5 = (rn10 / 5);
        var tn5 = (dn5 > 0)?  parseInt(dn5) : 0; 
        var rn5 = (rn10 % 5);

        var dn1 = (rn5 / 1);
        var tn1 = (dn1 > 0)?  parseInt(dn1) : 0; 
        var rn1 = (rn5 % 1);

        //..centavos, lembrar de usar .toFixed(2)
        var dn050 = (rn1 / 0.5);
        var tn050 = (dn050 > 0)?  parseInt(dn050) : 0; 
        var rn050 = (rn1.toFixed(2) % 0.5);

        var dn025 = (rn050 / 0.25);
        var tn025 = (dn025 > 0)?  parseInt(dn025) : 0; 
        var rn025 = (rn050.toFixed(2) % 0.25);

        var dn010 = (rn025 / 0.10);
        var tn010 = (dn010 > 0)?  parseInt(dn010) : 0; 
        var rn010 = (rn025.toFixed(2) % 0.10);

        var dn005 = (rn010 / 0.05);
        var tn005 = (dn005 > 0)?  parseInt(dn005) : 0; 
        var rn005 = (rn010.toFixed(2) % 0.05);

        var dn001 = (rn005 / 0.01);
        var tn001 = (dn001 > 0)?  parseInt(dn001) : 0; 
        var rn001 = (rn005.toFixed(2) % 0.01);

        //saida de dados
        console.log("Nome: ", nome);
        console.log("  Valor do Produto          : ", vprod);
        console.log("  Valor recebido em Dinheiro: ", vdinh);
        console.log("---------------------------------------");
        console.log(tn200 + " x R$ 200,00 ");
        console.log(tn100 + " x R$ 100,00 ");
        console.log(tn50  + " x R$ 50,00 ");
        console.log(tn20  + " x R$ 20,00 ");
        console.log(tn10  + " x R$ 10,00 ");
        console.log(tn5   + " x R$ 5,00 ");
        console.log(tn1   + " x R$ 1,00 ");
        console.log(tn050 + " x R$ 0,50 ");
        console.log(tn025   + " x R$ 0,25 ");
        console.log(tn010   + " x R$ 0,10 ");
        console.log(tn005   + " x R$ 0,05 ");
        console.log(tn001   + " x R$ 0,01 ");
        console.log("---------------------------------------");
        console.log(" Troco = " , troco.toFixed(2));

