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
        centerMode:true,
        cssEase:'linear',
        responsive: [
        {
            breakpoint: 990,
            settings: {
            slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2
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
      
      <div className="sliderholder" dir="rtl">
        <Slider {...settings} >
        
  
            <div className="slide">
              <img src="img/Attestant.png" alt=""/>
            </div>
            <div className="slide">
              <img src="img/BlockDaemon.png" alt=""/>
            </div>
            <div className="slide">
              <img src="img/BlockScape.png" alt=""/>
            </div>
            <div className="slide">
              <img src="img/StakeWise.png" alt=""/>
            </div>
      
    
      
        </Slider>
      </div>
    );
  }
}