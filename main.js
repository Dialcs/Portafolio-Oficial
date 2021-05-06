(function($){
    "use strict";

    //wow init
    var wow = new WOW({
        boxClass:'wow',
        animateClass : 'animated',
        offset: 0,
        mobile: false,
        live:true
    });
    wow.init();

    $(window).on("load", function(){
        if($('.isotope_items').length){
            var $container = $('.isotope_items');
            $container.isotope();

            $('.portfolio-filter ul li').on("click",function(){
                $(".portfolio-filter ul li").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                $(".isotope_items").isotope({
                    filter : selector,
                    animateOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }
    });


    //popup portfolio

    $('.isotope_items').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        zoom: {
            enabled : true,
            duration : 300,
            opener : function(element){
                return element.find('img');
            }
        }
    });

    //ScrollTop

    $(window).on('scroll',function(){
        if($(this).scrollTop() >= 700){
            $('#backtotop').fadeIn(500);
        }
        else{
            $('#backtotop').fadeOut(500);
        }
    });

    $('#backtotop').on('click',function(){
        $('body, html').animate({
            scrollTop: 0
        }, 500);
    });

})(jQuery);

/* Estilo de tipeado */

var typed = new Typed (".typing",{
    strings: ["programador.","diseñador.","freelancer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


$(document).ready(function(){
    var ir_a = $(".desplazar");
    ir_a.click(function(evento){
        evento.preventDefault();
        $("body, html").animate(
            {
                scrollTop: $(this.hash).offset().top,
            }, 1000
        );
    })
})
