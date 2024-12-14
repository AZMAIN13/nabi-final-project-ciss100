// Change theme color dynamically
document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = button.dataset.color;
    });
});
