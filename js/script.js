const botaoAcao = document.getElementById('actionButton');

const divResposta = document.getElementById('resposta');

const campoNome = document.getElementById('userInput');

botaoAcao.addEventListener('click', function() {

  let nome = userInput.value;

  let mensagem = `Bem-vindo, ${nome}!`;

  divResposta.textContent = mensagem;

});