alert("Olá mundo");
let numeroSecreto = 29;
console.log(numeroSecreto);
let tentativa = prompt("Adivinhe o número secreto entre 1 e 100");

while (tentativa != numeroSecreto) {
    alert("Que pena! Tente novamente:");
    tentativa = prompt("Adivinhe o número secreto entre 1 e 100");
}

alert(`Parabéns! Você acertou o número secreto ${numeroSecreto}.`);