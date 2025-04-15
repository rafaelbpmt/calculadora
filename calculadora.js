const prompt = require('prompt-sync')();

function menu(){
    console.log('\n======CALCULADORA======\nDigite a operação desejada:\n1: Soma\n2: Subtração\n3: Multiplicação\n4: Multiplicação\n5: Sair\n=======================\n'); 
}
let escolhaOperacao;


do{
    menu();
    escolhaOperacao = Number(prompt('Escolha a operação digitando o número correspondente: '));

    if (escolhaOperacao === 5){
        console.log('Finalizando o programa...')
        break;
}

let primeiroNumero = Number(prompt('Digite o primeiro número: '));
let segundoNumero = Number(prompt('Digite o segundo número: '));

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