/*
    Aula 1 - Introdução a Lógica de programação

    https://www.maisprati.com.br/

    - VARIÁVEIS
        - TIPOS DE VARIÁVEL
        - MÉTODOS PARA VARIÁVEL DO TIPO NUMBER
        - CONVERSÕES NUMÉRICAS
    - SAIDAS DE DADOS/TEXTO
    - ENTRADAS DE DADOS/TEXTO
    - OPERADORES MATEMÁTICOS
    - COMPARADORES
    - OPERADORES LÓGICOS
    - OPERADOR TERNÁRIO OU CONDICIONAL
    - EXERCICIOS


*/
    //VARIÁVEIS
    // COMO DECLARAR
        let minhavariavel = "Olá mundo";      //variável tipo string
        var minhaoutravariavel = 100;         //variável tipo number
        const minhaconstante = 50;            //constante tipo number 
        umavriavelqualquer = true;            //variável tipo boolean
        var variavelarray = ['1','2','3'];    //variável tipo array
        var objeto = {nome:"Aluno",idade:20}; //variável tipo objeto

    //SABER O TIPO DE UMA VARIÁVEL
        typeof(objeto);
        
        typeof "John"                   // Retorna string
        typeof 3.14                     // Retorna number
        typeof NaN                      // Retorna number
        typeof false                    // Retorna boolean
        typeof [1, 2, 3, 4]             // Retorna object
        typeof {nome:'Joao', idade:34}  // Retorna object
        typeof new Date()               // Retorna object
        typeof function () {}           // Retorna function
        typeof variavel                 // Retorna undefined (se variavel não estiver declarada)
        typeof null                     // Retorna object        
        

    //MÉTODOS PARA VARIÁVEL DO TIPO NUMBER
    //.toString() retorna um número como um string
        var x = 321;
        var texto = x.toString();
        console.log(texto);

    //.toExponential(2) retorna uma string com número conforme notação exponencial
        var x = 9.956;
        x.toExponential(2);
        x.toExponential(4);
        x.toExponential(6);

    //.toFixed(0) retorna uma string com o nr de casas decimais
        var x = 9.956;
        x.toFixed(0);
        x.toFixed(2);
        x.toFixed(4);
        x.toFixed(6);

    //.toPrecision() retorna um número arredondado com tamanho específico
        var x = 9.656;
        x.toPrecision();
        x.toPrecision(2);
        x.toPrecision(4);
        x.toPrecision(6);

    //CONVERSÕES NUMÉRICAS
    //Number
        Number(true);
        Number(false);
        Number("10");
        Number("  10");
        Number("10  ");
        Number(" 10  ");
        Number("10.33");
        Number("10,33");
        Number("10 33");
        Number("Joao");

    //parseInt()
        parseInt("-10");
        parseInt("-10.33");
        parseInt("10");
        parseInt("10.33");
        parseInt("10 20 30");
        parseInt("10 years");
        parseInt("years 10");

    //parseFloat()
        parseFloat("10");
        parseFloat("10.33");
        parseFloat("10 20 30");
        parseFloat("10 years");
        parseFloat("years 10");

    //SAIDAS DE DADOS/TEXTO
        console.log("seu texto ou uma variável");
        alert("seu texto ou uma variável");
        document.write("seu texto ou uma variável");

    //ENTRADA DE DADOS/TEXTO
        prompt("DIGITE SEU NOME", "SEU NOME");

    
        //OPERADORES MATEMÁTICOS
            +	ADIÇÃO
            -	SUBTRAÇÃO
            *	MULTIPLICAÇÃO
            **	EXPONENCIAÇÃO (ES2016)
            /	DIVISÃO
            %	MODULO (RESTO DA DIVISÃO)
            ++	INCREMENTO
            --	DECREMENTO
    */
   
        //Adição
       /* var valorA = 1;
        var valorB = 1;
        var valorC = valorA + valorB;
        console.log(" valorC = " , valorC);

        //Subtração
        /*var valorA = 1;
        var valorB = 1;
        var valorC = valorA - valorB;
        console.log(" valorC = " , valorC);        

        //Multiplicação
      /*  var valorA = 1;
        var valorB = 1;
        var valorC = valorA * valorB;
        console.log(" valorC = " , valorC);   

        //Divisão
       /* var valorA = 1;
        var valorB = 1;
        var valorC = valorA / valorB;
        console.log(" valorC = " , valorC);   

        //Modulo
      /*  var valorA = 5;
        var valorB = 2;
        var valorC = valorA % valorB;
        console.log(" valorC = " , valorC); 

        //Exponenciação
      /*  var valorA = 5;
        var valorB = 2;
        var valorC = valorA ** valorB;
        console.log(" valorC = " , valorC);

        //Incremento
      /*  var valorA = 5;
        valorA++;
        console.log(" valorA = " , valorA);       
        
        //Decremento
      /*  var valorA = 5;
        valorA--;
        console.log(" valorA = " , valorA);  
      /*  

        COMPARADORES 
         ==     IGUAL 
         ===    IGUAL E TIPO
         !=     DIFERENTE
         !==    DIFERENTE E TIPO
         >      MAIOR
         >=     MAIOR OU IGUAL
         <      MENOR
         <=     MENOR OU IGUAL

      */   
     
        // ==  IGUAL
       /* var v1 = "9";
        var v2 = 9;
        var resposta = ( v1 == v2 );
        console.log(" resposta = " , resposta);  

        // === IGUAL E TIPO
      /*  var v1 = "9";
        var v2 = 9;
        var resposta = ( v1 === v2 );
        console.log(" resposta = " , resposta); 

        // !=  DIFERENTE  
     /*   var v1 = "9";
        var v2 = 9;
        var resposta = ( v1 != v2 );
        console.log(" resposta = " , resposta);

        // !== DIFERENTE E TIPO
     /*   var v1 = "9";
        var v2 = 9;
        var resposta = ( v1 !== v2 );
        console.log(" resposta = " , resposta);
        
        
    
        //OPERADORES LÓGICOS 
                &&     AND 
                ||     OR
                !      NOT
        
        //  &&  AND
      /*      var v1 = "9";
            var v2 = 9;
            var resposta = ( v1 !== v2 ) && ( v1 != v2 );
            console.log(" resposta = " , resposta);

        //  ||  OR
      /*      var v1 = "9";
            var v2 = 9;
            var resposta = ( v1 !== v2 ) || ( v1 != v2 );
            console.log(" resposta = " , resposta);

        //  !  NOT
       /*     var v1 = "9";
            var v2 = 9;
            var resposta = !( v1 !== v2 ) ;
            console.log(" resposta = " , resposta);  


        // OPERADOR TERNÁRIO OU CONDICIONAL 
        //  (CONDIÇÃO) ? valor caso verdadeiro: valor caso falso;   
       /*     var a=1;
            var b=2;
            var c = (a>b) ? “A é maior que B” : “A é menor que B”;
            Conslole.log(“Resposta: “,c); 
       
    */

