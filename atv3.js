let NomeDoAluno = ['Marcel','Rita','Franklin','Afrânio']

for(let nome of NomeDoAluno) {
    console.log('Esta pessoa se chama '+nome)

}

let NumeroDeAlunos = 10

//for(let contador = 0; contador <= NumeroDeAlunos; contador ++){
//    if (contador == 0){
//        console.log("O número atual é zero.")
//    }else if(contador % 2 == 0){
//        console.log("O número "+contador+" é par")
//    }else{
//        console.log('O número '+contador+' é ímpar')
//    }
//}

let contador = 0
while (contador <= NumeroDeAlunos) {
    if (contador == 0){
        console.log("O número atual é zero.")
    }else if(contador % 2 == 0){
        console.log("O número "+contador+" é par")
    }else{
        console.log('O número '+contador+' é ímpar')
    }
    contador ++;
}

