


// FOR SUGGEST CATEGORY LIST SLIDER
$('.suggest-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    // variableWidth: true,
    arrows: true,
    speed: 1000,
    prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 451,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      }
    ]
  });


  // FOR TEAM SECTION OF INDEX PAGE
  $('.feature-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: true,
    fade: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


    // FOR RECOMEND SECTION OF INDEX PAGE
    $('.recomend-slider').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      arrows: true,
      fade: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
      nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false,
          }
        }
      ]
    });

  
  // FOR BLOG SLIDER OF INDEX PAGE
  $('.blog-slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    arrows: true,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false,
        }
      }
    ]
  });
  
  
  // FOR FEATURE ITEM SLIDER
$('.feature-item-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  arrows: true,
  fade: true,
  asNavFor: '.feature-thumb-slider',
  prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
  responsive: [
      {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
      }
  ]
});

$('.feature-thumb-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.feature-item-slider',
  dots: false,
  arrows: false,
  autoplay: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
      {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
    }
  ]
});
  


  // FOR AD DETAILS SLIDER
  $('.ad-details-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: true,
    asNavFor: '.ad-thumb-slider',
    prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
        }
    ]
  });
  
  $('.ad-thumb-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.ad-details-slider',
    dots: false,
    arrows: false,
    autoplay: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
            }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
      }
    ]
  });
    

    // FOR AD DETAILS FEATURE ADS
    $('.ad-details-feature').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      arrows: true,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
      nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });
  

// FOR RELATED SECTION OF DETAILS PAGE
$('.related-slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: true,
  fade: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
      }
    }
  ]
});