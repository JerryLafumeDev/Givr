

// FOR NAVBAR FIXED WHEN SCROLL
$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    if (scrolling > 100){
        $(".header-part").addClass("header-fixed");
    }else{
        $(".header-part").removeClass("header-fixed");
    }
});


// FOR HEADER ADVANCE SEARCH OPTION
$(".header-option-btn").on("click", function(){
    $(".header-search-option").toggle('slow');
    $(".header-main-search .form-control").toggleClass('active');
});


// FOR MOBILE DEVICE SEARCH BAR
$('.header-src').on('click', function(){
    $('.header-search').toggleClass('active');
});


// FOR RESPONSIVE DROPDOWN MENU
$(function () {
    $(".navbar-dropdown a").click(function() {
        $(this).next().toggle();
        if($('.dropdown-list:visible').length > 1) {
            $('.dropdown-list:visible').hide();
            $(this).next().show();
        }
    }); 
});


// FOR NASTED DROPDOWN MENU
$(function () {
    $(".nasted-menu").click(function() {
        $(this).next().toggle();
        if($('.nasted-menu-list:visible').length > 1) {
            $('.nasted-menu-list:visible').hide();
            $(this).next().show();
        }
    }); 
});


// FOR SIDEBAR SLIDE
$('.header-menu').on('click', function(){
    $('.sidebar-part').addClass('active');
    $('.sidebar-cross').on('click', function(){
        $('.sidebar-part').removeClass('active');
    });
});


// FOR FAVOURITE WIDGET ICON
$('.feature-bookmark button').on('click', function(){
    $(this).toggleClass('active');

});


// FOR PRODUCT PRODUCT CARD BOOKMARK
$('.product-widget .fa-heart').on('click', function(){
    $(this).toggleClass('fas');
});


// PASSWORD VIEW TOGGLE
$(".toggle-password").on('click', function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

// FOR NAVBAR WIDGET ICON TAB TOGGOLE
$(".navbar-widget li").on("click", function(){
    $(".navbar-widget li").removeClass("active");
    $(this).addClass("active");
});


// FOR SIDEBAR SHOW & HIDE FROM RIGHT SIDE
$(".navbar-user").on("click", function(){
    $(".sidebar-part").addClass("active");
    $(".cross-btn").on('click', function(){
        $(".sidebar-part").removeClass("active");
    });
});

// FOR USER EIDT OPTION HIDE & SHOW
$(".edit-btn").on('click', function(){
    $(".edit-option").addClass("active");
    $(".cancel").on('click', function(){
        $(".edit-option").removeClass("active");
    })
})


// FOR GRID SYSTEM PRODUCT CARD
$('.grid-hori').on('click', function(){
    $('.grid-hori').addClass('active');
    $('.card-grid').addClass('col-sm-12');
    $('.card-grid').addClass('col-md-12');
    $('.card-grid').addClass('col-lg-12');
    $('.product-card').addClass('inline');
    $('.grid-verti').removeClass('active');
    $('.grid-verti').on('click', function(){
        $('.grid-verti').addClass('active');
        $('.grid-hori').removeClass('active');
        $('.card-grid').removeClass('col-sm-12');
        $('.card-grid').removeClass('col-md-12');
        $('.card-grid').removeClass('col-lg-12');
        $('.product-card').removeClass('inline');
    });
});


// FOR ABOUT CATEGORY CONTENT
let tabButton = document.querySelectorAll(".tab-btn");
let tabPanel = document.querySelectorAll(".tab-panel");

// function showPanel(panelIndex) {
//     tabPanel.forEach(function(node){
//         node.style.display = "none";
//     });
//     tabPanel[panelIndex].style.display = "block";
// }
// showPanel(0);

















