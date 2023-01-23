import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderLTR2 extends Component {
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
              <a href="https://stakingfacilities.com/" target="_blank"><img src="img/logo-stakingfacilities.svg" alt=""/></a>
            </div>
            <div className="slide">
              <a href="https://www.allnodes.com/" target="_blank"><img src="img/logo-allnodes-2.png" alt=""/></a>
            </div>
            <div className="slide">
              <a href="https://www.senseinode.com/" target="_blank"><img src="img/logo-senseinode-2.svg" alt=""/></a>
            </div>
            <div className="slide">
              <a href="https://www.chainlayer.io/" target="_blank"><img src="img/logo-chainlayer-2.png" alt=""/></a>
            </div>
      
        </Slider>
      </div>
    );
  }
}