const links = document.querySelectorAll(".header-menu a");

function local(item) {
  const href = item.href;
  const url = document.location.href;

  if (href === url) {
    item.style.color = "var(--cor-p1)";
  }
}

links.forEach(local);

//perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");

  const ativa = resposta.classList.contains("ativa");
  console.log(ativa);
  pergunta.setAttribute("aria-expanded", "true");
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventoPerguntas);

//animação
