let IsOpen = false;
let IsOpen2 = false;

const menu2 = document.getElementById('menu2');
const menu = document.getElementById('menu');

function openMenu2() {
    const dropdown2 = document.querySelector('.dropdown-acces2');

    if (!IsOpen2) {
        dropdown2.style.display = 'block';
        
        IsOpen2 = true;
    } else {
        dropdown2.classList.remove('open');
       
            dropdown2.style.display = 'none';
        
        IsOpen2 = false;
    }

}

function openMenu() {
    const dropdown = document.querySelector('.dropdown-acces');

    if (!IsOpen) {
        dropdown.style.display = 'block';
        
        IsOpen = true;
    } else {
        dropdown.classList.remove('open');
       
            dropdown.style.display = 'none';
        
        IsOpen = false;
    }

}

function setTheme(theme) {
    const body = document.body;
    const dyslexiaClass = 'dyslexia';
  
    document.body.classList.remove('dark-mode', 'protonopia', 'deuteranopia', 'tritanopia');
  
    // Ajouter la classe du thème sélectionné au body
    document.body.classList.add(theme);

    if (theme == 'dark-mode' && window.innerWidth <= 992) {
        document.getElementById('carte').src = '../public/img/cartemobilenuit.png';
        document.getElementById('mobilenuit').style.display = 'block'; // Pour afficher l'élément
        document.getElementById('mobilejour').style.display = 'none'; // Pour masquer l'élément
    
    } else {
        document.getElementById('carte').src = '../public/img/cartemobile.png';
        document.getElementById('mobilenuit').style.display = 'none'; // Pour masquer l'élément
        document.getElementById('mobilejour').style.display = 'block'; // Pour afficher l'élément
    
    }
    if (theme == 'dark-mode' && window.innerWidth >= 992) {
        document.getElementById('pcnuit').style.display = 'block'; // Pour afficher l'élément
        document.getElementById('pcjour').style.display = 'none'; // Pour masquer l'élément
        document.getElementById('carte2').src = '../public/img/cartepcnuit.jpg';
    } else {
        document.getElementById('pcnuit').style.display = 'none'; // Pour masquer l'élément
        document.getElementById('pcjour').style.display = 'block'; // Pour afficher l'élément
        document.getElementById('carte2').src = '../public/img/cartepc.jpg';
    }
}

const trees = document.getElementsByClassName('trees');
const water = document.getElementsByClassName('water');
const recycled = document.getElementsByClassName('recycled');
const collected = document.getElementsByClassName('collected');

// Convert HTMLCollection to an array

// Animate the numbers using Anime.js
anime({
    targets: trees, // Target the array of elements with the class 'text'
    innerHTML: [0, 10], // Animate from 0 to 10
    round: 1, // Round the numbers to 1 decimal place
    easing: 'linear', // Use linear easing
    duration: 1000, // Animation duration in milliseconds
    delay: anime.stagger(300), // Add a stagger delay to each element
});
// Animate the numbers using Anime.js
anime({
    targets: water, // Target the array of elements with the class 'text'
    innerHTML: [0, 14.3], // Animate from 0 to 10
    round: 1, // Round the numbers to 1 decimal place
    easing: 'linear', // Use linear easing
    duration: 1000, // Animation duration in milliseconds
    delay: anime.stagger(300), // Add a stagger delay to each element
});
// Animate the numbers using Anime.js
anime({
    targets: recycled, // Target the array of elements with the class 'text'
    innerHTML: [0, 41.4], // Animate from 0 to 10
    round: 1, // Round the numbers to 1 decimal place
    easing: 'linear', // Use linear easing
    duration: 1000, // Animation duration in milliseconds
    delay: anime.stagger(300), // Add a stagger delay to each element
});
// Animate the numbers using Anime.js
anime({
    targets: collected, // Target the array of elements with the class 'text'
    innerHTML: [0, 145], // Animate from 0 to 10
    round: 1, // Round the numbers to 1 decimal place
    easing: 'linear', // Use linear easing
    duration: 1000, // Animation duration in milliseconds
    delay: anime.stagger(300), // Add a stagger delay to each element
});


if (theme == 'dark-mode' && window.innerWidth <= 992) {
    document.getElementById('carte').src = '../public/img/cartemobilenuit.png';
    document.getElementById('mobilenuit').style.display = 'block'; // Pour afficher l'élément
    document.getElementById('mobilejour').style.display = 'none'; // Pour masquer l'élément

} else {
    document.getElementById('carte').src = '../public/img/cartemobile.png';
    document.getElementById('mobilenuit').style.display = 'none'; // Pour masquer l'élément
    document.getElementById('mobilejour').style.display = 'block'; // Pour afficher l'élément

}
if (theme == 'dark-mode' && window.innerWidth >= 992) {
    document.getElementById('pcnuit').style.display = 'block'; // Pour afficher l'élément
    document.getElementById('pcjour').style.display = 'none'; // Pour masquer l'élément
    document.getElementById('carte2').src = '../public/img/cartepcnuit.jpg';
} else {
    document.getElementById('pcnuit').style.display = 'none'; // Pour masquer l'élément
    document.getElementById('pcjour').style.display = 'block'; // Pour afficher l'élément
    document.getElementById('carte2').src = '../public/img/cartepc.jpg';
}




function redirectTo(url) {
window.open(url, '_blank');
}