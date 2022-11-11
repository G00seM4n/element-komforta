$(document).ready(function () {
    /* Слайдер */
    $(".slider .owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navContainer: ".slider-navigation",
        dotsContainer: ".slider-dots",
        navText: ["<img class='left' src='assets/images/icons/arrow.svg'>", "<img class='right' src='assets/images/icons/arrow.svg'>"]
    });
    
    $(".modal-full .owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navContainer: ".slider-navigation",
        dotsContainer: ".slider-dots",
        navText: ["<img class='left' src='assets/images/icons/arrow.svg'>", "<img class='right' src='assets/images/icons/arrow.svg'>"]
    });

    /* Аккордион */
    let accordions = $('.accordion-collapse+active');

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
    
    /* Полноэкранное модальное окно */
    let modalFull = $('.modal-full');
    let modalFullLink = $('.modal-full-link');
    let modalFullClose = $('.modal-full .btn-close');

    modalFullLink.click(function () {
        modalFull.addClass('active');
        modalFullLink.addClass('active');
        document.body.style.overflow = 'hidden';
    });

    modalFullClose.click(function () {
        modalFull.removeClass('active');
        modalFullLink.removeClass('active');
        document.body.style.overflow = 'unset';
    });
});