const prompt = require('prompt-sync')();
const magenta = '\x1b[35m';
function menu(){
    console.log('\x1b[35m======CALCULADORA======\x1b[0m')
    console.log('Digite a opção desejada:')
    console.log('\x1b[33m1: Soma\x1b[0m')
    console.log('\x1b[33m2: Subtração\x1b[0m')
    console.log('\x1b[33m3: Multiplicação\x1b[0m')
    console.log('\x1b[33m4: Divisão\x1b[0m')
    console.log('\x1b[31m5: Sair\x1b[0m')
    console.log('\x1b[36m=======================\x1b[0m')
}
let escolhaOperacao;


do{
    menu();
    escolhaOperacao = Number(prompt('Escolha a operação digitando o número correspondente: '));
    console.log('\n');

    if (escolhaOperacao === 5){
        console.log('Finalizando o programa...')
        break;
}

let primeiroNumero = Number(prompt('Digite o primeiro número: '));
let segundoNumero = Number(prompt('Digite o segundo número: '));
console.log('\n');


switch (escolhaOperacao){
    case 1:
        console.log('Resultado: ' + (primeiroNumero + segundoNumero));
        break;
    case 2:
        console.log('Resultado: ' + (primeiroNumero - segundoNumero));
        break;
    case 3:
        console.log('Resultado: ' + (primeiroNumero * segundoNumero));
        break;
    case 4:
        console.log('Resultado: ' + (primeiroNumero / segundoNumero));
        break;
    default:
        console.log('[ERRO]: Opção inválida!')
}
    } while(true)