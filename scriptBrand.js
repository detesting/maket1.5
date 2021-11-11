const swiper = new Swiper('.swiper-container', {

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    spaceBetween: 16,
    slidesPerView: 1.15,
    centeredSlides: true,

});

var buttonShowAll = document.querySelector('.more');
var buttonHideAll = document.querySelector('.hide');
var brands = document.querySelector('.brands');


buttonShowAll.addEventListener('click', function (event) {
    buttonShowAll.classList.add('hideButton');
    buttonHideAll.classList.remove('hideButton');
    brands.classList.add('showAll')
})
buttonHideAll.addEventListener('click', function (event) {
    buttonHideAll.classList.add('hideButton');
    buttonShowAll.classList.remove('hideButton');
    brands.classList.remove('showAll');
})