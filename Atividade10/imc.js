function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Magreza (Grau 0)";
  } else if (imc < 25) {
    return "Normal (Grau 0)";
  } else if (imc < 30) {
    return "Sobrepeso (Grau I)";
  } else if (imc < 40) {
    return "Obesidade (Grau II)";
  } else {
    return "Obesidade Grave (Grau III)";
  }
}

function mostrarResultado() {
  const peso = parseFloat(prompt("Digite seu peso (kg):"));
  const altura = parseFloat(prompt("Digite sua altura (m):"));

  const imc = calcularIMC(peso, altura);
  const classificacao = classificarIMC(imc);

  alert(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
}
