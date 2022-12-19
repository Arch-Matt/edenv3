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
              <a href="https://everstake.one/" target="_blank"><img src="img/logo-everstake.png" alt=""/></a>
            </div>
            <div className="slide">
              <a href="https://stakin.com/" target="_blank"><img src="img/logo-stakin.png" alt=""/></a>
            </div>
            <div className="slide">
              <a href="https://stakely.io/" target="_blank"><img src="img/logo-stakely.png" alt=""/></a>
            </div>
            <div className="slide">
              <a href="https://www.hashquark.io/" target="_blank"><img src="img/logo-hasquark.png" alt=""/></a>
            </div>
            <div className="slide">
              <a href="https://lido.fi/" target="_blank"><img src="img/logo-lido_blue.png" alt=""/></a>
            </div>
            <div className="slide">
              <a href="https://rocketpool.net/" target="_blank"><img src="img/logo-rocket.svg" alt=""/></a>
            </div>
      
        </Slider>
      </div>
    );
  }
}