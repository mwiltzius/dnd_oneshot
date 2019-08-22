$(document).ready(function(){

    $('.class').click(function(){

        if ($(this).attr('id') == 'wizard') {}
        else if ($(this).attr('expanded')) {
            $(this).removeAttr('expanded');
            $(this).animate({height: '70px'}, {duration: 300});
        }
        else {
            $(this).attr('expanded', 'true');

            $('.class').animate({height: '70px'}, {duration: 300, queue: false});
            $(this).animate({height: '200px'}, {duration: 300, queue: false});
        }
    })

})