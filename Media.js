var notas = [];
var nome = 0;

nome = prompt("Digite o nome do Aluno: ")
for (var i = 0; i < 3; i++){
    notas[i] = parseFloat(prompt('Digite a nota n° ' + (i + 1)));
}

var media = 0;

for (var i = 0; i < 3; i++){
    media += notas[i];
}

media = media /3;

if(media >= 10){
    console.log("O Aluno", nome, "está aprovado com distinção média:", media);
}else if(media >= 7){
    console.log("O Aluno", nome, "está aprovado média:", media);
}else{
    console.log("O Aluno", nome, "está reprovado, média:", media)
}