function litroAgua() {

    var kg = document.getElementById("valorkg").value;
    var calculo = kg * 35;
    var divisao = calculo / 1000
    var result = divisao.toFixed(1);

    var resultcomL = document.getElementById("resultfim");
    text = "" + result + "L";

    document.getElementById("resultfim").innerHTML = text;
    
    var height = document.getElementById('height').value
    var final= kg / height * 2;
    var imc= final * 100;
    if(imc<18.5){
      window.alert("frango desnutrido")
    }
    else if (imc<24.9){
      window.alert("frango")
    }
    else if (imc<29.9){
      window.alert("frango graudo")
    }
    else if (imc<39.9){
      window.alert("mini monstro")
    }
    else if (imc>39.9){
      window.alert("monstro")
    }
}

function limpar(){
    const apagarvalor = document.querySelector('#valorkg')
    const apagartotal = document.querySelector('#resultfim')
    apagarvalor.value = "";
    apagartotal.innerHTML = "&nbsp;";
}
