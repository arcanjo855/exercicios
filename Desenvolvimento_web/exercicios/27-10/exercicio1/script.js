
window.onload = function(){
    let bnt = document.getElementById("botao")
    bnt.onclick = function(){
        totalCompras();
    }
}


function totalCompras(){
    var compras = parseFloat(document.getElementById("compras").value)
    var parcelas = parseInt(document.getElementById("parcelas").value)
    var juros = 0
    switch(parcelas){
        case 2:
        case 3:
            juros = 3;
            break;
        case 4:
            juros = 7;
            break;
    }
    
    document.getElementById("resultado").value = "valor total da compra R$" + (compras + compras * (juros / 100))

    
}