let dropdown = document.getElementById('dropdown');
let dropdownLink = document.getElementById('dropdown-link');
const subDropdown = document.getElementById('sub-dropdown');
const subDropdownList = document.querySelector(".sub-dropdown-list");
dropdownLink.addEventListener('click', () => {
    const icon = document.querySelector('.drop-icon ion-icon');
    icon.classList.toggle('rotate-dropicon');
    dropdown.classList.toggle('open');
});
subDropdown.addEventListener('click', () => {
    const icon = document.querySelector('#sub-dropdown ion-icon');
    icon.classList.toggle('rotate-dropicon');
    subDropdownList.classList.toggle('open');
});


const rootElement = document.documentElement;
const toggleSwitch = document.getElementById('theme');
const themeIcon = document.querySelector('#theme ion-icon');
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    rootElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        themeIcon.classList.add("bi-brightness-high")
        themeIcon.classList.remove("bi-moon-stars")
    }
}

function switchTheme(e) {
    if (rootElement.getAttribute("data-theme") === "light") {
        rootElement.setAttribute("data-theme", "dark");
        themeIcon.classList.add("bi-brightness-high")
        themeIcon.classList.remove("bi-moon-stars")
        localStorage.setItem("theme", "dark");
    } else {
        rootElement.setAttribute("data-theme", "light");
        themeIcon.classList.remove("bi-brightness-high")
        themeIcon.classList.add("bi-moon-stars")
        localStorage.setItem("theme", "light");
    }
}

toggleSwitch.addEventListener("click", switchTheme, false);