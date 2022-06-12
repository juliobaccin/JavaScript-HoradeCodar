var obj = { // sintaxe para criar objeto
    nome:'julio',
    idade: 29,
    profissao: 'programador',
    estaTrabalhando: true,
};

console.log(obj);

console.log(typeof obj); //tipo da variavel

console.log(obj.nome); // pegando objetos de maneira indivi
console.log(obj.idade);
console.log(obj.profissao);

console.log('O meu nome é ' + obj.nome); // declarando em concatecação

obj.nome = 'tiago'; // atribuindo outro valor a variável
obj.idade = 30;


console.log(obj.nome);

console.log(obj);

obj.graduação = true; // declarando um novo valor para o objeto

console.log(obj);