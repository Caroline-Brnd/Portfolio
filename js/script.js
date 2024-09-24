// Burger
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// Animation Compétences
document.addEventListener('DOMContentLoaded', function() {
    const competencesSection = document.querySelector('.competences-icon');

    // Fonction pour vérifier la position de l'élément
    function handleScroll() {
        const sectionPosition = competencesSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            competencesSection.classList.add('show'); // Ajouter la classe 'show' pour déclencher l'animation
        }
    }

    window.addEventListener('scroll', handleScroll);
});

// Date conforme de MAJ
const lastModified = document.lastModified;
const formattedDate = moment(lastModified).locale('fr').format('DD/MM/YYYY à HH:mm'); // Formatage date
document.getElementById("last-modified").textContent = formattedDate;

// Validation email
const emailInput = document.getElementById('email');
const emailValidation = document.getElementById('email-valid');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener('input', () => {
  if (emailRegex.test(emailInput.value)) {
    emailValidation.textContent = 'Adresse email valide';
    emailValidation.style.color = 'green';
  } else {
    emailValidation.textContent = 'Adresse email invalide';
    emailValidation.style.color = 'red';
  }
});

// Bouton retour en haut
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});