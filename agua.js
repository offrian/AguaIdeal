function litroAgua() {

    var kg = document.getElementById("valorkg").value;
    var calculo = kg * 35;
    var divisao = calculo / 1000
    var result = divisao.toFixed(1);

    var resultcomL = document.getElementById("resultfim");
    text = "" + result + "L";

    document.getElementById("resultfim").innerHTML = text;
}

function limpar(){
    const apagarvalor = document.querySelector('#valorkg')
    const apagartotal = document.querySelector('#resultfim')
    apagarvalor.value = "";
    apagartotal.innerHTML = "&nbsp;";
}
