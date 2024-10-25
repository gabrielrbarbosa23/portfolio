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
    $('.frontend').show();
    $('.backend').show();
    $('.fullstack').show();
    $('#nav-fullstack').addClass('active');
    $('#nav-frontend').removeClass('active');
    $('#nav-backend').removeClass('active');
}

function frontend() {
    $('.frontend').show();
    $('.fullstack').show();
    $('.backend').hide();
    $('#nav-fullstack').removeClass('active');
    $('#nav-backend').removeClass('active');
    $('#nav-frontend').addClass('active');
}

function backend() {
    $('.backend').show();
    $('.fullstack').show();
    $('.frontend').hide();
    $('#nav-fullstack').removeClass('active');
    $('#nav-frontend').removeClass('active');
    $('#nav-backend').addClass('active');
}

/*--------------------------------------------- skills ------------------------------------------------*/
function skillFront() {
    $('.skills-list-front').toggle();
    const icon = $('#icon-front');
    toggleIcon(icon);
}

function skillBack() {
    $('.skills-list-back').toggle();
    const icon = $('#icon-back');
    toggleIcon(icon);
}

function skillOther() {
    $('.skills-list-other').toggle();
    const icon = $('#icon-other');
    toggleIcon(icon);
}

function toggleIcon(icon) {
    icon.toggleClass('rotate');
}