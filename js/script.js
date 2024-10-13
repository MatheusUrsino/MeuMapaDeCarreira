document.addEventListener('DOMContentLoaded', () => {
    const linkedinIcon = document.querySelector('.fa-linkedin');
    const githubIcon = document.querySelector('.fa-square-github');

    linkedinIcon.addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/matheus-ursino/', '_blank'); // Substitua pelo seu link do LinkedIn
    });

    githubIcon.addEventListener('click', () => {
        window.open('https://github.com/MatheusUrsino', '_blank'); // Substitua pelo seu link do GitHub
    });
});