// HAMBURGER
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// CHATBOT
const chatbotBtn = document.getElementById('chatbot-btn');
const chatbotPopup = document.getElementById('chatbot-popup');
const closeChat = document.getElementById('close-chat');
const chatbotMessages = document.getElementById('chatbot-messages');

chatbotBtn.addEventListener('click', () => {
  chatbotPopup.style.display = 'flex';
});

closeChat.addEventListener('click', () => {
  chatbotPopup.style.display = 'none';
});

function responder(opcao) {
  let mensagem = '';
  if(opcao === 'valor') {
    mensagem = 'O valor varia entre o número de páginas e a complexidade do site.';
  } else if(opcao === 'tempo') {
    mensagem = 'De 5 a 10 dias úteis.';
  } else if(opcao === 'contato') {
    window.open('https://wa.me/5545991002660', '_blank');
    return;
  }
  const div = document.createElement('div');
  div.classList.add('message', 'bot');
  div.innerText = mensagem;
  chatbotMessages.appendChild(div);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}