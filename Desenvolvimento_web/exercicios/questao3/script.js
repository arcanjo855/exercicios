// declarando variaveis


// criando o loop
while (sigla != 'XX' && sigla != 'xx') {
    var sigla = String(prompt("Digite a sigla do seu estado"))
    switch (sigla){
        case 'SP':
        case 'sp':
            alert('Paulista');
            break;
        case 'MG':
        case 'mg':
            alert('Mineiro');
            break;
        case 'RJ':
        case 'rj':
            alert('Carioca');
            break;
        case 'XX':
        case 'xx':
            break;
        default:
            alert("Outro estado")

    }
}
