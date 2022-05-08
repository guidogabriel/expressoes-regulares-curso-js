const { cpfs, cpfs2 } = require('./base');

// ^ -> Começa com
// $ -> Termina com
// [^] -> Negação
// m - multiline




const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
//console.log("Lista de cpfs: ------>  " + cpfs2);
//console.log(cpfs2.match(cpfRegExp));
console.log(cpfs2.match(cpfRegExp));


var cpf = '254.224.877-45';
//console.log(cpf.match(cpfRegExp));

cpf = ' 254.224.877-45';
//console.log(cpf.match(cpfRegExp));