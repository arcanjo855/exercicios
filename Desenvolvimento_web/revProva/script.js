window.onload = function(){    
    let bnt1 = document.getElementById("cadastrar")
    bnt1.onclick = function(){
        cad();}
    let bnt2 = document.getElementById("adicionar")
    bnt2.onclick = function(){
        add();    }}
    let bnt3 = document.getElementById("showCad")
        bnt3.onclick = function(){
        showCad();}


let nomeProd = []
let codProd = []
let precProd = []

function cad(){
    
    nomeProd = document.getElementById("nome").value
    codProd = parseInt(document.getElementById("codigo").value)
    precProd = parseFloat(document.getElementById("preco").value)
    console.log(nomeProd,codProd,precProd)
}

function showCad(){
    let a
    if (a==1){
        document.getElementById("cadas").style.display="inline";
        return a = 0
    }
    else{
        document.getElementById("cadas").style.display="none";
        return a = 1
    }
}


