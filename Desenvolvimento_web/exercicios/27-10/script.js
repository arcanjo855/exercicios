
window.onload = function(){
    let bnt = document.getElementById("botao")
    bnt.onclick = function(){
        totalCompras();
    }
}


 function totalCompras(){
    var compras = parseFloat(document.getElementById("compras"))
    var parcelas = parseInt(document.getElementById("parcelas"))
    var juros = 0
    switch(parcelas){
        case 2:
            juros = 3;
            break;
        case 3:
            juros = 7;
            break;

    }
    total = parseFloat(compras + ((juros/100) * compras))
    console.log("O valor total da compra foi: " + total)
}