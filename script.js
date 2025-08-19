const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de sair a escola, e foi encurralao por um ladrão armado. Ele te pergunta quanto val o PI",
        alternativas: [
            {
                texto: "é aproxomadamnte 3,14",
                afirmacao: "ele lhe parabeniza"
            },
            {
                texto: " não sei....",
                afirmacao: "o ladrão rouba sua mochila"
            }
        ]
    },
    {
        enunciado: "Não satisfeito o meliante, te pergunta qual a fórmula de bhaskara, voce:",
        alternativas: [
            {
                texto: "Finge que nem escutou",
                afirmacao: " ele rouba seu celular"
            },
            {
                texto: "é -b módulo de delta sobre 2a",
                afirmacao: " ele te da uma paçoca"
            }
        ]
    },
    {
        enunciado: "ainda não satisfeito, o assaltante lhe pergunta o que é um triangulo pitagórico",
        alternativas: [
            {
                texto: " é um triângulo com catetos e hipotenusa em unidades consecutivas ex: (3,4,5)",
                afirmacao: "o assaltante entende seu erro"
            },
            {
                texto: "é um triângulo com unidades inteiras.",
                afirmacao: "o assaltante te dá uma bala"
            }
        ]
    },
    {
        enunciado: "o Ladrão fala lhe que fará mais 2 perguntas, ele te pergunta qual o teorema de pitágoras",
        alternativas: [
            {
                texto: "A soma do quadrado dos catetos é igual ao quadrado da hipotenusa",
                afirmacao: "ele fica surpreso e pensa em lhe deixar ir"
            },
            {
                texto: "sim!!",
                afirmacao: "Ele sabe que voce ficou de recuperação em matemática"
            }
        ]
    },
    {
        enunciado: "ele prossegue e lhe faz a última pergunta, o que é um triângulo equilatero ",
        alternativas: [
            {
                texto: "não sei",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "é um triângulo que possui todos os lados e ângulos de mesma medida",
                afirmacao: "Ele te libera e dá uma caixa de paçoca"
            ]
        }
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