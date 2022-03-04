const bars = document.querySelector('.burger-icon');
const items = document.querySelector('.nav-items')

bars.addEventListener('click', showNav);

function showNav(){
    items.classList.toggle('mobile-hide')
}