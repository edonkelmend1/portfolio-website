// Smooth scroll functionality for Technical Skills and Projects buttons
document.addEventListener('DOMContentLoaded', () => {
    const skillsButton = document.querySelector('.skills-button');
    const skillsSection = document.getElementById('technical-skills');
    const projectsButton = document.querySelector('.projects-button');
    const projectsSection = document.getElementById('projects');

    // Custom smooth scroll function
    function smoothScroll(target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Adjust duration for slower scroll (milliseconds)
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Normalize to [0, 1]

            window.scrollTo(0, startPosition + distance * progress);

            if (progress < 1) {
                requestAnimationFrame(animation); // Continue animation until finished
            }
        }

        requestAnimationFrame(animation);
    }

    // Smooth scroll for Skills button
    skillsButton.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(skillsSection);
    });

    // Smooth scroll for Projects button
    projectsButton.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(projectsSection);
    });
});
