const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você Recicla" ,
        alternativas: [
            {
                texto: "Muito bem,voce está ajudando o mundo e a si mesmo",
                afirmacao: "sim"
            },
            {
                texto: "Então tome sua atitude, se cada um fizer a sua parte, vamos construir um mundo melhor.",
                afirmacao: "Não"
            }
        ]
    },
    {
        enunciado: "Além da reciclagem, a poluição nas águas é algo muito presente nos dias de hoje e acaba tirando a vida de muitos peixes e outros animais marinhos. Voce faz a sua parte e não joga óleo nas águas?",
        alternativas: [
            {
                texto: "Sim, coleto o óleo usado e jogo nos pontos de coleta, ou utilizo o mesmo para produção de sabões e assim contribuo com o meio ambiente.",
                afirmacao: ".Sim"
            }
            {
                texto: " Poxa! Pois trate de começar, voce ja pensou o quanto mal o óleo que voce joga na pia está fazendo e pode estar tirando a vida de quantos animais e prejudicando a água que voce mesmo toma?",
                afirmacao: "Nao"
            }
        
        ]
    },
    {
        enunciado: "Além do óléo usado, o descarte incorreto de pilhas e baterias no meio ambiente , prejudica muito o ambiente, pois tem em sua composição metais como chumbo e zinco, e descartado corretamente, em contato com a água, pode contaminar diversos litros de água , e se digerido da mesma, causar diversos problemas de saúde. Voce faz o descarte correto?",
        alternativas: [
            {
                texto: "eu penso na sáude do próximo e na minha, e faço o descarte correto",
                afirmacao: ".Sim"
            },
            {
                texto: "",
                afirmacao: "...."
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: "..."
            },
            {
                texto: "....,",
                afirmacao: "..."
            }
        ]
    },
    {
        enunciado: " ..... ",
        alternativas: [
            {
                texto: "....",
                afirmacao: "....."
            },
            {
                texto: "....",
                afirmacao: "....."
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