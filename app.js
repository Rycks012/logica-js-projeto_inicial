
alert("Olá jogador! Bem-vindo ao jogo de adivinhação.");
console.log("Jogo iniciado");


function jogar() {
    const numeroSecreto = 29;
    console.log("Número secreto definido:", numeroSecreto);
    let tentativa = prompt("Adivinhe o número secreto entre 1 e 100");
    console.log("Primeira tentativa:", tentativa);

    while (tentativa != numeroSecreto) {
        console.log("Tentativa atual:", tentativa);
        if (tentativa < numeroSecreto) {
            alert("O número é maior!");
            console.log("Dica: número é maior que", tentativa);
        } else if (tentativa > numeroSecreto) {
            alert("O número é menor!");
            console.log("Dica: número é menor que", tentativa);
        } else {
            alert("Digite apenas números entre 1 e 100.");
            console.log("Entrada inválida detectada");
        }
        tentativa = prompt("Adivinhe o número secreto entre 1 e 100");
    }

    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto}.`);
    console.log("Usuário acertou o número secreto!");
}


jogar();
console.log("Jogo finalizado");


let jogarNovamente = confirm("Deseja jogar novamente?");
console.log("Usuário escolheu jogar novamente?", jogarNovamente);
if (jogarNovamente) {
    console.log("Recarregando página para novo jogo");
    location.reload();
} else {
    alert("Obrigado por jogar!");
    console.log("Jogo encerrado pelo usuário");
}