/* 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; */


let fraseDigitada, fraseInvertida = ""

fraseDigitada = prompt("Digite uma palavra ou frase:")

for (let i = fraseDigitada.length - 1; i >= 0; i--) {
  
  fraseInvertida = fraseInvertida + fraseDigitada[i]
  
}

console.log(`Frase Digitada: ${fraseDigitada}`);
console.log(`Frase invertida: ${fraseInvertida}`);

