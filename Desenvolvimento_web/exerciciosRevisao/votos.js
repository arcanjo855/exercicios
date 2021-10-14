let candidato1 = 0
let candidato2 = 0
let candidato3 = 0
let candidato4 = 0
let votosNull = 0
let votosBrancos = 0





while (voto != 0) {
    var voto = Number(prompt("Digite seu voto"));
    switch (voto) {
        case 1:
            candidato1 ++
            break;
        case 2:
            candidato2++;
            break;
        case 3:
            candidato3++;
            break;    
        case 4:
            candidato4++;
            break;
        case 5:
            votosNull++;
            break;
        case 6: 
            votosBrancos++;
            break;
       
    }
}

alert("Total de votos:\n candidato 1: " + candidato1 + 
"\n candidato 2: " + candidato2 + 
"\n candidato 3: " + candidato3 + 
"\n candidato 4: " + candidato4 + 
"\n votos nulos: " + votosNull +
"\n votos brancos: "+ votosBrancos)


