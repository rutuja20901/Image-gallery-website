$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 60){

            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
    });
});