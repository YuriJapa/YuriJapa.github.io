function minhaFunção() {
    //O uso mais comum para saída de dados
    document.getElementById("demo")
    .innerHTML = "Parágrafo mudado.";

    //window.alert("Este é um alerta!");
    //Uso mais comum para depuração de código
    console.log("Só apareço com o F12");
}

function minhaFunção2() {
    if (document.getElementById("demo1").innerText.length === 0){
        //Se demo1 está vazio, escreve dentro (inner) dele
        document.getElementById("demo1").innerHTML = 
        "Olá Dollinho!";
        document.getElementById("demo2").innerHTML = 
        "O melhor do Brasil. O melhor!";  
        document.querySelector("#divCentral").style.border = "2px solid crimson";
    }else{
        //Senão, apaga o texto
        document.getElementById("demo1").innerHTML = "";
        document.getElementById("demo2").innerHTML = "";
        document.querySelector("#divCentral").style.border = "None";
    }

  }