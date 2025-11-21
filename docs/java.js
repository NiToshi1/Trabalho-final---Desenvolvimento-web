const quizForm = document.getElementById('formquiz');
const resultadosSection = document.getElementById('resultados');
const pontuacaoFinal = document.getElementById('pontuacao-final');
const feedbackMensagem = document.getElementById('feedback-mensagem');
const iniLink = document.getElementById('ini'); 
const btnRefazer = document.getElementById('btn-refazer'); 

const respostasCorretas = {
    pergunta1: 'JavaScript',
    pergunta2: '8 tábuas de madeira', 
    pergunta3_corretas: ['Panthera pardus', 'Caiman crocodilus'], 
    pergunta4: 'SQL',
    pergunta5: 'footer' 
};
const totalPerguntas = 5;

function finalizarQuizComAlerta(){
    window.alert("Muito obrigado por fazer o quiz!!");
}