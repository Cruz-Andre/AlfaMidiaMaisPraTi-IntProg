
    /*
    //Switch
    var teste = "MayspraTi";
    var br = '<br><br>';

    if(teste[2] == 'i') {
        document.write("Sim a terceira letra é <b>I</b> " + br);
    }
    else {
        document.write("Não a terceira letra é <b>" + teste[2] + "</b> " + br);
    }

    var alimento = prompt("Digite um tipo de alimento");
    var mensagem;
    switch(alimento) {
        case "Proteína" : 
            mensagem = "Carne, leite, aveia, amêndoas";
            break;
        
        case "Carboidrato" :
            mensagem = "Banana, Batata doce, feijão, pão";
            break;
        
        default : 
            mensagem = "Cuidado com a alimentação";
    }
    document.write(mensagem + br);
    */

    // for
    /*
    var br = '<br><br>';
    var nome = prompt("Digite seu Nome");
    var total = nome.length;
    var contaA = 0;
    for(var i = 0; i < total; i++) {
        var msg = "Letra conrrespondente a posição " + i + " = " + nome[i];
        //document.write(msg);
        //document.write(br);
        if (nome[i].toLowerCase() == 'a'){
            contaA++;
        }
    }
    document.write("Total de letras 'A' = " + contaA);
    */

    //For e While percorrendo um array
    /*
    var lista = "Banana, Batata doce, feijão, pão";
    var listArray = lista.split(',');
    console.log("Array antes ", listArray);
    for(var i = 0; i < listArray.length; i++) {
        listArray[i] = listArray[i].trim();
    }
    
    var i = 0;
    while(i < listArray.length){
        listArray[i] = listArray[i].trim(); 
        i++;
    }
    console.log("Array depois ", listArray);
    */

    //For e While adicionando valores num Array
    /*
    var nomeArr = [];
    console.log("Array antes ", nomeArr);
    for(var i = 0; i < 2; i++) {
        var nome = prompt("Digite seu Nome");
        nomeArr.push(nome);
    }
    
    var saida = true;
    while(saida) {
        var nome = prompt("Digite seu Nome");
        if(nome != "sair") {
            nomeArr.push(nome);
        }
        
        else 
        {
            console.log("Array antes ", nomeArr);
            nomeArr.sort();
            saida = false;
        }
    }
    console.log("Array depois ", nomeArr);
    */

    // para verificar palavras palindromo com for e while
    /*
    var palavra = prompt("Digite um Palindromo ou não");
    var palavraAntes = palavra;
    palavra = palavra.replace(/ /g,'');
    palavra = palavra.toUpperCase();
    var arrPalavra = palavra.split('');
    console.log(" Tamanho da palavra = " + palavra.length);
    console.log(" Tamanho do Array = " + arrPalavra.length);
    arrPalavra.reverse();
    var ehpalindromo = true;

    var i = 0;
    while(i < palavra.length && ehpalindromo) {
        if(palavra[i] != arrPalavra[i]) {
            ehpalindromo = false;
        }
        else {
            i++;
        }
    }
    /*
    for(var i = 0; i < arrPalavra.length; i++) {
        if(palavra[i] != arrPalavra[i]) {
            ehpalindromo = false;
        }
    }
    */
    /*
    if(ehpalindromo)
        console.log(palavraAntes + " é um palindromo");
    else
        console.log(palavraAntes + " Não é um palindromo");
    */

    var table = '<table border = 1>';
    var linhas = "";
    var colunas = "";
    var l = Number(prompt("Digite um numero de linhas"));
    var c = Number(prompt("Digite um numero de colunas"));
    for(var i = 0; i < l; i++) {
        linhas = linhas + "<tr>";
        colunas = "";
            for(var j = 0; j < c; j++) {
                cor = (j % 2 == 0)?'#990000':'000099';
                colunas = colunas + '<td style="background-color:' + cor + '"> ' + j + ' </td>';
            }
        linhas = linhas + colunas + "</tr>";
    }
    table = table + linhas + '</table>';
    document.write(table);