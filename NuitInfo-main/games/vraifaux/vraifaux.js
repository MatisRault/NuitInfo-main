var questionsList = [
    {
        question: "Les énergies renouvelables sont plus chères à produire.",
        reponse: false,
        explication: "Les progrès technologiques dans le domaine ont entraîné une baisse spectaculaire des coûts des énergies renouvelables. Ainsi, actuellement, que ce soit n'importe où dans le monde, aucune autre source de production électrique n'est aussi économiquement compétitive que l'énergie éolienne ou solaire pour de nouvelles installations."
    },
    {
        question: "Adopter un mode de vie écolo, ce serait revenir au Moyen Âge.",
        reponse: false,
        explication: "Le mode de vie écologique repose sur un ensemble d'innovations et d'améliorations du bien-être, qui relève d’un processus de progrès… et certainement pas d’un retour en arrière !"
    },
    {
        question: "Manger de la viande est mauvais pour l'environnement.",
        reponse: true,
        explication: "Il faut 30.000 à 60.000 litres d'eau pour faire 1 kg de viande de bœuf."
    },
    {
        question: "Les panneaux solaires ne se valent pas tous.",
        reponse: true,
        explication: "Les panneaux solaires, en fonction de leur matière, peuvent avoir un rendement de 5 à 19% !"
    },
    {
        question: "Les panneaux solaires ne sont pas rentable du fait d'une durée de vie trop courte.",
        reponse: false,
        explication: "Les panneaux en eux-mêmes ont une durée de vie comprise entre 20 et 35 ans suivant les modèles."
    },
    {
        question: "Un produit sans sucre contient tout de même du sucre.",
        reponse: true,
        explication: "Selon la législation européenne, un produit portant la mention « sans sucre » peut contenir jusqu’à 0,5 g/100 de sucres, en plus de contenir des \"faux sucres\" ou édulcorants"
    },
    {
        question: "Un feu de cheminée ne pollue pas.",
        reponse: false,
        explication: "En plus de polluer l'air exterieur, les particules fines dégagées par les feux de cheminées polluent également l'intérieur de notre maison."
    },
    {
        question: "Les sacs en plastique fin sont aujourd'hui tous biodégradables.",
        reponse: false,
        explication: "Dans la nature, le sac en plastique mettra très longtemps à se dégrader et aura de graves conséquences pour la faune et la flore. Il n'est également pas compostable."
    },
    {
        question: "Avec un lave-linge de grande capacité, on fait moins de lessives.",
        reponse: false,
        explication: "Même performant, un lave-linge grande capacité, s'il ne convient pas à vos besoin tournera souvent sans être totalement remplies, entraînant un gaspillage d'énergies et d'eau."
    },
    {
        question: "Les ampoules basse consommation ne s'adaptent pas à toutes les lampes et ne supportent pas les allumages répétés.",
        reponse: false,
        explication: "Les ampoules basse consommation s'adaptent à de nombreux luminaires, et certaines d'entre elles sont spécifiquement adaptés aux allumages fréquents.  "
    },
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