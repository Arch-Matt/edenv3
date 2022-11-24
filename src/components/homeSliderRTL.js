import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderRTL extends Component {
  render() {
    const settings = {
        dots:false,
        arrows:false,
        autoplay:true,
        autoplaySpeed:0,
        speed:10000,
        easing:'linear',
        pauseOnHover:false,
        slidesToShow:4,
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
    };
    return (
      
      <div className="sliderholder" dir="rtl">
        <Slider {...settings} >
        
  
            <div className="slide">
              <img src="img/logo-staked.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-rocket.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-solana.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-s.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-kraken.svg" alt=""/>
            </div>
    
      
        </Slider>
      </div>
    );
  }
}