var questionsList = [
    {
        question: "Les appareils en veille ne consomment pas d'électricité.",
        reponse: false,
        explication: "Les appareils en veille peuvent représenter jusqu'à 11% de la consommation électrique d'un foyer. Un téléviseur en veille consomme environ 1 à 4 watts en continu, soit jusqu'à 35 kWh par an."
    },
    {
        question: "Un cycle de lave-vaisselle consomme plus d'électricité que de faire la vaisselle à la main.",
        reponse: false,
        explication: "Un lave-vaisselle moderne consomme en moyenne 1 à 1,5 kWh par cycle, tandis que la vaisselle à la main avec de l'eau chaude peut consommer jusqu'à 2,5 kWh, sans compter la consommation d'eau qui est 3 à 4 fois supérieure."
    },
    {
        question: "Charger son smartphone toute la nuit double sa consommation électrique.",
        reponse: false,
        explication: "Une fois chargé à 100%, un smartphone moderne réduit automatiquement sa consommation. Une charge complète ne consomme qu'environ 0,01 kWh, ce qui représente moins de 4 kWh par an pour une charge quotidienne."
    },
    {
        question: "Les ampoules LED consomment 80% d'électricité en moins que les ampoules incandescentes.",
        reponse: true,
        explication: "Une ampoule LED de 8W fournit la même luminosité qu'une ampoule incandescente de 60W, soit une économie d'énergie de plus de 80%. Sur sa durée de vie (15 000 à 25 000 heures), une LED peut économiser plus de 800 kWh d'électricité."
    },
    {
        question: "Le chauffage électrique est la source de consommation électrique la plus importante dans un foyer français.",
        reponse: true,
        explication: "Le chauffage représente en moyenne 62% de la consommation électrique d'un foyer français équipé en tout électrique, loin devant l'eau chaude (12%) et l'électroménager (10%)."
    },
    {
        question: "Un réfrigérateur récent consomme autant d'électricité qu'un modèle des années 1990.",
        reponse: false,
        explication: "Un réfrigérateur-congélateur moderne de classe A+++ consomme environ 150 kWh/an, alors qu'un modèle des années 1990 pouvait consommer jusqu'à 600 kWh/an, soit 4 fois plus."
    },
    {
        question: "Faire bouillir plus d'eau que nécessaire dans une bouilloire est négligeable en termes de consommation.",
        reponse: false,
        explication: "Chauffer 1 litre d'eau supplémentaire chaque jour pendant un an représente environ 110 kWh gaspillés, soit l'équivalent de la consommation d'une télévision LED pendant une année complète."
    },
    {
        question: "L'énergie solaire photovoltaïque est toujours plus chère que l'électricité du réseau.",
        reponse: false,
        explication: "En 2023, le coût de production de l'électricité solaire a baissé à environ 0,04-0,06€/kWh dans de nombreuses régions, ce qui est inférieur au prix moyen de l'électricité résidentielle qui peut atteindre 0,20€/kWh en Europe."
    },
    {
        question: "Un ordinateur portable consomme environ 80% moins d'électricité qu'un ordinateur de bureau équivalent.",
        reponse: true,
        explication: "Un ordinateur portable standard consomme entre 20 et 50 watts en utilisation normale, contre 150 à 300 watts pour un ordinateur de bureau avec écran, soit une économie d'énergie de 70 à 85%."
    },
    {
        question: "Le sèche-linge est l'un des appareils électroménagers les plus énergivores.",
        reponse: true,
        explication: "Un cycle de sèche-linge consomme en moyenne 3 à 4 kWh d'électricité, ce qui en fait l'un des appareils les plus énergivores de la maison, après le chauffage et le chauffe-eau."
    }
];

var currentQuestionIndex = 0;
var compteurScore = 0;
var compteurQuestion = 0;

function setQuestion(questionIndex) {

    var questionElement = document.getElementById('question');
    questionElement.textContent = questionsList[questionIndex].question;
}

function cancelFenetre() {
    var rep = document.getElementById('reponses');
    var retou = document.getElementById('retour');
    var resultatElement = document.getElementById('resultat');
    resultatElement.style.display = "none";

    if (compteurQuestion >= 10) {
        var questionElement = document.getElementById('question');
        questionElement.textContent = "Quizz terminé ! Votre score : " + compteurScore + "/10";
        rep.style.display = 'none';
        retou.style.display = 'block';
        // Réinitialisez le score et l'index de la question
        compteurScore = 0;
        currentQuestionIndex = 0;
    } else {
        currentQuestionIndex++;
        setQuestion(currentQuestionIndex);
    }
}



function checkAnswer(userAnswer) {
    var correctAnswer = questionsList[currentQuestionIndex].reponse;
    var comparatifElement = document.getElementById('comparatif');
    var explElement = document.getElementById('expl');
    var bouton = document.getElementById('cancel');
    var resultatElement = document.getElementById('resultat');

    if (userAnswer === correctAnswer) {
        compteurScore++;
        comparatifElement.textContent = "Bonne réponse!";
        resultatElement.style.backgroundColor = 'green';
        bouton.style.backgroundColor = 'green';
        compteurQuestion++
    } else {
        comparatifElement.textContent = "Mauvaise réponse!";
        resultatElement.style.backgroundColor = 'red';
        bouton.style.backgroundColor = 'red';
        compteurQuestion++
    }

    explElement.textContent = questionsList[currentQuestionIndex].explication;
    resultatElement.style.display = 'flex';
}

function displayFinalScore() {
    // Cachez les boutons de réponse
    var reponsesElement = document.getElementById('reponses');
    reponsesElement.style.display = 'none';

    // Affichez le message de fin et le score
    var questionElement = document.getElementById('question');
    questionElement.textContent = "Fin du quizz. Score : " + compteurScore + "/" + questionsList.length;

    // Réinitialisez le score
    compteurScore = 0;

    // Affichez le résultat
    var resultatElement = document.getElementById('resultat');
    resultatElement.style.display = 'flex';
}
document.addEventListener('DOMContentLoaded', function () {
    setQuestion(0);
});