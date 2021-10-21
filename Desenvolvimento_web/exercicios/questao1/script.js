// declarando variaveis

var num = Math.round(Math.random()*3)
var contagem = 1

// fazendo o loop

while(confirme != false){
    var digitado = Number(prompt("Chute um número"))      
    if (digitado > num){
        contagem ++
        alert("Número digitado maior que o sorteado")
        continue}
        else if(digitado < num){
            contagem ++
            alert("Número digitado menor que o sorteado")
            continue}
        else if(digitado == num){
        var confirme = Boolean(confirm("Número acertado, número de tentativas: " + contagem + " deseja continuar?"))}
        if (confirme == true){
            contagem = 1
            num = Math.round(Math.random()*3)
            continue
    }
}






