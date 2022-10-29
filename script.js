let menuBtn = document.querySelector('.menu__btn');
let navbar = document.querySelector('.navbar');
let isClick = false;

menuBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
    isClick = !isClick;
    if (isClick) {
        this.innerHTML = '&#x2715;';
    } else {
        this.innerHTML = '≡';
    }
});