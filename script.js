// Toggle respostas da seção Dúvidas Rápidas
const questions = document.querySelectorAll(".duvida .question");

questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    // Fechar qualquer resposta aberta antes (opcional)
    questions.forEach(item => {
      if(item !== q) item.nextElementSibling.style.display = "none";
    });
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});