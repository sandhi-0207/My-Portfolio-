function showSection(sectionId) {

    let sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");

    let menuItems = document.querySelectorAll(".box1 li");

    menuItems.forEach(item => {
        item.classList.remove("active-menu");
    });

    event.target.classList.add("active-menu");
}