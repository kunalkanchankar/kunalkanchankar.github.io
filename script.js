const icons = document.querySelectorAll('.icon');

icons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
        icon.querySelector('span').style.visibility = 'visible';
    });

    icon.addEventListener('mouseleave', () => {
        icon.querySelector('span').style.visibility = 'hidden';
    });
});
