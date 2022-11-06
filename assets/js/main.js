/* Слайдер */
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navContainer: ".slider-navigation",
        dotsContainer: ".slider-dots",
        navText: ["<img class='left' src='assets/images/icons/arrow.svg'>","<img class='right' src='assets/images/icons/arrow.svg'>"]
    });
    
    let accordions = $('.accordion-collapse')
    $.each(accordions, function(i, el){
        $(el).on('hidden.bs.collapse', function () {
            $(this).parent().removeClass('active')
        })
        $(el).on('show.bs.collapse', function () {
            $(this).parent().addClass('active')
        })
    });
});



/* модальные окна */
