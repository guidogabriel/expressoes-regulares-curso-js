const { texto } = require('./base');

var regExp1 = /João/gi;
//console.log(texto.match(regExp1));

//console.log(texto.replace('João','Felipe'));

//console.log(texto.replace(/(João|Maria)/gi, '<b>$1</b>'));

 console.log(texto.replace(/(João|Maria)/gi, function(input) {
   return ' ############## ' + input.toUpperCase() + ' ############## ';
 }));