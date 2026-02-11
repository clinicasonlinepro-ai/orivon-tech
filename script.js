const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

function responder(opcao){
  const resposta = document.getElementById("chat-response");

  if(opcao === 1){
    resposta.innerText = "Criamos seu site profissional, configuramos domínio e mantemos ajustes contínuos.";
  }

  if(opcao === 2){
    resposta.innerText = "O investimento varia conforme estrutura, fale conosco para proposta personalizada.";
  }

  if(opcao === 3){
    resposta.innerText = "O prazo médio é de 7 a 15 dias dependendo da complexidade.";
  }
}

setTimeout(() => {
  document.getElementById("chatbot").style.display = "block";
}, 5000);