const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é uma medida importante para melhorar a saúde pública de uma população?",

        alternativas: [
            {
                texto: "Ampliar o acesso da população aos serviços de saúde"

                afirmacao: "Investir em ações de prevenção e vacinação."
            },
            {
                texto:  "Melhorar o saneamento básico e o acesso à água potável."
",
                afirmacao: "Promover campanhas de educação e conscientização sobre saúde."
            }    
           
        ]
    },
    {
       
            enunciado: "Quais são dois princípios básicos do SUS que garantem que todos têm direito ao atendimento e que quem precisa de mais cuidado recebe atenção prioritária?",
            alternativas: [
                {
                    texto: "Universalidade: Garantia de que todos os cidadãos têm direito de usar o SUS.",
                    afirmacao: "A Universalidade significa que a saúde pública no Brasil é para todo mundo, sem exceções ou necessidade de pagar."
                },
                {
                    texto:  "Equidade: Tratamento prioritário e diferenciado para quem mais necessita de cuidados. ",
                    afirmacao: "A Equidade significa ter foco nas necessidades de cada um, oferecendo mais ajuda a quem se encontra em situação de maior vulnerabilidade."
                }    
               
            ]
        },
        {
            enunciado: "Quais são duas ações fundamentais da Saúde Pública para prevenir o aparecimento e a transmissão de doenças na população?",

            alternativas: [
                {
                    texto: "Vacinação em massa: Protege a população contra diversas doenças infecciosas e evita epidemias.",
                    afirmacao: "A vacinação em massa é uma das medidas preventivas mais eficazes da saúde pública, pois gera imunidade coletiva e impede que vírus e bactérias voltem a circular na sociedade."
                },
                {
                    texto:    "Eliminação de água parada: Ação de combate e prevenção ao mosquito transmissor da Dengue, Zika e Chikungunya.",
               
                    afirmacao: "A eliminação de água parada é uma medida essencial de vigilância em saúde, reduzindo os criadouros do mosquito Aedes aegypti e protegendo toda a comunidade contra arboviroses."
                }    
               
            ]
        },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}



function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();