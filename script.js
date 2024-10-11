/*--------------------------------------------- img ------------------------------------------------*/
function openImg() {
    Swal.fire({
        imageUrl: "assets/img/me_full.webp",
        showCloseButton: true,
        showConfirmButton: false,
        imageWidth: 300,
        imageHeight: 400,
        imageAlt: "Custom image",
        showClass: {
            popup: 'swal2-no-padding'
        },
        customClass: {
            popup: 'image-only-modal'
        }
    });
}

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

/*--------------------------------------------- projects ------------------------------------------------*/
function fullstack() {
    $('#frontend').show();
    $('#backend').show();
    $('#nav-fullstack').addClass('active');
    $('#nav-frontend').removeClass('active');
    $('#nav-backend').removeClass('active');
}

function frontend() {
    $('#frontend').show();
    $('#fullstack').hide();
    $('#backend').hide();
    $('#nav-fullstack').removeClass('active');
    $('#nav-backend').removeClass('active');
    $('#nav-frontend').addClass('active');
}

function backend() {
    $('#backend').show();
    $('#fullstack').hide();
    $('#frontend').hide();
    $('#nav-fullstack').removeClass('active');
    $('#nav-frontend').removeClass('active');
    $('#nav-backend').addClass('active');
}