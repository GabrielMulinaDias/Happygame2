// ---------------------------
// HAPPY GAME - FASE 3
// ---------------------------

// ARRAY DE PERGUNTAS

const perguntas = [

  {
    pergunta: "Qual linguagem é usada no navegador?",
    respostas: ["Java", "Python", "JavaScript", "C#"],
    correta: 2,
  },

  {
    pergunta: "O Bootstrap é usado para:",
    respostas: [
      "Banco de dados",
      "Responsividade",
      "Backend",
      "Inteligência Artificial",
    ],
    correta: 1,
  },

  {
    pergunta: "Qual estrutura usamos para repetição?",
    respostas: ["IF", "FOR", "SWITCH", "CASE"],
    correta: 1,
  },

];

// ---------------------------
// VARIÁVEIS
// ---------------------------

let perguntaAtual = 0;
let pontuacao = 0;

// ---------------------------
// EVENTO PRINCIPAL
// ---------------------------

document.addEventListener("DOMContentLoaded", function () {

  atualizarPontuacao();
  atualizarBarra();

});

// ---------------------------
// INICIAR QUIZ
// ---------------------------

function iniciarQuiz() {

  mostrarPergunta();
  atualizarPontuacao();
  atualizarBarra();

}

// ---------------------------
// MOSTRAR PERGUNTA
// ---------------------------

function mostrarPergunta() {

  let perguntaElemento =
    document.getElementById("pergunta");

  let respostasElemento =
    document.getElementById("respostas");

  respostasElemento.innerHTML = "";

  perguntaElemento.innerText =
    perguntas[perguntaAtual].pergunta;

  // FOR

  for (
    let i = 0;
    i < perguntas[perguntaAtual].respostas.length;
    i++
  ) {

    let botao = document.createElement("button");

    // NOVO ESTILO

    botao.classList.add("resposta-btn");

    botao.innerText =
      perguntas[perguntaAtual].respostas[i];

    botao.onclick = function () {

      verificarResposta(i);

    };

    respostasElemento.appendChild(botao);

  }

}

// ---------------------------
// VERIFICAR RESPOSTA
// ---------------------------

function verificarResposta(respostaSelecionada) {

  let botoes =
    document.querySelectorAll(".resposta-btn");

  let respostaCorreta =
    perguntas[perguntaAtual].correta;

  // DESABILITAR BOTÕES

  botoes.forEach(botao => {

    botao.disabled = true;

  });

  // IF / ELSE

  if (respostaSelecionada === respostaCorreta) {

    botoes[respostaSelecionada]
      .classList.add("correta");

    pontuacao =
      calcularPontuacao(pontuacao);

  } else {

    botoes[respostaSelecionada]
      .classList.add("errada");

    botoes[respostaCorreta]
      .classList.add("correta");

  }

  atualizarPontuacao();

  // PRÓXIMA AUTOMÁTICA

  setTimeout(function () {

    perguntaAtual++;

    // SWITCH

    switch (perguntaAtual) {

      case 0:
        break;

      case 1:
        console.log("Pergunta 2");
        break;

      case 2:
        console.log("Pergunta 3");
        break;

      default:

        finalizarQuiz();
        return;

    }

    mostrarPergunta();
    atualizarBarra();

  }, 1200);

}

// ---------------------------
// FUNÇÃO DE 1º GRAU
// f(x) = x + 15
// ---------------------------

function calcularPontuacao(valorAtual) {

  return valorAtual + 15;

}

// ---------------------------
// ATUALIZAR PONTUAÇÃO
// ---------------------------

function atualizarPontuacao() {

  document.getElementById("pontuacao").innerText =
    "Pontuação: " + pontuacao;

}

// ---------------------------
// BARRA DE PROGRESSO
// ---------------------------

function atualizarBarra() {

  let progresso =
    (perguntaAtual / perguntas.length) * 100;

  document.getElementById("barraProgresso")
    .style.width = progresso + "%";

}

// ---------------------------
// FINALIZAR QUIZ
// ---------------------------

function finalizarQuiz() {

  document.getElementById("quiz").innerHTML = `

    <div class="container text-center p-5">

      <div class="card shadow-lg p-5">

        <h1>
          Quiz Finalizado!
        </h1>

        <h2 class="mt-4">
          Pontuação Final: ${pontuacao}
        </h2>

        <p class="mt-3">
          Parabéns por concluir o desafio!
        </p>

        <button
          class="btn btn-primary mt-4"
          onclick="reiniciarQuiz()"
        >
          Jogar Novamente
        </button>

      </div>

    </div>

  `;

}

// ---------------------------
// REINICIAR QUIZ
// ---------------------------

function reiniciarQuiz() {

  location.reload();

}

// ---------------------------
// FORMULÁRIO
// ---------------------------

function validarFormulario() {

  let nome =
    document.getElementById("nome").value;

  let email =
    document.getElementById("email").value;

  // IF / ELSE

  if (nome === "" || email === "") {

    alert("Preencha todos os campos!");

    return false;

  } else {

    alert("Mensagem enviada com sucesso!");

    return true;

  }

}

// ---------------------------
// NOVO QUIZ
// ---------------------------

function iniciarNovoQuiz() {

  perguntaAtual = 0;
  pontuacao = 0;

  atualizarPontuacao();
  atualizarBarra();

  mostrarPergunta();

  // SCROLL SUAVE

  document.getElementById("quiz")
    .scrollIntoView({

      behavior: "smooth"

    });

}