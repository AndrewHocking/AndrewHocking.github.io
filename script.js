$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.close').click(function () {
        $('.expanded-description').css("display", "none");
        $('.expanded-description').css("animation", "fadeIn ease 0.5s");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [
            "🎓 Student",
            "💻 Software Developer",
            "🎓 Student",
            "💻 Software Developer",
            "🎓 Student",
            "💻 Software Developer",
            "🎓 Student",
            "💻 Software Developer",
            "🍫 Chocolate Connoisseur"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [
            "​Student 🎓",
            "Software Developer 💻",
            "​Student 🎓",
            "Software Developer 💻",
            "​Student 🎓",
            "Software Developer 💻",
            "​Student 🎓",
            "Software Developer 💻",
            "Chocolate Connoisseur 🍫"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

function expandDescription(element) {
    var id = element.id;
    $(`#${id}.expanded-description`).css("display", "block");
}