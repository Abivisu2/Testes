/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar, onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  */

let percentualSP, percentualRJ, percentualMG, percentualES, percentualOutros
let valorTotalSP = 6783643, valorTotalRJ = 3667866, valorTotalMG = 2922988, valorTotalES = 2716548, valorTotalOutros = 1984953
let valorTotalMensal


valorTotalMensal = Number(valorTotalSP + valorTotalRJ + valorTotalMG + valorTotalES + valorTotalOutros)

percentualSP = (valorTotalSP / valorTotalMensal) * 100
percentualRJ = (valorTotalRJ / valorTotalMensal) * 100
percentualMG = (valorTotalMG / valorTotalMensal) * 100
percentualES = (valorTotalES / valorTotalMensal) * 100
percentualOutros = (valorTotalOutros / valorTotalMensal) * 100

console.log(`O percentual de representação que cada estado teve dentro do valor mensal da distribuidora é de: \n\nPercentual de representação de São Paulo: ${percentualSP.toFixed(2)} \nPercentual de representação do Rio de Janeiro: ${percentualRJ.toFixed(2)} \nPercentual de representação de Minas Gerais: ${percentualMG.toFixed(2)} \nPercentual de representação do Espírito Santos: ${percentualES.toFixed(2)} \nPercentual de representação de outros estados: ${percentualOutros.toFixed(2)}`)
