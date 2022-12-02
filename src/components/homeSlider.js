import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderLTR extends Component {
  render() {
    const settings = {
        dots:false,
        arrows:false,
        autoplay:true,
        autoplaySpeed:0,
        speed:10000,
        easing:'linear',
        pauseOnHover:false,
        slidesToShow:6,
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
            breakpoint: 660,
            settings: {
            slidesToShow: 2
            }
        },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    };
    return (
      
      <div className="sliderholder">
        <Slider {...settings}>
        
          
            <div className="slide">
              <img src="img/logo-everstake.png" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-stakin.png" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-stakely.png" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-hasquark.png" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-lido_blue.png" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-rocket.svg" alt=""/>
            </div>
      
        </Slider>
      </div>
    );
  }
}