// Получаем элементы меню, поиска и корзины
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

// Обработчик клика для кнопки меню
// При клике на #menu-btn меню открывается/закрывается
// Остальные элементы (поиск и корзина) закрываются
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};

// Обработчик клика для кнопки поиска
// При клике на #search-btn поле поиска открывается/закрывается
// Остальные элементы (меню и корзина) закрываются
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
};

// Обработчик клика для кнопки корзины
// При клике на #cart-btn корзина открывается/закрывается
// Остальные элементы (меню и поиск) закрываются
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
    // Если клик не по меню и не по кнопке меню - закрываем меню
    if (!navbar.contains(e.target) && !document.querySelector('#menu-btn').contains(e.target)) {
        navbar.classList.remove('active');
    }
    // Если клик не по поиску и не по кнопке поиска - закрываем поиск
    if (!searchForm.contains(e.target) && !document.querySelector('#search-btn').contains(e.target)) {
        searchForm.classList.remove('active');
    }
    // Если клик не по корзине и не по кнопке корзины - закрываем корзину
    if (!cartItem.contains(e.target) && !document.querySelector('#cart-btn').contains(e.target)) {
        cartItem.classList.remove('active');
    }
});

// Закрытие всех окон при прокрутке
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};