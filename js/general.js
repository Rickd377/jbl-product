const colors = document.querySelectorAll('.color');
const image = document.querySelector('.main-image');

colors.forEach(color => {
    color.addEventListener('click', () => {
        colors.forEach(c => {
            c.classList.remove('selected-color');
            c.classList.add('not-selected-color');
        });

        color.classList.remove('not-selected-color');
        color.classList.add('selected-color');

        if (color.classList.contains('black')) {
            image.src = './assets/headphone_black.webp';
        } else if (color.classList.contains('blue')) {
            image.src = './assets/headphone_blue.webp';
        } else if (color.classList.contains('purple')) {
            image.src = './assets/headphone_purple.webp';
        } else if (color.classList.contains('white')) {
            image.src = './assets/headphone_white.webp';
        }
    });
});