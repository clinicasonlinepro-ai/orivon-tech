// Toggle respostas na seção Dúvidas Rápidas
const questions = document.querySelectorAll(".duvida .question");

questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});