let cont = 0;
let media = 0;
let velho = 0;
let novo = Infinity;
let pessimo = 0;
let bom = 0;
let otimo = 0;
let homem = 0;
let mulher = 0;
while (cont < 45) {
  let idade = parseInt(prompt("Me informe sua idade"));
  if (idade > velho) velho = idade;
  if (idade < novo) novo = idade;
  media += idade;

  let sexo = prompt("Me informe seu sexo 1-(mulher) 2-(homem)");
  if(sexo ==1) mulher ++;
  else
    homem++;
  
  let opiniao = parseInt(prompt("Me informe sua opinião 1-'pessimo' 2-'regular' 3-'bom' 4-'ótimo'"));

  if (opiniao == 1) pessimo++;
  else if (opiniao == 3) bom++;
  else if (opiniao == 4) otimo++;

  cont++;
}

let porcentB = (bom / cont) * 100;
let porcentO = (otimo / cont) * 100;

alert(`A média das idades é: ${media / cont}`);
alert(`A maior idade informada foi: ${velho}`);
alert(`A menor idade informada foi: ${novo}`);
alert(`Quantidade de pessoas que responderam péssimo: ${pessimo}`);
alert(`Porcentagem de pessoas que responderam Bom: ${porcentB.toFixed(2)}%`);
alert(`Porcentagem de pessoas que responderam Ótimo: ${porcentO.toFixed(2)}%`);
alert(`Total de homens que responderam: ${homem} total de mulheres que responderam: ${mulher}`);
