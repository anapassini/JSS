// Seleciona o parágrafo e o botão pelo ID
const paragrafo = document.getElementById('meu-paragrafo');
const botao = document.getElementById('meu-botao');

// Adiciona um event listener ao botão para ouvir o evento de clique
botao.addEventListener('click', () => {
    // Altera o texto do parágrafo
    paragrafo.textContent = 'O texto do parágrafo foi alterado!';
});