
//Espera carregar todo o conteúdo HTML
window.onload = function(){
    alert("Alo Ha!");
    console.log("Se quiser ver, tem que pressionar F12! Console...");
    //Conectenação de strings com o símbolo + 
    console.log("a = " + a + " b = " + b);
    console.log("a + b = " + parseInt(a+b));
};

//Variável Global
var a = 2;
var b = 2;

    var entradas = document.querySelectorAll('input');
    var resposta = document.querySelector('.resposta');
    var botão = document.querySelector('#btnSomar');


pegaNúmero1 = function(){
    return entradas[0].value;
}

pegaNúmero2 = function(){
    return entradas[1].value;
}

testarEntradasVazias = function(){
    //Se entrada1 ou entrada2 for vazio, retorna Verdadeiro
    if(pegaNúmero1() === '' || pegaNúmero2() === '')
        return true;
    else
        return false;
}

somar = function(){
    if(testarEntradasVazias()){
        resposta.textContent = "Erro: Preencha os dois campos numéricos";
        resposta.classList.remove('correta');
        resposta.classList.add('errada');
        return false;
    }else{
        atualizaResposta();
        resposta.classList.remove('errada');
        resposta.classList.add('correta');
    }
}

atualizaResposta = function(){
    let num1 = pegaNúmero1();
    let num2 = pegaNúmero2();
    var soma = num1 + num2;
    resposta.textContent = num1 + ' + ' + num2 + ' = ' + soma;
}

    //Monitoramento do click no botão
    //Quando o botão for clicado, a função somar será chamada!
    botão.addEventListener('click',somar);
