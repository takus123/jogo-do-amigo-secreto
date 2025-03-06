//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista de amigos
let amigos = [];

// Função para adicionar um novo amigo
function adicionarAmigo() {
  // Pegar o valor do campo de texto
  const novoAmigo = document.getElementById('amigo').value.trim();

  // Verificar se o campo não está vazio
  if (novoAmigo !== '') {
    // Adicionar o novo amigo à lista
    amigos.push(novoAmigo);

    // Limpar o campo de texto
    document.getElementById('amigo').value = '';

    // Atualizar a lista de amigos na página
    atualizarListaAmigos();
  } else {
    alert('Por favor, digite um nome válido.');
  }
}

  // Percorrer o array de amigos e adicionar cada nome como um elemento <li>
  amigos.forEach(amigo => {
    const novoItem = document.createElement('li');
    novoItem.textContent = amigo;
    listaAmigos.appendChild(novoItem);
  });


// Função para selecionar um amigo aleatório
function selecionarAmigoAleatorio() {
  // Gerar um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obter o amigo com o índice aleatório
  const amigoAleatorio = amigos[indiceAleatorio];

  // Exibir o amigo selecionado
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = `O amigo selecionado aleatoriamente é: ${amigoAleatorio}`;
}
// Seleciona o botão pelo ID
const botaoSortearAmigo = document.getElementById('botaoSortearAmigo');

// Adiciona um evento de clique ao botão
botaoSortearAmigo.addEventListener('click', sortearAmigo);
// Adiciona um evento de clique ao botão
botaoAdicionarAmigo.addEventListener('click', adicionarAmigo);
 // Limpar a lista antes de adicionar novos elementos
 listaAmigos.innerHTML = '';
// Função para sortear um amigo
function sortearAmigo() {
    // Verificar se há pelo menos 2 amigos na lista
    if (amigos.length < 2) {
      alert('É necessário ter pelo menos 2 amigos na lista para realizar o sorteio.');
      return;
    }
  
    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    // Obter o amigo com o índice aleatório
    const amigoSorteado = amigos[indiceAleatorio];
  
    // Exibir o amigo sorteado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
  }
