const { html2 } = require('./base');

// $1 $2 $3 <- Retrovisores \1 (como é usado o retrovisor dentro do match)

//  p Olá mundo
// <p>Olá mundo</p>

//const html3 = `<p data-teste='teste' class="teste teste">  Olá mundo</p> <p>Olá mundo</p> <div>Sou a div</div>`;

// console.log(html2);
//console.log(html2.match(/<(\w+)>.+?<\/\1>/g)); //match com html sem classes
//console.log(html3.match(/<(\w+).*?>.+?<\/\1>/g)); //match com html com classes simples
//console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g)); //match com html com quebra de linha
console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HAHA $3 HAHA $4'));