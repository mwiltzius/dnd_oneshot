$(document).ready(function(){

    var descriptions = {
        dragonborn: 'This is the dragonborn description, we are bold and racist.',
        dwarf: 'I am a dwarf. I dig.',
        elf: 'And you thought the dragonborn were racist.',
        gnome: 'Sneaky and smol.',
        halfelf: 'Between two worlds.',
        halfling: 'In a hole in the ground, there lived a hobbit.',
        halforc: "Looks like meat's back on the menu, boys!",
        human: "We're basicaly what you choose when you can't think of what to choose.",
        tiefling: "Demon bois."
    }


    $('.race').click(function(){
        let source = $(this).children('img').attr('src');
        let race = $(this).children('h1').text();
        let color = $(this).css('background-color');

        $('.race-page img').attr('src', source);
        $('.race-description h1').text(race);
        $('.race-description h1').css({
            'border-bottom': '2px solid ' + color,
            'border-right': '20px solid ' + color 
        })
        $('.race-description p').text(descriptions[$(this).attr('id')])

        $('.cover').css('display', 'block');

    })

    $('.cover, .close').click(function(){

        $('.cover').hide();
    });

    $('.race-page').click(function(e){
        e.stopPropagation();
    });
})