function toggleChat(){
  const body = document.getElementById("chat-body");
  body.style.display = body.style.display === "block" ? "none" : "block";
}

function responder(opcao){
  const resposta = document.getElementById("chat-response");

  if(opcao === 1){
    resposta.innerText = "Os valores variam conforme estrutura. Fale no WhatsApp para proposta personalizada.";
  }

  if(opcao === 2){
    resposta.innerText = "O prazo médio é de 7 a 15 dias dependendo da complexidade.";
  }

  if(opcao === 3){
    resposta.innerText = "Planejamento estratégico, desenvolvimento profissional e publicação com ajustes.";
  }
}