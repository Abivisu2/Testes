
/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

let numeroDigitado 
let primeiroNumero = 0
let segundoNumero = 1
let somaDosValores = 0
let pertenceAosFibonacci 

numeroDigitado = Number(prompt("Digite um número, para ver se pertence ou não a um número Fibonacci: ")) 

if (isNaN(numeroDigitado)) {

  console.log(`O caractere digitado, não é um número!`)
  
}

if(numeroDigitado === 0 || numeroDigitado === 1){

  pertenceAosFibonacci = true

}else{
  while (somaDosValores < numeroDigitado) {
    
    somaDosValores = primeiroNumero + segundoNumero
    primeiroNumero = segundoNumero
    segundoNumero = somaDosValores

    if (somaDosValores === numeroDigitado) {

      pertenceAosFibonacci = true
      break;
    }

  }
}

if (pertenceAosFibonacci) {
  console.log(`O número que foi digitado ${numeroDigitado}, pertence à sequência de Fibonacci.`)
}else{
  console.log(`O número que foi digitado ${numeroDigitado}, Não pertence à sequência de Fibonacci.`)
}