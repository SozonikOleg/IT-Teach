$(function(){

    $('.menu__toggle').on('click', function(){

        $('.nav').slideToggle(300, function(){

            if ($(this).css('display')==='none'){
                $(this).removeAttr('style');
            }

        });

    })

    $('.menu__toggle').on('click', function () {
        $('.nav').addClass('active');
      });

    $('.icon__close').on('click', function () {
        $('.nav').removeClass('active');
    });  
    $('.icon__close').on('click', function () {
        $('.nav').removeAttr('style');
    }); 

});

