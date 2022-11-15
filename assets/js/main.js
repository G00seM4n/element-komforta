$(document).ready(function () {
    /* Отступ сверху */
    $('main').css('margin-top', $('header').height());

    /* Меню */
    $('.burger-nav').click(function(){
        $('.mobile-menu').toggleClass('active');
    });
    $('.nav-link').click(function(){
        $('.mobile-menu').removeClass('active');
    });
    

    /* Слайдер 1 */
    $("#slider1").owlCarousel({
        items: 1,
        navContainer: ".slider1 .slider-navigation",
        dotsContainer: ".slider1 .slider-dots",
        nav: true,
        navText: ["<img class='left' src='assets/images/icons/arrow.svg'>", "<img class='right' src='assets/images/icons/arrow.svg'>"],
    });

    /* Слайдер 2 */
    $("#slider2").owlCarousel({
        items: 1,
        
        dots: false,
        navText: ["<img class='left' src='assets/images/icons/arrow.svg'>", "<img class='right' src='assets/images/icons/arrow.svg'>"],
        URLhashListener: 'URLHash',
        responsive : {
            0: {
                navContainer: false,
                nav: false
            },
            768 : {
                navContainer: ".slider2 .slider-navigation",
            }
        }
    });

    slides = $("#slider2 .owl-item");
    let navImg = $('.slider-navigation-imgs>a');

    window.addEventListener('hashchange', () => {
        let activeSlide = $('#slider2 .owl-item.active').children().data().hash;
        
        $.each(navImg, function (i, el) {
            if(window.location.hash.length != 0){
                $(el).removeClass('active');
            }
            if(activeSlide === el.hash.replace('#','')){
                $(el).addClass('active');
            }
        });
    });

    /* Аккордион */
    let accordions = $('.accordion-collapse');

    $.each(accordions, function (i, el) {
        $(el).on('show.bs.collapse', () => {
            $(this).parent().addClass('active');
        });
        $(el).on('hidden.bs.collapse', () => {
            $(this).parent().removeClass('active');
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