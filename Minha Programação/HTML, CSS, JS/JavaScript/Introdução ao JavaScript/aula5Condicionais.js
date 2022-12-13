let acessoPermitido;
let idade = 21;
if (idade >= 18) acessoPermitido = true;
else acessoPermitido = false;
console.log(acessoPermitido);

let dividendo = 12;
let divisor = 3;
let quociente = divisor != 0 ? dividendo / divisor : Infinity;
console.log(quociente);

let nota = 70;
let frequencia = 0.8;
let aprovado;
if(nota>=60) {
        if(frequencia >= 0.75) resultado = 'Aprovado';
        else resultado = 'reprovado por frequência';
    } else {
        if(frequencia >= 0.75) resultado = 'Reprovado por nota';
        else resultado = 'reprovado por nota e frequência';
    }
console.log(resultado);

let a=5, b=3, operador='*';
switch(operador) {
    case '+': resultado = a+b;
    break;
    case '-': resultado = a-b;
    break;
    case '*': resultado = a*b;
    break;
    case '/': resultado = a/b;
    break;
    default:
        console.log('operador inválido');
        resultado = null;
}
console.log(`resultado = ${resultado}`);