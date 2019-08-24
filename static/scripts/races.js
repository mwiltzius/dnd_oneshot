$(document).ready(function(){

    var descriptions = {
        dragonborn: "Nobody can remember a time when the dragonborn did not walk the earth. According to their own histories, they were created to tend the earth, just as the dragons were created to tend the heavens. As a consequence of this belief, the dragonborn possess an empire spanning many other races, which they rule over. The dragonborn themselves seldom leave the empire except for matters of state. However, some dragonborn can be found beyond the borders, sometimes as adventurers, and other times as exiles. </p><br><p> The dragonborn live in a strict caste system, with each 'clan', each composed of one of the many metallic colors. These clans claim to share power equally, but in truth each vies for the emperor's seat, and when they cannot get it, his favor. </p><br></p> The chromatic dragonborn, however, are not so lucky. Viewed as 'fake' or faded, these dragonborn occupy the lowest rung of society, even below the other races that live among them.",
        dwarf: 'I am a dwarf. I dig. Diggy hole!',
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
        $('.race-description p').html(descriptions[$(this).attr('id')])

        $('.cover').css('display', 'block');

    })

    $('.cover, .close').click(function(){

        $('.cover').hide();
    });

    $('.race-page').click(function(e){
        e.stopPropagation();
    });
})