let spaceshipName = prompt("Qual o nome da Nave?")

let newSpaceshipName = ""

for (let i = spaceshipName.length - 1; i >= 0; i--) {
    if (spaceshipName[i] == "e") {
        break
    }
    newSpaceshipName += spaceshipName[i]
}

alert("Nome original da nave: " + spaceshipName + "\nNome após ocultação: " + newSpaceshipName)






//vamos fazer a contagem dos caracteres com "spaceshipName.length"
//vamos supor que o nome da variavel seja (Elemental)
//Nota que ela tem: total de 9 caracteres (o zero é contado)
// E l e m e n t a l
// 0 1 2 3 4 5 6 7 8
//vamos colocar o numero de caracteres que nesse caso vai dar "9" - 1; 
//sempre for maior ou igual a posição ">=" a 0, vamos decrementar (diminuir 1 caractere)
//tendo como retorno "latnemelE"

//usamos o "if" tambem para que se tiver o caracter (PROIBIDO) a execução seja parada com o "break"