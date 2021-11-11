
window.onload = function(){    
    let bnt1 = document.getElementById("+")
    bnt1.onclick = function(){
        calcMais();    
    }
    let bnt2 = document.getElementById("-")
    bnt2.onclick = function(){
        calcMenos();    
    }
    let bnt3 = document.getElementById("*")
    bnt3.onclick = function(){
        calcMult();    
    }
    let bnt4 = document.getElementById("/")
    bnt4.onclick = function(){
        calcDivi();    
    }
}



function calcMais(){
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    document.getElementById("resultado").value = num1 + num2  
}
function calcMenos(){
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    document.getElementById("resultado").value = num1 - num2 
}
function calcMult(){
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    document.getElementById("resultado").value = num1 * num2   
}
function calcDivi(){
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    document.getElementById("resultado").value = num1 / num2    
}




