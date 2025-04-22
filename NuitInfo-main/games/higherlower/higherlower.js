// Vos données sur les aliments avec leurs émissions de CO2
const data = [
    { name: 'Ketchup', co2: 0.94 },
    { name: 'Mayonnaise', co2: 2.53 },
    { name: 'Moutarde', co2: 1.82 },
    { name: 'Safran',  co2: 8.15 },
    { name: 'Vanille',  co2: 1.15 },
    { name: 'Bière',  co2: 1.12 },
    { name: 'Vin rouge', co2: 1.19 },
    { name: 'Champagne', co2: 1.23 },
    { name: 'Cola', co2: 0.51 },
    { name: 'Eau Cristalline', co2: 0.27 },
    { name: 'Pastis', co2: 1.03 },
    { name: 'Pizza au saumon',  co2: 2.45 },
    { name: 'Tartiflette',  co2: 2.53 },
    { name: 'Brochettes Yakitori',  co2: 6.71 },
    { name: 'Poivre noir',  co2: 8.15 },
    { name: 'Beurre',  co2: 7.79 },
    { name: 'Café', co2: 2.28 },
    { name: 'Laitue', co2: 0.90 },
    { name: 'Tomate', co2: 1.96 },
    { name: 'Beaufort', co2: 6.09 },
    { name: 'Cheddar', co2: 6.18 },
    { name: 'Gruyère', co2: 6.19 },
    { name: 'Huile de tournesol', co2: 2.57 },
    { name: 'Brownie au chocolat', co2: 7.20 },
    { name: 'Quinoa', co2: 7.68 },
    { name: 'Sucre blanc',  co2: 0.61 },
    { name: 'Miel',  co2: 1.20 },
    { name: 'Langoustine',  co2: 24.17 },
    { name: 'Oeuf',  co2: 3.17 },
    { name: 'Rillettes pur porc',  co2: 5.19 },
    { name: 'Brochette d\'agneau', co2: 50.77 },
    { name: 'Steak haché',co2: 42.13 },
    { name: 'Homard',  co2: 38.33 },
    { name: 'Moussaka',  co2: 22.66 },
    { name: 'Chocolat', co2: 16.88 },
    { name: 'Lait en poudre', co2: 14.82 },
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
  
  let currentAlimentIndex1 = 0;
  let currentAlimentIndex2 = 1;
  let score = 0;
  
  // Fonction pour mettre à jour les boxes avec les aliments actuels
  function updateBoxes() {
    document.getElementById('leftBox').innerHTML = `
      <h2>${data[currentAlimentIndex1].name}</h2>
      <p>Emissions de CO2: <span id="leftCO2">${data[currentAlimentIndex1].co2}</span> kg</p>
    `;
    document.getElementById('rightBox').innerHTML = `
      <h2>${data[currentAlimentIndex2].name}</h2>
      <p>Emissions de CO2: <span id="rightCO2">?</span> kg</p>
    `;
  }
  
  // Fonction pour mettre à jour le CO2 dans la box de droite après le choix de l'utilisateur
  function updateRightCO2() {
    document.getElementById('rightCO2').innerText = data[currentAlimentIndex2].co2;
  }
  
  // Fonction pour animer les boxes avec Anime.js
// Déclaration de la variable de décalage
let slideOffset; // Modifiez cette valeur selon vos besoins

// Fonction pour animer les boxes avec Anime.js
function animateSlide() {
  const leftBox = document.getElementById('leftBox');
  const rightBox = document.getElementById('rightBox');
  slideOffset = rightBox.offsetWidth; // Récupère la largeur de la box de gauche


  rightBox.style.zIndex = '1'; // Assure que la box de droite est au-dessus

  // Animation de déplacement de la boîte de droite vers la position de la boîte de gauche
  anime({
    targets: rightBox,
    translateX: ['0', `-${slideOffset}px`], // Animation de déplacement de -slideOffset à 0
    duration: 1000, // Durée de l'animation de déplacement en millisecondes
    easing: 'easeInOutQuad',
    zIndex: '1', // Assure que la boîte de droite est au-dessus
    complete: function() {
      // Mise à jour des boîtes après l'animation de déplacement
      updateBoxes();

      // Réinitialisation de la position de la boîte de droite
      // rightBox.style.transform = 'translateX(0)';

      // Animation de fade-in pour la boîte de droite
      anime({
        targets: rightBox,
        translateX: [`0`, '0'], // Animation de déplacement de -slideOffset à 0
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
    updateRightCO2();
  
    if (choice === 'higher' && data[currentAlimentIndex2].co2 > data[currentAlimentIndex1].co2) {
      currentAlimentIndex1 = currentAlimentIndex2;
      currentAlimentIndex2++;
      score++;
      animateSlide();
    } else if (choice === 'lower' && data[currentAlimentIndex2].co2 < data[currentAlimentIndex1].co2) {
      currentAlimentIndex1 = currentAlimentIndex2;
      currentAlimentIndex2++;
      score++;
      animateSlide();
    } else {
      score = 0;
      currentAlimentIndex1 = 0;
      currentAlimentIndex2 = 1;
      updateBoxes();
      alert('Vous avez perdu ! Votre score est remis à zéro.');
      location.reload();
    }
    document.getElementById('score').innerText = score;
  }
  
  // Initialisation du jeu
  updateBoxes();
  