var idade = 17;
var nome = 'julio';

if(nome=='julio' && idade ==16){
    console.log('O julio pode dirigir uma patrola gabine dupla');
}else{
    console.log('O julio não pode dirigir uma patrola gabine dupla');
}
// Para que a primeira condição seja cumprida é necessario que a variavel tenha valor igual a 'julio' e idade também tenha valor igual a 16.
// Caso alguma das condições não seja cumprida, o sistema retornara a condição como false, aplicando a condição aplicada para else.

if((1==1 && 3>2) && true){
    console.log('Passou');
}
// Aqui a condição sera exibida pois 1 é igual a 1 e 3 e maior que 2 então temos 2 trues.

if((1==1 && 3>3) && true){
    console.log('Passou 2x');
}
// Aqui a condição não será exibida pois 3 não e maior que 3, logo teremos uma condição true e false que resultara em false e posteriomente uma condição logica && true, gerando assim um resultado false, pois true com false dará false.