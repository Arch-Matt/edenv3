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
    };
    return (
      
      <div className="sliderholder">
        <Slider {...settings}>
        
          
            <div className="slide">
              <img src="img/logo-binance.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-bitcoin_suisse.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-bitstamp.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-chorus.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-coinbase.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-huobi.svg" alt=""/>
            </div>
      
        </Slider>
      </div>
    );
  }
}