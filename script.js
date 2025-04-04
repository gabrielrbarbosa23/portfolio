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
$(document).ready(function () {
    $('.backend').hide();
    $('.frontend').show();

    $('#nav-frontend').addClass('active');
    $('#nav-backend').removeClass('active');
});

function frontend() {
    $('.backend').hide();
    $('.frontend').show();
    $('#nav-backend').removeClass('active');
    $('#nav-frontend').addClass('active');
}

function backend() {
    $('.frontend').hide();
    $('.backend').show();
    $('#nav-frontend').removeClass('active');
    $('#nav-backend').addClass('active');
}

function fullstack() {
    $('.frontend').show();
    $('.backend').show();
    $('#nav-frontend').removeClass('active');
    $('#nav-backend').removeClass('active');
}

/*--------------------------------------------- skills ------------------------------------------------*/
function front() {
    $('.skills-front').show();
    $('.skills-back').hide();
    $('.skills-tools').hide();
    $('.skills-front').css('display', 'grid').show();
    $('#skills-nav-front').addClass('active');
    $('#skills-nav-back').removeClass('active');
    $('#skills-nav-tools').removeClass('active');
}

function back() {
    $('.skills-back').show();
    $('.skills-front').hide();
    $('.skills-tools').hide();
    $('.skills-back').css('display', 'grid').show();
    $('#skills-nav-back').addClass('active');
    $('#skills-nav-front').removeClass('active');
    $('#skills-nav-tools').removeClass('active');
}

function tools() {
    $('.skills-tools').show();
    $('.skills-back').hide();
    $('.skills-front').hide();
    $('.skills-tools').css('display', 'grid').show();
    $('#skills-nav-tools').addClass('active');
    $('#skills-nav-back').removeClass('active');
    $('#skills-nav-front').removeClass('active');
}


/*--------------------------------------------- resume ------------------------------------------------*/
function work() {
    $('.works').show();
    $('.educations').hide();
    $('#work').addClass('active');
    $('#education').removeClass('active');

    $('.resume-icons-box i')
        .removeClass('fa-briefcase')
        .addClass('fa-graduation-cap');
}

function education() {
    $('.educations').css('display', 'flex').show();
    $('.works').hide();
    $('#education').addClass('active');
    $('#work').removeClass('active');

    $('.resume-icons-box i')
        .removeClass('fa-graduation-cap')
        .addClass('fa-briefcase');
}

/*--------------------------------------------- aside mobile ------------------------------------------------*/

function toggleAside() {
    const aside = document.getElementById('aside');
    aside.classList.toggle('expanded');
}