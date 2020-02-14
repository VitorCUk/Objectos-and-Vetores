/* Desafios para fortalecer alguns conceitos, entre eles:

Objetos;
Vetores.

*/

/*
Construção e impressão de objetos
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

Nome: Rocketseat

Cor: Roxo

Foco: Programação

Endereço:

Rua: Rua Guilherme Gembala
Número: 260
*/

var nome = "Rocketseat"
var cor = "Roxo"
var foco = "Programação"
var morada = "Rua: Rua Guilherme Gembala Número: 260"

/* Obs.: Para armazenar os dados de endereço da empresa você pode criar objetos intercalados, por exemplo:
const usuario = {
  nome: "Diego",
  empresa: {
    nome: "Rocketseat"
  }
}; */

// Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:

console.log(morada)


/*Vetores e objetos
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo: */

var programador = {
    nome: "Vitor",
    idade: 31,
    linguagens: [
        { nome: "html", especialidade: "Website" },
        { nome: "CSS", especialidade: "estilizacao" }
    ]
}

console.log(`O ${programador.nome},  tem a idade de ${programador.idade} e programa nas linguagens de ${programador.linguagens[0].nome} desde 2019.`)