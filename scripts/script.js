console.log("hi");

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