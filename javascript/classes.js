$(document).ready(function(){

    $('.class').click(function(){
        //collapse others
        $('.class').animate({height: '40px'}, queue=false);
        //expand this
        $(this).animate({height: '100px'}, queue=false);
    })

})