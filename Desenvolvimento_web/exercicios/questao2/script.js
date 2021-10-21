// declarando variaveis
var catB = 0

// criando o loop

while (confirme != false){
    var nome = prompt("Digite o nome do motorista")
    var cat = prompt("Digite a categoria da CNH")
    var pontos = prompt("Digite a quantidade de pontos")
    if (cat == 'b' && pontos > 19){
        catB ++ 
    }
    var confirme = Boolean(confirm("deseja continuar adicionando motoristas?"))
    if (confirme == true){
        continue
    }
}

// mostrando o resultado


alert("A quantidade de pessoas da categoria b com pontos acima de 19 sao: " + catB)