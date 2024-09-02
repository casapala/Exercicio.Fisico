const modalidades = ["Ginástica", "Judô", "Surfe", "Exercício Físico"];

// Número que representa o esporte do grupo
const escolha = 3; // Escolha do grupo é "Exercício Físico"

// Atualiza o estilo e o título com base na escolha
document.body.style.backgroundImage = `url('img/${modalidades[escolha]}.png')`;
document.title = `Exercício Físico | ${modalidades[escolha]}`;
document.querySelector('h1').innerHTML = 'Exercício Físico';

// Seletores para os elementos
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

let atual = 0;
let pontos = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas[escolha].length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[escolha][atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    perguntaAtual.alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    const { afirmacao, pontos: pontosAlternativa } = opcaoSelecionada;
    historiaFinal += `${afirmacao} `;
    atual++;
    pontos += pontosAlternativa;
    console.log(pontos);
    mostraPergunta();
}

function mostraResultado() {
    textoResultado.textContent = historiaFinal;
    caixaPerguntas.textContent = "Resultado";
    caixaAlternativas.innerHTML = "";
    podiumMedalhas();
}

function podiumMedalhas() {
    const medalhas = {
        3: 'bronze.png',
        4: 'prata.png',
        5: 'ouro.png'
    };
    const imagem = medalhas[pontos] || 'perdeu.png';
    caixaPrincipal.style.backgroundImage = `url('img/${imagem}')`;
    caixaPerguntas.textContent = `Resultado da competição: ${pontos} ponto${pontos > 1 ? 's' : ''} é ${imagem.split('.')[0].toUpperCase()}!`;
}

mostraPergunta();
