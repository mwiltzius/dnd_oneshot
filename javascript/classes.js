$(document).ready(function(){

    $('.class').click(function(){

        if ($(this).attr('expanded')) {
            $(this).removeAttr('expanded');
            $(this).animate({height: '40px'}, {duration: 300});
        }
        else {
            $(this).attr('expanded', 'true');

            $('.class').animate({height: '40px'}, {duration: 300, queue: false});
            $(this).animate({height: '100px'}, {duration: 300, queue: false});
        }
    })

})