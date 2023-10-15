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