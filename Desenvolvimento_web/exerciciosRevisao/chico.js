let anos = 0
let chico = 1.50 
let ze = 1.10 

while (chico >= ze) {
    ze = ze + 0.03
    chico = chico + 0.02
    anos ++
}

console.log("Serão necessarios " + anos + " anos para que zé sejamaior que chico")