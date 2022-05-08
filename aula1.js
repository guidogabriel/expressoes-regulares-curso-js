const { texto } = require('./base'); //o Arquivo base.js vai ser o arquivo que vamos utilizar com para ter o texto que vamos procurar com a expressão regular

//Flags
// g - global (encontra todas as ocorrências)
// i - insensitive (não checa letras maiusculas)

var regExp1 = /João/gi; //dentro das barras vem a expressão regular.

//Função test  testa se uma expressão existe dentro de um texto.

//console.log(regExp1.test(texto)); //Verificando se existe "João" no texto. Resutlado vai ser true

regExp1 = /João/g;                   //Pereceba que tirei a flag i
//console.log(regExp1.test(texto)); //Também vai retornar true porque existe tanto joão quanto João no texto

regExp1 = /teve 5 filhos/i;
//console.log(regExp1.test(texto)); // retorna true por causa da flag i

regExp1 = /teve 5 filhos/;
//console.log(regExp1.test(texto)); // retorna false porque no texto exsite "Teve 5 filhos", com T maiusculo


// () - grupos

//Função exec - é possível extrair coisas do texto
regExp1 = /teve 5 filhos/i;
//console.log(regExp1.exec(texto)); // retorna um objeto

regExp1 = /(maria)(, hoje sua esposa)/i;
//console.log(regExp1.exec(texto)); // retorna um objeto

const found = regExp1.exec(texto);
//console.log(found[0]);
//console.log(found[1]);
//console.log(found[2]);

// | caracter usado para "OU"
regExp1 = /(maria|joao)(, hoje sua esposa)/i; //vai retornar tudo que estiver no padrão "maria, hoje sua esposa" ou "joao, hoje sua esposa"
if (found) {
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
}