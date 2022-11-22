$(function(){
  $(".home-slider").slick({
    dots:false,
    arrows:false,
    autoplay:true,
    autoplaySpeed:0,
    speed:10000,
    easing:'linear',
    pauseOnHover:false,
    slidesToShow:5,
    cssEase:'linear',
    centerMode:true,
    centerPadding:'30px',
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  $(".home-slider-rtl").slick({
    dots:false,
    arrows:false,
    autoplay:true,
    autoplaySpeed:0,
    speed:10000,
    easing:'linear',
    pauseOnHover:false,
    slidesToShow:5,
    rtl:true,
    cssEase:'linear',
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $(".slider-twitter").slick({
    dots:true,
    arrows:false,
    autoplay:false,
    autoplaySpeed:0,
    speed:300,
    easing:'linear',
    pauseOnHover:true,
    slidesToShow:5,
    cssEase:'linear',
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

$("video").trigger("play");

 
});


window.onscroll = function(){
  var scrollTop = window.pageYOffset;
  if(scrollTop >= 1){
    $(".navbar").addClass("bg");
  }else{
    $(".navbar").removeClass("bg");
  }
};