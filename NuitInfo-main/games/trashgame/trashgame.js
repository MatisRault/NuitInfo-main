const gameContainer = document.getElementById('game-container');
const character = document.getElementById('character');
const svgImages = [
    {
      url: '../../public/img/bottle-water.svg',
      alt: 'Bottle of Water'
    },
    {
      url: '../../public/img/box.svg',
      alt: 'Box'
    },
    {
      url: '../../public/img/glass-drink.svg',
      alt: 'Glass of Drink'
    },
    {
      url: '../../public/img/soap.svg',
      alt: 'Soap'
    },
    {
      url: '../../public/img/wine.svg',
      alt: 'Wine'
    },
    {
      url: '../../public/img/yaourt.svg',
      alt: 'Yogurt'
    },
    {
      url: '../../public/img/garot.svg',
      alt: 'Garot'
    },
    // Ajoutez autant d'URLs SVG que nécessaire
  ];
  
let score = 0;
let lives = 3;
let itemCreationInterval;
 
function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = 'Score: ' + score;
  if (score >= 100) {
    victory();
  } else {
    centerElement(scoreElement);
  }
}
function victory() {
    clearInterval(itemCreationInterval);
    document.removeEventListener('mousemove', moveCharacter);
    alert('VICTOIRE! Score atteint 100!');
  } 
 
function updateLives() {
  const livesElement = document.getElementById('lives');
  livesElement.textContent = 'Lives: ' + lives;
}
 
let characterPosition = 200;
const characterSpeed = 20; // Ajustez la vitesse du personnage selon vos besoins


function moveCharacter() {
  const characterWidth = character.offsetWidth;
  const gameArea = gameContainer.getBoundingClientRect();

  // Ajoutez cette condition pour vérifier si la touche est la flèche gauche ou droite
  if (event.key === 'ArrowLeft') {
    moveLeft(characterWidth, gameArea);
  } else if (event.key === 'ArrowRight') {
    moveRight(characterWidth, gameArea);
  }

  requestAnimationFrame(moveCharacter);
}

function moveLeft(characterWidth, gameArea) {
  characterPosition = Math.max(characterPosition - characterSpeed, 0);
  character.style.left = characterPosition + 'px';
}

function moveRight(characterWidth, gameArea) {
  characterPosition = Math.min(characterPosition + characterSpeed, gameArea.width - characterWidth);
  character.style.left = characterPosition + 'px';
}

// Ajoutez un écouteur d'événements pour les touches de clavier
document.addEventListener('keydown', moveCharacter);

// Démarrez le mouvement initial (peut être supprimé si vous souhaitez le déclencher différemment)
requestAnimationFrame(moveCharacter);


  document.addEventListener('keydown', moveCharacter);

  
  
  
 
function createItem() {
  const item = document.createElement('div');
  const isDangerous = Math.random() < 0.3; // 30% chance for a dangerous item
  /*const randomSVG = getRandomSVG();*/
  item.classList.add('item');
  item.classList.add(isDangerous ? 'dangerous' : 'collectible');
  const randomSVGInfo = svgImages[Math.floor(Math.random() * svgImages.length)];
  item.style.backgroundImage = `url(${randomSVGInfo.url})`;
  item.setAttribute('data-alt', randomSVGInfo.alt);
  
 
  const xPos = Math.random() * (gameContainer.offsetWidth - 20);
  item.style.left = xPos + 'px';
  gameContainer.appendChild(item);
 
  let yPos = 0;
  const fallInterval = setInterval(() => {
    const gameBottom = gameContainer.getBoundingClientRect().bottom;
    const itemHeight = item.offsetHeight;
 
    if (yPos < gameBottom - itemHeight) {
      yPos += 2; // Adjust the falling speed as needed
      item.style.top = yPos + 'px';
    } else {
      clearInterval(fallInterval);
      item.remove();
    }
 
    const itemBottom = item.getBoundingClientRect().bottom;
    const characterRect = character.getBoundingClientRect();
 
    if (itemBottom >= characterRect.top && itemBottom <= characterRect.bottom) {
      const itemLeft = item.getBoundingClientRect().left;
      const characterLeft = character.getBoundingClientRect().left;
      const characterRight = character.getBoundingClientRect().right;
 
      if (itemLeft >= characterLeft && itemLeft <= characterRight) {
        item.remove();
        if (item.classList.contains('collectible')) {
          score += 10;
          updateScore();
          console.log('Score: ', score);
        } else if (item.classList.contains('dangerous')) {
          lives--;
          updateLives();
          console.log('Lives: ', lives);
          if (lives <= 0) {
            gameOver();
            return;
          }
        }
      }
    }
  }, 10);
}
 
function gameOver() {
  document.removeEventListener('mousemove', moveCharacter);
  clearInterval(itemCreationInterval);
  alert('Game Over! Lives depleted.');
}
 
document.addEventListener('mousemove', moveCharacter);
itemCreationInterval = setInterval(createItem, 1000);
 