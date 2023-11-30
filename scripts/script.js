// Ik heb ChatGPT gebruikt voor hulp bij deze function en Sem
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button[id^="button"]');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            const sectionNumber = parseInt(event.target.id.replace('button', ''));
            showSection(sectionNumber);
        });
    });
});

function showSection(sectionNumber) {
    for (let i = 1; i <= 6; i++) {
        const section = document.getElementById(`section${i}`);
        if (i === sectionNumber) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    }
}
