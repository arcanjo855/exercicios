
window.onload = function(){
    let bnt = document.getElementById("botao")
    bnt.onclick = function(){
        calcImposto();
    }
}



function calcImposto(){
    var salario = parseFloat(document.getElementById("salario").value)
    if(salario <1434 ){
        document.getElementById("imposto").value = "Isento de impostos " 
    }else if(salario < 2150){
        document.getElementById("imposto").value = "7,5% de aliquota" + "R$ " + (salario * (7.5/100))
    }else if(salario < 2866){
        document.getElementById("imposto").value = "15% de aliquota" + "R$ " + (salario * (15/100))
    }else if(salario < 3582){
        document.getElementById("imposto").value = "22,5% de aliquota" + "R$ " + (salario * (22.5/100))
    }else{
        document.getElementById("imposto").value = "27,5% de aliquota" + "R$ " + (salario * (27.5/100))
}}




