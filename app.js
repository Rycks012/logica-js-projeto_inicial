/*
Jogo de Adivinhação
-------------------
Este é um jogo simples onde o usuário deve adivinhar um número secreto entre 1 e 100.
O código está comentado para facilitar o entendimento de cada etapa.
*/

// Exibe mensagem de boas-vindas ao jogador
alert("Olá jogador! Bem-vindo ao jogo de adivinhação.");
console.log("Jogo iniciado"); // Log para depuração

// Função principal do jogo
function jogar() {
    // Define o número secreto que o usuário deve adivinhar
    const numeroSecreto = 29;
    console.log("Número secreto definido:", numeroSecreto); // Log do número secreto
    let tentativas = 1; // Contador de tentativas (começa em 1 para contar a primeira tentativa)

    // Solicita a primeira tentativa do usuário
    let tentativa = prompt("Adivinhe o número secreto entre 1 e 100");
    console.log("Primeira tentativa:", tentativa); // Log da primeira tentativa

    // Laço que repete até o usuário acertar o número
    while (tentativa != numeroSecreto) {
        console.log("Tentativa atual:", tentativa); // Log da tentativa atual
        // Dá dicas ao usuário conforme a tentativa
        if (tentativa < numeroSecreto) {
            alert("O número é maior!"); // Dica: número é maior
            console.log("Dica: número é maior que", tentativa);
        } else if (tentativa > numeroSecreto) {
            alert("O número é menor!"); // Dica: número é menor
            console.log("Dica: número é menor que", tentativa);
        } else {
            alert("Digite apenas números entre 1 e 100."); // Entrada inválida
            console.log("Entrada inválida detectada");
        }
        // Solicita nova tentativa
        tentativa = prompt("Adivinhe o número secreto entre 1 e 100");
        tentativas++; // Incrementa o contador de tentativas a cada nova tentativa
        console.log("Número de tentativas:", tentativas); // Log do número de tentativas
    }

    // Usuário acertou o número secreto
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto}, com ${tentativas} tentativas.`);
    console.log("Usuário acertou o número secreto!");
}

// Inicia o jogo
jogar();
console.log("Jogo finalizado"); // Log de finalização

// Pergunta ao usuário se deseja jogar novamente
let jogarNovamente = confirm("Deseja jogar novamente?");
console.log("Usuário escolheu jogar novamente?", jogarNovamente); // Log da escolha
if (jogarNovamente) {
    console.log("Recarregando página para novo jogo"); // Log de recarregamento
    location.reload(); // Reinicia o jogo
} else {
    alert("Obrigado por jogar!"); // Mensagem de despedida
    console.log("Jogo encerrado pelo usuário"); // Log de encerramento
}