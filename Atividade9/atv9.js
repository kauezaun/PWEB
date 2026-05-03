function calcularMaior(n1, n2, n3) {
  if(n1 > n2 && n1 > n3){
    return n1;
  }
  else if(n2 > n1 && n2 > n3){
    return n2;
  }
  else{
    return n3;
  }
}
let num1 = Number(prompt("digite o primeiro numero: "));
let num2 = Number(prompt("digite o segundo numero: "));
let num3 = Number(prompt("digite o terceiro numero: "));
let frase = prompt("Digite uma palavra ou frase para ver se é palindromo ou não:");
let palavra1 = prompt("Digite a primeira palavra para ver se é subconjunto:");
let palavra2 = prompt("Digite a segunda palavra para ver se é subconjunto:");
let entrada = prompt("Digite uma data (DD/MM/AAAA):");

let maior = (calcularMaior(num1,num2,num3));
let numeros = [num1, num2, num3];
numeros.sort((a, b) => a - b);

function ehPalindromo(texto) {
  // 1. padroniza (minúsculo)
  texto = texto.toLowerCase();

  // 2. remove espaços
  texto = texto.replace(/\s/g, "");

  // 3. inverte a string
  let invertido = texto.split("").reverse().join("");

  // 4. compara
  return texto === invertido;
}

function verificarSubconjunto(p1, p2) {
  // validação
  if (!p1 || !p2) {
    return "erro";
  }

  // padroniza (opcional, mas bom)
  p1 = p1.toLowerCase();
  p2 = p2.toLowerCase();

  // verifica se p2 está dentro de p1
  if (p1.includes(p2)) {
    return "é um subconjunto";
  } else {
    return "não é um subconjunto";
  }
}

function diaDaSemanaBR(data) {
  let partes = data.split("/");
  let d = new Date(partes[2], partes[1] - 1, partes[0]);

  let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  return dias[d.getDay()];
}
let resultado = verificarSubconjunto(palavra1, palavra2);

alert(maior);
alert(numeros);
if (ehPalindromo(frase)) {
  alert("É palíndromo");
} else {
  alert("Não é palíndromo");
}
alert(resultado);
alert(diaDaSemanaBR(entrada));

