
$(document).ready(function() {

    $(window).scroll( function(){

        $('.fadein1').each( function(i){

             

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();

            var bottom_of_window = $(window).scrollTop() + $(window).height();

             

            if( bottom_of_window > bottom_of_element ){

                $(this).animate({'opacity':'1'},1000);

            }

             

        });

    });
});
$(document).ready(function() {

    $(window).scroll( function(){

        $('.fadein2').each( function(i){

             

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();

            var bottom_of_window = $(window).scrollTop() + $(window).height();

             

            if( bottom_of_window > bottom_of_element ){

                $(this).animate({'opacity':'1'},4000);

            }

             

        });

    });
});
$(document).ready(function() {

    $(window).scroll( function(){

        $('.fadein3').each( function(i){

             

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();

            var bottom_of_window = $(window).scrollTop() + $(window).height();

             

            if( bottom_of_window > bottom_of_element ){

                $(this).animate({'opacity':'1'},6000);

            }

             

        });

    });
});