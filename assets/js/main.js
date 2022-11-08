$(document).ready(function () {
    /* Слайдер */
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navContainer: ".slider-navigation",
        dotsContainer: ".slider-dots",
        navText: ["<img class='left' src='assets/images/icons/arrow.svg'>", "<img class='right' src='assets/images/icons/arrow.svg'>"]
    });

    /* Аккордион */
    let accordions = $('.accordion-collapse');

    $.each(accordions, function (i, el) {
        $(el).on('hidden.bs.collapse', () => {
            $(this).parent().removeClass('active');
        });
        $(el).on('show.bs.collapse', () => {
            $(this).parent().addClass('active');
        });
    });

    /* Выпадающий список адресов */
    let list = $('.list');
    let listItem = $('.list>li');
    let menuAddressBtn = $('.menu-address-btn');

    menuAddressBtn.click(function () {
        list.toggleClass('active');
        menuAddressBtn.toggleClass('active');
    });

    $.each(listItem, function (i, el) {
        $(el).click(function () {
            list.removeClass('active');
            menuAddressBtn.removeClass('active');

            menuAddressBtn.text($(el).text());
            menuAddressBtn.append(`<svg class="arrow" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0.5L7 6L12.5 0.5L14 1L7 8L0 1L1.5 0.5Z" fill="#383606"/></svg>`)
        });
    });
});