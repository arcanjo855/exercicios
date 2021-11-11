
window.onload = function(){
    let bnt = document.getElementById("botao")
    bnt.onclick = function(){
        maiorNum();
    }
}



function maiorNum(){
    var num1 = parseInt(document.getElementById("valor1").value)
    var num2 = parseInt(document.getElementById("valor2").value)
    if(num1 > num2){
        document.getElementById("mensagem").value = "O primeiro valor é maior"
    }else if(num1 < num2){
        document.getElementById("mensagem").value = "O segundo valor é maior"
    }else if(num1 = num2){
        document.getElementById("mensagem").value = "Tem o mesmo valor"
    }

}


