// // Seleciona o parágrafo e o botão pelo ID
// const paragrafo = document.getElementById('meu-paragrafo');
// const botao = document.getElementById('meu-botao');

// // Adiciona um event listener ao botão para ouvir o evento de clique
// botao.addEventListener('click', () => {
//     // Altera o texto do parágrafo
//     paragrafo.textContent = 'O texto do parágrafo foi alterado!';
// });

// Seleciona os elementos do DOM
const lista = document.getElementById('minha-lista');
const input = document.getElementById('novo-item');
const botaoAdicionar = document.getElementById('adicionar');
const botaoRemover = document.getElementById('remover');

// Função para adicionar um novo item à lista
botaoAdicionar.addEventListener('click', () => {
    const novoItemTexto = input.value;
    if (novoItemTexto.trim() !== '') {
        const novoItem = document.createElement('li');
        novoItem.textContent = novoItemTexto;
        lista.appendChild(novoItem);
        input.value = '';  // Limpa o campo de entrada
    }
});

// Função para remover o último item da lista
botaoRemover.addEventListener('click', () => {
    const ultimoItem = lista.lastElementChild;
    if (ultimoItem) {
        lista.removeChild(ultimoItem);
    }
});