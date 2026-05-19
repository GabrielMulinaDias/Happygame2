// QUIZZES

const quizzes = {

  programacao: [

    {
      pergunta: "O que significa HTML?",
      respostas: [
        "HyperText Markup Language",
        "Home Tool Markup Language",
        "HighText Machine Language",
        "Hyper Transfer Language"
      ],
      correta: 0
    },

    {
      pergunta: "Qual empresa criou o JavaScript?",
      respostas: [
        "Microsoft",
        "Netscape",
        "Google",
        "Apple"
      ],
      correta: 1
    }

  ],

  futebol: [

    {
      pergunta: "Quantas Copas o Brasil possui?",
      respostas: ["3", "4", "5", "6"],
      correta: 2
    },

    {
      pergunta: "Quem é conhecido como Rei do Futebol?",
      respostas: [
        "Neymar",
        "Pelé",
        "Messi",
        "Cristiano Ronaldo"
      ],
      correta: 1
    }

  ],

  matematica: [

    {
      pergunta: "Quanto é 9 x 8?",
      respostas: ["72", "81", "64", "69"],
      correta: 0
    },

    {
      pergunta: "Qual é a raiz quadrada de 81?",
      respostas: ["7", "8", "9", "10"],
      correta: 2
    }

  ]

};

// VARIÁVEIS

let perguntas = [];
let perguntaAtual = 0;
let pontuacao = 0;

// INICIAR QUIZ

function iniciarNovoQuiz() {

  let tema =
    document.getElementById("temaQuiz").value;

  perguntas = quizzes[tema];

  perguntaAtual = 0;
  pontuacao = 0;

  atualizarPontuacao();
  atualizarBarra();

  mostrarPergunta();

  document
    .getElementById("quiz")
    .scrollIntoView({

      behavior: "smooth"

    });

}

// MOSTRAR PERGUNTA

function mostrarPergunta() {

  let perguntaElemento =
    document.getElementById("pergunta");

  let respostasElemento =
    document.getElementById("respostas");

  respostasElemento.innerHTML = "";

  perguntaElemento.innerText =
    perguntas[perguntaAtual].pergunta;

  for (
    let i = 0;
    i < perguntas[perguntaAtual].respostas.length;
    i++
  ) {

    let botao =
      document.createElement("button");

    botao.classList.add(
      "resposta-btn"
    );

    botao.innerText =
      perguntas[perguntaAtual].respostas[i];

    botao.onclick = function () {

      verificarResposta(i, botao);

    };

    respostasElemento.appendChild(botao);

  }

}

// VERIFICAR

function verificarResposta(
  respostaSelecionada,
  botao
) {

  let correta =
    perguntas[perguntaAtual].correta;

  let botoes =
    document.querySelectorAll(".resposta-btn");

  botoes.forEach(btn => {

    btn.disabled = true;

  });

  if (respostaSelecionada === correta) {

    botao.classList.add("correta");

    pontuacao += 10;

  } else {

    botao.classList.add("errada");

    botoes[correta]
      .classList.add("correta");

  }

  atualizarPontuacao();

  setTimeout(() => {

    perguntaAtual++;

    atualizarBarra();

    if (
      perguntaAtual < perguntas.length
    ) {

      mostrarPergunta();

    } else {

      finalizarQuiz();

    }

  }, 1200);

}

// PONTUAÇÃO

function atualizarPontuacao() {

  document.getElementById("pontuacao")
    .innerText =
      "Pontuação: " + pontuacao;

}

// BARRA

function atualizarBarra() {

  let progresso =
    (
      perguntaAtual /
      perguntas.length
    ) * 100;

  document.getElementById(
    "barraProgresso"
  ).style.width =
    progresso + "%";

}

// FINALIZAR

function finalizarQuiz() {

  let mensagem = "";

  if (pontuacao >= 20) {

    mensagem =
      "Excelente desempenho!";

  } else {

    mensagem =
      "Continue praticando!";

  }

  salvarPontuacao();

  document.getElementById("quiz")
    .innerHTML = `

      <div class="container">

        <div class="quiz-card text-center">

          <h1>
            Quiz Finalizado!
          </h1>

          <h2 class="mt-4">

            Pontuação Final:
            ${pontuacao}

          </h2>

          <h3 class="mt-3">
            ${mensagem}
          </h3>

          <button
            class="btn btn-primary mt-4"
            onclick="location.reload()"
          >

            Jogar Novamente

          </button>

        </div>

      </div>
    `;

}

// LOCAL STORAGE

function salvarPontuacao() {

  let maiorPontuacao =
    localStorage.getItem(
      "maiorPontuacao"
    );

  if (
    !maiorPontuacao ||
    pontuacao > maiorPontuacao
  ) {

    localStorage.setItem(
      "maiorPontuacao",
      pontuacao
    );

  }

}

// MOSTRAR PONTUAÇÃO

window.onload = function () {

  let pontos =
    localStorage.getItem(
      "maiorPontuacao"
    );

  if (pontos) {

    document.getElementById(
      "progressoSalvo"
    ).innerText =

      "Melhor Pontuação: " + pontos;

  }

};

// FORMULÁRIO

function validarFormulario() {

  let nome =
    document.getElementById("nome").value;

  let email =
    document.getElementById("email").value;

  if (
    nome === "" ||
    email === ""
  ) {

    alert(
      "Preencha todos os campos!"
    );

    return false;

  }

  alert(
    "Mensagem enviada com sucesso!"
  );

  return true;

}