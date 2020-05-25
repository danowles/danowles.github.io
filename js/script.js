window.addEventListener("carregando",function(load){

    console.log("pagina carregada com sucesso!");
})

(function(){

    'use strict';

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');sweetalertclick
    });

    $('.card').mouseenter(function(){

        $('.card-overlay').css({'top': '-100%'});
        $('card-hover').css({'top': '0'});

    }).mouseleave(function(){
       
        $('.card-overlay').css({'top': '0'});
        $('card-hover').css({'top': '100%'});
        
    })

})(jQuery);