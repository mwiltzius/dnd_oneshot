$(document).ready(function(){

    $('.race').click(function(){
        let source = $(this).children('img').attr('src');
        let race = $(this).children('h1').text();

        $('.race-page img').attr('src', source);
        $('.race-description h1').text(race);

        $('.cover').css('display', 'block');

    })

    $('.cover, .close').click(function(){

        $('.cover').hide();
    });

    $('.race-page').click(function(e){
        e.stopPropagation();
    });
})