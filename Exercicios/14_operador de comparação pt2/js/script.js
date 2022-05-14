var numero = 5;
if(numero===5){
    console.log('O numero é 5');
}
//usamos === para verificar se o valor é exatamente igual

var numero2 = '6';
if(numero2===6){ 
    console.log('O numero é 6');
}
// aqui o valor da variavel é uma string no caso '6' então a condição não é declarada no console pois '6' é uma string e 6 e um Number, no caso os 2 não sao iguais

var numero3 = 7;
if(numero3==7){
    console.log('O numero é 7');
}
// aqui o valor da varial está sendo declarado pois na condição estamos pedindo se a variavel tem o mesmo valor mesmo não sendo identica a variavel, no caso elas tem o valor 7 em comum, por isso a condição é declarada.

if(numero3!==7){
    console.log('Não é o numero 7 do tipo Number');
}