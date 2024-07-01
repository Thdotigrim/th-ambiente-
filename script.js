const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você Recicla?" ,
        alternativas: [
            {
                texto: "Sim, separo os lixos nos seus devidos lugares",
                afirmacao: "Muito bem,voce está ajudando o mundo e a si mesmo"
            },
            {
                texto: "Não tenho esse custume.",
                afirmacao: "Não, então tome sua atitude, se cada um fizer a sua parte, vamos construir um mundo melhor."
            }
        ]
    },
    {
        enunciado: "Além da reciclagem, a poluição nas águas é algo mque é muito preocupante e acaba tirando a vida de muitos peixes e outros animais marinhos. Voce faz a sua parte e não joga óleo nas águas?",
        alternativas: [
            {
                texto: "Sim, Faço a coleta certa",
                afirmacao: "Sim, coleto o óleo usado e jogo nos pontos de coleta e assim contribuo com o meio ambiente"
            },
            {
                texto: "Não, não quero começar",
                afirmacao: "Poxa! Pois comece o mais cedo possivel, o óleo que voce joga na pia está fazendo e pode estar tirando a vida de quantos animais marinhos"
            }
        
        ]
    },
    {
        enunciado: "O descarte incorreto de pilhas e baterias no meio ambiente , prejudica muito o ambiente, e descartado corretamente, em contato com a água, pode contaminar diversos litros de água , e se digerido da mesma, causar diversos problemas de saúde. Voce faz o descarte correto?",
        alternativas: [
            {
                texto: "Sim, tenho impatia e contribuo",
                afirmacao: "Eu penso na sáude do meio ambiente, e faço o descarte correto"
            },
            {
                texto: "Não tenho atitude",
                afirmacao: "Não, mas vou começar a fazer o descarte corretamente"
            }
        ]
    },
    {
        enunciado: "A poluição vem piorando a cada dia que passa, voce faz sua parte?",
        alternativas: [
            {
                texto: "Sim, eu ajudo com o meio ambiente",
                afirmacao: "Eu contribuo com meus lixos e descarto corretamente"
            },
            {
                texto: "Não, não vejo o porque de ajudar",
                afirmacao: "Eu ainda não faço minha parte e não vou fazer"
            }
        ]
    },
    {
        enunciado: " O desmatamento sempre piora, as leis não funcionam direito, a pergunta é, voce ajuda? ",
        alternativas: [
            {
                texto: "Sim, ajudo com as plantinhas",
                afirmacao: "Sim, sempre planto arvores e plantas novas"
            },
            {
                texto: "Não, tenho preguiça de começar",
                afirmacao: "Não, acho que não tenho essa capacidade"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();