/*--------------------------------------------- navbar ------------------------------------------------*/
function home() {
    $('#home').show();
    $('#about').hide();
    $('#projects').hide();
    $('#resume').hide();
    $('#contact').hide();
}

function about() {
    $('#about').css('display', 'flex').show();
    $('#home').hide();
    $('#projects').hide();
    $('#resume').hide();
    $('#contact').hide();
}

function projects() {
    $('#projects').css('display', 'flex').show();
    $('#home').hide();
    $('#about').hide();
    $('#resume').hide();
    $('#contact').hide();
}

function resume() {
    $('#resume').css('display', 'flex').show();
    $('#home').hide();
    $('#about').hide();
    $('#projects').hide();
    $('#contact').hide();
}

function contact() {
    $('#contact').css('display', 'flex').show();
    $('#home').hide();
    $('#about').hide();
    $('#projects').hide();
    $('#resume').hide();
}