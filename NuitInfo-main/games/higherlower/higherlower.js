// Données sur les actions quotidiennes avec leurs consommations électriques (kWh)
const data = [
  { name: 'Recharger un smartphone', kwh: 0.01 },
  { name: 'Utiliser une tablette pendant 1h', kwh: 0.03 },
  { name: 'Regarder la télévision (LED 40") pendant 1h', kwh: 0.08 },
  { name: 'Utiliser un ordinateur portable pendant 1h', kwh: 0.05 },
  { name: 'Utiliser un ordinateur fixe pendant 1h', kwh: 0.15 },
  { name: 'Faire bouillir 1L d\'eau (bouilloire)', kwh: 0.11 },
  { name: 'Utiliser un ventilateur pendant 1h', kwh: 0.03 },
  { name: 'Utiliser une ampoule LED pendant 1h', kwh: 0.01 },
  { name: 'Utiliser une ampoule incandescente pendant 1h', kwh: 0.06 },
  { name: 'Utiliser un micro-ondes pendant 10min', kwh: 0.20 },
  { name: 'Faire un cycle de lave-vaisselle', kwh: 1.20 },
  { name: 'Faire un cycle de machine à laver à 40°C', kwh: 0.70 },
  { name: 'Faire un cycle de machine à laver à 60°C', kwh: 1.10 },
  { name: 'Utiliser un sèche-linge pour un cycle', kwh: 3.30 },
  { name: 'Sécher les cheveux pendant 10min', kwh: 0.25 },
  { name: 'Utiliser un aspirateur pendant 30min', kwh: 0.35 },
  { name: 'Utiliser un fer à repasser pendant 30min', kwh: 0.45 },
  { name: 'Utiliser un four électrique pendant 1h', kwh: 1.50 },
  { name: 'Utiliser une plaque de cuisson électrique pendant 30min', kwh: 0.75 },
  { name: 'Utiliser un réfrigérateur-congélateur pendant 24h', kwh: 1.30 },
  { name: 'Utiliser un climatiseur pendant 1h', kwh: 2.00 },
  { name: 'Utiliser un chauffage électrique d\'appoint pendant 1h', kwh: 2.50 },
  { name: 'Utiliser une console de jeux pendant 1h', kwh: 0.07 },
  { name: 'Recharger une voiture électrique (partielle)', kwh: 10.00 },
  { name: 'Utiliser un chauffe-eau électrique pour une douche', kwh: 2.50 },
  { name: 'Utiliser un grille-pain pour 2 tranches', kwh: 0.04 },
  { name: 'Utiliser une cafetière électrique pour 6 tasses', kwh: 0.10 },
  { name: 'Utiliser un robot culinaire pendant 15min', kwh: 0.12 },
  { name: 'Utiliser un sèche-cheveux puissant pendant 10min', kwh: 0.40 },
  { name: 'Faire fonctionner une pompe de piscine pendant 1h', kwh: 1.00 },
  { name: 'Utiliser un humidificateur pendant 8h', kwh: 0.30 },
  { name: 'Utiliser une machine à coudre électrique pendant 1h', kwh: 0.08 },
  { name: 'Faire fonctionner un aquarium (pompe, éclairage) pendant 24h', kwh: 0.40 },
  { name: 'Utiliser un purificateur d\'air pendant 24h', kwh: 0.35 },
  { name: 'Charger un vélo électrique (charge complète)', kwh: 0.40 },
  { name: 'Utiliser un lave-linge séchant (cycle complet)', kwh: 4.50 }
];

// Fonction pour mélanger les données de manière aléatoire
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Mélanger les données au début du jeu
shuffle(data);

let currentActionIndex1 = 0;
let currentActionIndex2 = 1;
let score = 0;

// Fonction pour mettre à jour les boxes avec les actions actuelles
function updateBoxes() {
  document.getElementById('leftBox').innerHTML = `
    <h2>${data[currentActionIndex1].name}</h2>
    <p>Consommation électrique: <span id="leftKWH">${data[currentActionIndex1].kwh}</span> kWh</p>
  `;
  document.getElementById('rightBox').innerHTML = `
    <h2>${data[currentActionIndex2].name}</h2>
    <p>Consommation électrique: <span id="rightKWH">?</span> kWh</p>
  `;
}

// Fonction pour mettre à jour la consommation dans la box de droite après le choix de l'utilisateur
function updateRightKWH() {
  document.getElementById('rightKWH').innerText = data[currentActionIndex2].kwh;
}

// Déclaration de la variable de décalage
let slideOffset;

// Fonction pour animer les boxes avec Anime.js
function animateSlide() {
  const leftBox = document.getElementById('leftBox');
  const rightBox = document.getElementById('rightBox');
  slideOffset = rightBox.offsetWidth; // Récupère la largeur de la box de droite

  rightBox.style.zIndex = '1'; // Assure que la box de droite est au-dessus

  // Animation de déplacement de la boîte de droite vers la position de la boîte de gauche
  anime({
    targets: rightBox,
    translateX: ['0', `-${slideOffset}px`], // Animation de déplacement
    duration: 1000, // Durée de l'animation de déplacement en millisecondes
    easing: 'easeInOutQuad',
    zIndex: '1', // Assure que la boîte de droite est au-dessus
    complete: function() {
      // Mise à jour des boîtes après l'animation de déplacement
      updateBoxes();

      // Animation de fade-in pour la boîte de droite
      anime({
        targets: rightBox,
        translateX: [`0`, '0'], // Réinitialisation de la position
        opacity: [0, 1], // Animation d'opacité de 0 (invisible) à 1 (visible)
        duration: 500, // Durée de l'animation en millisecondes
        easing: 'easeInOutQuad',
        zIndex: '0' // Rétablit la position normale
      });
    }
  });
}

// Fonction pour vérifier la réponse de l'utilisateur
function checkAnswer(choice) {
  updateRightKWH();

  if (choice === 'higher' && data[currentActionIndex2].kwh > data[currentActionIndex1].kwh) {
    currentActionIndex1 = currentActionIndex2;
    currentActionIndex2++;
    score++;
    animateSlide();
  } else if (choice === 'lower' && data[currentActionIndex2].kwh < data[currentActionIndex1].kwh) {
    currentActionIndex1 = currentActionIndex2;
    currentActionIndex2++;
    score++;
    animateSlide();
  } else {
    score = 0;
    currentActionIndex1 = 0;
    currentActionIndex2 = 1;
    updateBoxes();
    alert('Vous avez perdu ! Votre score est remis à zéro.');
    location.reload();
  }
  document.getElementById('score').innerText = score;
}

// Initialisation du jeu
updateBoxes();