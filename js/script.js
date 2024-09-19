function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

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
